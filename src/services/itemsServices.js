const items = require('../models/itemsModels');

const getItems = async (params) => {    
 return await items.getItems(params);
};

const getItemsBuscados = async (params) => {    
 return await items.getItemsBuscados(params);
};

const getItem = async (params) => {    
    return await items.getItem(params);
   };

const deleteItem = async (params) => {   
    return await items.deleteItem(params);
   };

const getCategorias = async (params) => {    
    return await items.getCategorias(params);
   };

const getLicencias = async (params) => {    
    return await items.getLicencias(params);
   };

module.exports = {
 getItems,
 getItemsBuscados,
 getItem,
 deleteItem,
 getCategorias,
 getLicencias
}
