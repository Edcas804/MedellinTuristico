var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let colors = ['red', 'blue', 'green']; 
    let title = "Products new";
   
    let locals = {
        siteColors: colors,
	title: title
    }
	
    res.render('empresas', locals);
});

module.exports = router;
