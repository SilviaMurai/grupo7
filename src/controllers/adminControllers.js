const path = require('path');
const itemsServices = require('../services/itemsServices');
//const { getCategorias }  = require('../services/itemsServices');

const adminView = async (req, res) => {
    const { data } = await itemsServices.getItems(req.params);
    res.render('pages/admin/admin',
    {
     title: "Admin",
     stylecss:"admin.css",
     items: data
    });
}

const adminSearch = async (req, res) => {          //POST
console.log(req.body);                             // 12/12/2023.empezo a andar despues de install express-validator ???
 const postparams =  {buscar:req.body.buscar};     // {buscar: "harry"};  //{buscar: req.body.busqueda_buscar};
 const {data}  = await itemsServices.getItemsBuscados(postparams);
 res.render('pages/admin/admin',
 {
  title: "Admin",
  stylecss:"admin.css",
  items: data
 });    
}

const adminItemCreate = async (req, res) => {       //GET
  let response;
  response = await itemsServices.getCategorias({});
  const categorias = response.data;
  response = await itemsServices.getLicencias({});
  const licencias = response.data;

  res.render('pages/admin/create',
      {
       title: `Crear Item`,
       stylecss:"creatstyle.css",
       categorias: categorias,
       licencias: licencias
      });                    
  }


const adminItemEdit = async (req, res) => {       //GET
  //console.log('itemedit body '+req.body.id); 
console.log('adminItemEdit params '+req.params.id); 
  //const postparams =  {id: "1"};  
//console.log(postparams);
  const getparams =  {id: req.params.id}; 
  const {data} = await itemsServices.getItem(getparams);
  
  let response;
  response = await itemsServices.getCategorias({});
  const categorias = response.data;
  response = await itemsServices.getLicencias({});
  const licencias = response.data;

  res.render('pages/admin/edit',
      {
       title: `Editar Item ${getparams.id}`,
       stylecss:"creatstyle.css",
       item: data,                   //siempre debe encontrar un solo registro
       categorias: categorias,
       licencias: licencias
      });                    
  }

  const adminItemDelete = async (req, res) => {   //DELETE
    const postparams =  {id: "14"}  //para que siempre deletee el item 14
  //console.log(postparams);
    const ok = await itemsServices.deleteItem(postparams);     
    //console.log(ok+' '+postparams.id);
    res.render('pages/admin/delete',
    {
      title: "Deleteado",
      stylecss:"admin.css",
      id:postparams.id          //req.params.id
    }); 
  }

//*******************************************************************************************************
const adminControllers = {
  admin:         adminView,  //(req,res) => res.render('pages/admin/admin'),   //res.send('Route for Admin view'),
  adminsearch:   adminSearch,
  create:        adminItemCreate,  //(req,res) => res.render('pages/admin/create',{title: "Crear",stylecss:"creatstyle.css"}),   //res.send('Route for create view'),
  createprocess: (req,res) => res.send('Route for create process'),
  edit:          adminItemEdit,  //(req,res) => res.render('pages/admin/edit'),  //GET 'pages/admin/edit:id'  //res.send('Route for item:id view'),
  editprocess:   (req,res) => res.send('Route for item:id process'),   //PUT
  //delete:      (req,res) => res.render('pages/admin/delete'), //res.send('Route for item:id delete') // res.send('Route for delete'),  
  deleteprocess: adminItemDelete,    //(req,res) => res.send('Route for item:id delete'),
  //ACA NO DEBERIA LLEGAR deleteado: (req,res) => res.render('pages/admin/delete',{title: "POSTPARAM Deleteado",stylecss:"admin.css",id:req.params.id})  //res.send('Route for item:id delete')
 }
   
 module.exports = adminControllers;

