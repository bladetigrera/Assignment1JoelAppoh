var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Add the nav pages

router.get('/aboutus',function(req,res,next)
{
  //load the about.ejs
  res.render('aboutus');
});
router.get('/projects',function(req,res,next)
{
  //load the project.ejs
  res.render('projects');
});
router.get('/services',function(req,res,next)
{
  //load the services.ejs
  res.render('services');
});
router.get('/contact',function(req,res,next)
{
  //load the contact.ejs
  res.render('contact');
});



module.exports = router;
