var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connString = "postgres://catherinemarston@localhost/ecommerce";
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config.js');
var session = require('express-session');

var adminController = require('./controllers/adminController');
var cartController = require('./controllers/cartController');

//initate express app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'keyboardcat'
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

//DATABASE///
//////
var databaseObject = massive.connectSync({
  connectionString: connString
})

app.set('db', databaseObject);
var db = app.get('db');
//initiate express app

//PASSPORT FACEBOOK STUFF
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.getUserByUsername([username], function(err, user) {
      user = user[0];
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    })
  }
));

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
    db.getUserByFacebookId([profile.id], function(err, user) { ///getting profileId from Facebook
      user = user[0];
      if (!user) {
        console.log('CREATING USER');
        db.createUserFacebook({username: profile.displayName, facebook_id: profile.id}, function(err, user) { //createsNewUser
          console.log('USER CREATED', user);
          return cb(err, user);
        })
      } else {
        return cb(err, user);
      }
    })
  }));
//passport serialization
passport.serializeUser(function(user, done) {
  done(null, user.userid);
})

passport.deserializeUser(function(id, done) {
    db.getUserById([id], function(err, user) {
      user = user[0];
      if (err) console.log(err);
      else console.log('RETRIEVED USER');
      console.log(user);
      done(null, user);
    })
  })

app.post('/auth/local', passport.authenticate('local'), function(req, res) {
  res.status(200).send();
});

app.get('/auth/facebook', passport.authenticate('facebook'));

  //most important one
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/'
}),
  function(req, res) {
    res.status(200).send(req.user);
  });

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})


app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//GET ENDPOINTS FOR PRODUCTS

app.get('/womens', function(req, res, next) {
  db.get_all_shoes(function(err, products) {
    res.status(200).send(products);
  });
});

app.get('/womens/heels', function(req, res, next) {
  db.get_all_heels(function(err, products) {
    res.status(200).json(products);
  });
});

app.get('/womens/flats', function(req, res, next) {
  db.get_all_flats(function(err, products) {
    res.status(200).json(products);
  });
});

app.get('/womens/sandals', function(req, res, next) {
  db.get_all_sandals(function(err, products) {
    res.status(200).json(products);
  });
});
//get specific womens product for product page
app.get('/womens/:id', cartController.getOneProduct);

app.get('/cart', cartController.getCart);
// app.get('/womens/:id', function(req, res, next) {
//   db.get_shoe_for_product_page(req.params.name, function(err, product) {
//     res.status(200).send(product);
//   });
// });
app.get('/cart/total', cartController.getTotalPrice);
//POST ENDPOINTS FOR CART

app.post('/cart', cartController.addProductToCart);

//admin STUFF
app.post('/admin/products', adminController.addProduct);

app.post('/admin/product/images', adminController.addImagesToProduct);


//maybe delete an item here and update
var port = 3000;
app.listen(port, function() {
  console.log("Started server on port", port);
});
