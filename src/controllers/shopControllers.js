//const path = require(path);
//const {getItems} = require('../models/itemsModels');
//const data = [];

const shopControllers = {
    shop: (req,res) => res.render('pages/tienda/shop',{title:"Shop",stylecss:"styleshop.css"}),   //res.send('Route for Shop View'),
    item: (req,res) => res.render('pages/tienda/item',{title:"Item",stylecss:"index.css"}),   //res.send('Route for find and retrieve an item from an id'),
 itemadd: (req,res) => res.send('Route for adding an item to shop cart'),
    cart: (req,res) => res.render('pages/tienda/carrito',{title:"Carrito",stylecss:"carrito.css"}),   //res.send('Route for cart View'),
 cartprocess: (req,res) => res.send('Route for checkout page')
}
    
module.exports = shopControllers;    
