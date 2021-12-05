var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 3334;

var execute = require('./server/mysqlConnection');

app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  /*
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', true);
*/
  console.log("/" + req.toString());
  next();
});

app.get("/",function(req,res){
  //execute.start();
	res.sendFile(path + 'index.html');
}); 

app.get("/ticket",function(req,res){
  console.log(req.query);
  const {fecha,codprod,desprod,codmedida,cantidad,persona,totalentregado,obs} = req.query;
  
  res.format ({
    'text/html': function() {
       res.send(`

          <h3>Comprobante de Producto Entregado</h3>
          <br>
          <label>Fecha:</label><b>${fecha}</b>
          <br>
          
          <br>
          <table>
            <thead>
              <tr>
                <td><b>Producto</b></td>
                <td><b>Cantidad</b></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${desprod}
                  <br>
                  <br>
                  <small>Codigo:${codprod}</small>      
                </td>
                <td>${cantidad} ${codmedida}
                  <br>
                  <br>
                  <small>Uns Entregadas: ${totalentregado}</small>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <label>Entregado a:</label>
          <h4>${persona}</h4>
          <br>
          <label><b>Observaciones:</b></label>
          <br>
          <label>${obs}</label>
          <br>
          <br>
          <label><b>BLOCKERA DON RAUL</b></label>
       `); 

    }
  })


}); 

// RECETAS

app.post("/notify",function(req,res){


  let qry = `SELECT * FROM RECETAS`;
  execute.query(qry, res);

}); 
// RECETAS

// CLIENTES PACIENTES

app.post("/insert_paciente",function(req,res){

  const {nombre,telefonos,fecha,fechanacimiento} = req.body; 
  
  let qry = `INSERT INTO CLIENTES (NOMCLIE,TELEFONOS,FECHANACIMIENTO) VALUES ('${nombre}','${telefonos}','${fechanacimiento}')`;
  execute.query(qry, res);

}); 


app.post("/select_paciente",function(req,res){

  const {nombre} = req.body; 
  
  let qry = `SELECT IDCLIENTE,NOMCLIE,TELEFONOS,FECHANACIMIENTO FROM CLIENTES WHERE NOMCLIE LIKE '%${nombre}%'`;
  execute.query(qry, res);

}); 

app.post("/select_lista_pacientes",function(req,res){

  const {} = req.body; 
  
  let qry = `SELECT IDCLIENTE,NOMCLIE,TELEFONOS,FECHANACIMIENTO FROM CLIENTES`;
  execute.query(qry, res);

}); 

// CLIENTES PACIENTES

// RECETAS ...
app.post("/select_temp_receta",function(req,res){

  const {sucursal} = req.body; 
  
  let qry = `SELECT ID, MEDICAMENTO,DOSIS,DURACION FROM TEMP_RECETA`;
  execute.query(qry, res);

}); 

app.post("/insert_temp_receta",function(req,res){

  const {medicamento,dosis,duracion} = req.body; 
  
  let qry = `INSERT INTO TEMP_RECETA (MEDICAMENTO,DOSIS,DURACION) VALUES ('${medicamento}', '${dosis}', '${duracion}')`;
  execute.query(qry, res);

}); 

app.post("/delete_temp_receta",function(req,res){

  const {sucursal, id} = req.body; 
  
  let qry = `DELETE FROM TEMP_RECETA WHERE ID=${id}`;
  execute.query(qry, res);

});

app.post("/delete_all_temp_receta",function(req,res){

  const {sucursal} = req.body; 
  
  let qry = `DELETE FROM TEMP_RECETA`;
  execute.query(qry, res);

});

app.post("/insert_receta",function(req,res){

  const {correlativo,idcliente,obs,fecha,hora} = req.body; 
  
  let qryR = `INSERT INTO RECETAS (IDRECETA,FECHA,HORA,CODCLIENTE,OBS) VALUES (${correlativo},'${fecha}','${hora}',${idcliente},'${obs}');`;
  let qryD = `INSERT INTO RECETAS_DETALLE (IDRECETA,MEDICAMENTO,DOSIS,DURACION) SELECT ${correlativo} AS IDRECETA,TEMP_RECETA.MEDICAMENTO,TEMP_RECETA.DOSIS,TEMP_RECETA.DURACION FROM TEMP_RECETA;`

  execute.query(qryD + qryR, res);

}); 

// RECETAS ...

/*
app.get("/notify",function(req,res){

  io.emit('despacho nuevo', "despacho", "despacho");
  res.send('ok')

}); 
*/

//Router para app VENTAS
//app.use('/ventas', routerVentas);

app.use("/",router);

app.use("*",function(req,res){
  res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});


// SOCKET HANDLER
io.on('connection', function(socket){
  
  socket.on('recetas nueva', function(receta,cliente){
	  io.emit('recetas nueva', receta,cliente);
  });
    
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
