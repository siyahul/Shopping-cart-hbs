var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name: 'Apple iPhone 11 Pro',
      price: 999.0,
      description: 'Made by apple in California',
      image : 'https://images-na.ssl-images-amazon.com/images/I/61fkdeyq5QL._SL1024_.jpg',
      catogory : 'Mobile'
    },
    {
      name: 'Apple iPhone 11',
      price: 799.0,
      description: 'Made by apple in California',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg',
      catogory : 'Mobile'
    },
    {
      name: 'Apple iPhone SE',
      price: 399.0,
      description: 'Made by apple in California',
      image:'https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqfsuzwa3dz.jpeg?q=70',
      catogory : 'Mobile'
    },
    {
      name : 'Apple iPhone XR',
      price: 500.0,
      description: 'Made by apple in California',
      image: 'https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70',
      catogory: 'Mobile'
    }
  ];

  res.render('index', {products,admin:true});
});

module.exports = router;
