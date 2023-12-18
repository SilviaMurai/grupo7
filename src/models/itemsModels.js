const { conn } = require('../config/conn');

const getItems = async (params) => {
  try 
  {
   const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
   //return rows;
   const response = {
    isError: false,
    data: rows
   };
   return response;
  } 
  catch (err) 
  {
  //throw err;
   const error = {
    isError: true,
    message: `Productos NO encontrados: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}

const getItemsBuscados = async (params) => {
  try 
  {const buscar = params.buscar;
   const [rows] = await conn.query(`SELECT product.*, category.category_name, licence.licence_name FROM product LEFT JOIN category ON product.category_id = category.category_id LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE sku LIKE "%${buscar}%" OR product_name LIKE "%${buscar}%" OR licence_name LIKE "%${buscar}%";`);
   const response = {
    isError: false,
    data: rows
   };
   return response;
  } 
  catch (err) 
  {//throw err;
   const error = {
    isError: true,
    message: `Productos NO encontrados: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}


const getItem = async (params) => {
  try 
  {
   const idedit = params.id; 
   const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id=?;', idedit);
   //return rows;
   const response = {
    isError: false,
    data: rows[0]        //rows[0] siempre debe encontrar 1
   };
   return response;
  } 
  catch (err) 
  {
  //throw err;
   const error = {
    isError: true,
    message: `Producto ${params.id} NO encontrado: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}

const deleteItem = async (params) => {
  try {
    const iddel = params.id;
    let response;
console.log('deleteItem: '+iddel);    
    if( iddel > 0 )
    {
     const [rows] = await conn.query('DELETE FROM product WHERE product_id=?;', iddel);
     response = {
      isError: false,
      data: rows,
      message: `Item Id ${iddel} eliminado.`
     }
console.log(response.message);    
    }
    else
    {
     response = {
        isError: true,
        data: null,
        message: `Item Id ${iddel} a eliminar NO valido.`
      }
    } 
console.log(response);   
    return response;
  } 
  catch (err) 
  {
  //throw err;
   const error = {
    isError: true,
    message: `ERROR: Item ${params.id} NO eliminado: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}

const getCategorias = async (params) => {
  try 
  {
   const [rows]  = await conn.query('SELECT category.* FROM category;');
   const response = {
    isError: false,
    data: rows
   };
   return response;
  } 
  catch (err) 
  {
   const error = {
    isError: true,
    message: `Categorias NO encontradas: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}

const getLicencias = async (params) => {
  try 
  {
   const [rows] = await conn.query('SELECT licence.* FROM licence;');
   const response = {
    isError: false,
    data: rows
   };
   return response;
  } 
  catch (err) 
  {
   const error = {
    isError: true,
    message: `Licencias NO encontradas: ${err}.`
   };
   return error;
  } 
  finally 
  {
   await conn.releaseConnection();
  }
}


module.exports = {
 getItems,
 getItemsBuscados,
 getItem,
 deleteItem,
 getCategorias,
 getLicencias
}

