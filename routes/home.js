var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Graffiti' });
});

router.get('/about01', function(req, res, next) {
  res.render('about', { title: 'about01',imagepath: "/images/1.jpg", 
    introduction: "Be As Naughty As You Want , can be found on Seven Dials, Neals Yard London WC2.", 
    author: "Bambi, a contemporary British street artist.", 
    story: "Inspired by Prince William in a recent interview saying how sad he is that his mother never met her grandchildren and how much she would have loved them, Bambi adds “If Di were here today you know she would be whispering to them “Be As Naughty As You Want… Just Don’t Get Caught”." });
});

router.get('/about02', function(req, res, next) {
  res.render('about', { title: 'about02',imagepath: "/images/2.jpg", 
    introduction: "Here's Banksy's The Hanging man on Frogmore Street, Bristol.", 
    author: "Banksy, an anonymous England-based street artist, vandal and political activist.", 
    story: "Unusually, for Banksy’s early work, this mural was not removed by the local authorities, and remains in the city as a point of pilgrimage for Banksy fans visiting the city that shaped their hero. The painting is humorously graffitied onto the side of a sexual health clinic." });
});

router.get('/about03', function(req, res, next) {
  res.render('about', { title: 'about03',imagepath: "/images/3.jpg" , 
    introduction: "This can be found on Nelson Street, Bristol.,", 
    author: "El Mac", 
    story: "Painted by El Mac in 2011 at the See No Evil festival (the predecessor to Upfest). The picture is based on a photo of his girlfriend and her niece." });
});

router.get('/about04', function(req, res, next) {
  res.render('about', { title: 'about04',imagepath: "/images/4.jpg" , 
    introduction: "Girl with Balloon is a 2002-started London series of stencil murals by the graffiti artist Banksy, depicting a young girl with her hand extended toward a red heart-shaped balloon carried away by the wind. ", 
    author: "Banksy, an anonymous England-based street artist, vandal and political activist.", 
    story: "Banksy has several times used variants of this design to support social campaigns: in 2005 about the West Bank barrier, in 2014 about the Syrian refugee crisis, and also about the 2017 UK election." });
});

router.get('/about05', function(req, res, next) {
  res.render('about', { title: 'about05',imagepath: "/images/5.jpg" , 
    introduction: " The gigantic portrait of John Lennon can be found on the Tobacco Factory in Southville ", 
    author: "Eduardo Kobra, a Brazilian artist.", 
    story: "It is one of pieces at the 2007's UpFest, which is the largest street art festival in Europe. Many young people believes the painting is of Harry Potter gazing over them, not John Lennon." });
});

router.get('/about06', function(req, res, next) {
  res.render('about', { title: 'about06',imagepath: "/images/6.jpg" , 
    introduction: "This can be found on Nelson Street, Bristol.", 
    author: " Aryz, a Spanish artist", 
    story: "Aryz paints large scales murals and does so around the world. We’ve seen lots of his work in London as he’s visited a few times and there’s also a long standing iconic piece in Bristol. " });
});

router.get('/about07', function(req, res, next) {
  res.render('about', { title: 'about07',imagepath: "/images/7.jpg" , 
    introduction: "A little girl is afraid of mice. Many of Banxi's work is tailored to local conditions. The foundation of the little mouse is the shape of the original broken wall.", 
    author: "Banksy, an anonymous England-based street artist, vandal and political activist.", 
    story: "Many of Banksy's works are based on mice." });
});


module.exports = router;
