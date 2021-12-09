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

app.get("/receta2",function(req,res){
  
  const {idreceta} = req.query;
  
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
app.get("/receta",function(req,res){
  
  

}); 

// RECETAS

// CLIENTES PACIENTES

app.post("/insert_paciente",function(req,res){

  const {nombre,telefonos,fecha,fechanacimiento,sucursal} = req.body; 
  
  let qry = `INSERT INTO CLIENTES (NOMCLIE,TELEFONOS,FECHANACIMIENTO,TOKEN) VALUES ('${nombre}','${telefonos}','${fechanacimiento}','${sucursal}')`;
  execute.query(qry, res);

}); 

app.post("/delete_paciente",function(req,res){

  const {sucursal,id} = req.body; 
  
  let qry = `DELETE FROM CLIENTES WHERE IDCLIENTE=${id} AND TOKEN='${sucursal}'`;
  execute.query(qry, res);

}); 


app.post("/select_paciente",function(req,res){

  const {nombre,sucursal} = req.body; 
  
  let qry = `SELECT IDCLIENTE,NOMCLIE,TELEFONOS,FECHANACIMIENTO 
  FROM CLIENTES WHERE NOMCLIE LIKE '%${nombre}%' AND TOKEN='${sucursal}'`;
  execute.query(qry, res);

}); 

app.post("/select_lista_pacientes",function(req,res){

  const {sucursal} = req.body; 
  
  let qry = `SELECT IDCLIENTE,NOMCLIE,TELEFONOS,FECHANACIMIENTO
           FROM CLIENTES WHERE TOKEN='${sucursal}' `;
  execute.query(qry, res);

}); 

// CLIENTES PACIENTES

app.post("/select_correlativo",function(req,res){

  const {sucursal,coddoc} = req.body; 
  
  let qry = `SELECT CORRELATIVO FROM TIPODOCUMENTOS WHERE TOKEN='${sucursal}' AND CODDOC='${coddoc}'`;
  execute.query(qry, res);

});

// RECETAS ...
app.post("/select_temp_receta",function(req,res){

  const {sucursal} = req.body; 
  
  let qry = `SELECT ID, MEDICAMENTO,DOSIS,DURACION FROM TEMP_RECETA
              WHERE TOKEN='${sucursal}' `;
  execute.query(qry, res);

}); 

app.post("/insert_temp_receta",function(req,res){

  const {medicamento,dosis,duracion,sucursal} = req.body; 
  
  let qry = `INSERT INTO TEMP_RECETA (MEDICAMENTO,DOSIS,DURACION,TOKEN)
   VALUES ('${medicamento}', '${dosis}', '${duracion}','${sucursal}')`;
  execute.query(qry, res);

}); 

app.post("/delete_temp_receta",function(req,res){

  const {sucursal, id} = req.body; 
  
  let qry = `DELETE FROM TEMP_RECETA WHERE ID=${id} AND TOKEN='${sucursal}' `;
  execute.query(qry, res);

});

app.post("/delete_all_temp_receta",function(req,res){

  const {sucursal} = req.body; 
  
  let qry = `DELETE FROM TEMP_RECETA WHERE TOKEN='${sucursal}' `;
  execute.query(qry, res);

});

app.post("/insert_receta",function(req,res){

  const {sucursal,correlativo,idcliente,obs,fecha,hora, coddoc,peso,talla,motivo,diagnostico} = req.body; 
  let nuevocorrelativo = Number(correlativo) + 1;

  let qryR = `INSERT INTO RECETAS (TOKEN,IDRECETA,FECHA,HORA,CODCLIENTE,OBS,PESO,TALLA,MOTIVO,DIAGNOSTICO) 
      VALUES ('${sucursal}',${correlativo},'${fecha}','${hora}',${idcliente},'${obs}',${peso},${talla},'${motivo}','${diagnostico}');`;
  let qryD = `INSERT INTO RECETAS_DETALLE (TOKEN,IDRECETA,MEDICAMENTO,DOSIS,DURACION) SELECT '${sucursal}' AS TOKEN, ${correlativo} AS IDRECETA,TEMP_RECETA.MEDICAMENTO,TEMP_RECETA.DOSIS,TEMP_RECETA.DURACION FROM TEMP_RECETA;`
  let qryDoc = `UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevocorrelativo} WHERE CODDOC='${coddoc}' AND TOKEN='${sucursal}';`

  execute.query(qryD + qryR + qryDoc, res);

});

app.post("/delete_receta",function(req,res){

  const {sucursal, id} = req.body; 
  
  let qry = `DELETE FROM RECETAS WHERE IDRECETA=${id} AND TOKEN='${sucursal}'; 
            DELETE FROM RECETAS_DETALLE WHERE IDRECETA=${id} AND TOKEN='${sucursal}'; `;
  execute.query(qry, res);

});

app.post("/select_historial_recetas",function(req,res){

  const {sucursal,codclie} = req.body; 
  
  let qry = `SELECT ID, IDRECETA, FECHA, HORA, OBS,PESO, TALLA, MOTIVO, DIAGNOSTICO
   FROM RECETAS WHERE CODCLIENTE=${codclie} AND TOKEN='${sucursal}'
    ORDER BY ID DESC;`;
  execute.query(qry, res);

});

app.post("/select_receta",function(req,res){

  const {sucursal,correlativo} = req.body; 
  
  let qry = `SELECT
              recetas.IDRECETA,
              recetas.FECHA,
              recetas.HORA,
              recetas.CODCLIENTE,
              clientes.NOMCLIE,
              clientes.TELEFONOS,
              clientes.FECHANACIMIENTO,
              recetas.OBS,
              recetas_detalle.MEDICAMENTO,
              recetas_detalle.DOSIS,
              recetas_detalle.DURACION
            FROM recetas
              LEFT OUTER JOIN recetas_detalle
                ON recetas.IDRECETA = recetas_detalle.IDRECETA AND recetas.TOEKN= recetas_detalle.TOKEN
              LEFT OUTER JOIN clientes
                ON recetas.CODCLIENTE = clientes.IDCLIENTE
                  AND recetas.TOKEN= clientes.TOKEN
            WHERE recetas.IDRECETA = ${correlativo} and recetas.TOKEN='${sucursal}' `;

  execute.query(qry, res);

});

// RECETAS ...


app.post("/login",function(req,res){

  const {usuario,pass} = req.body; 
  
  let qry = `SELECT TOKEN, USER FROM USUARIOS WHERE USER='${usuario}' AND PASS='${pass}' `;

  execute.query(qry, res);

});

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
