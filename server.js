var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

//mysql5047.site4now.net
//db_a6478c_conta
//a6478c_conta
//razors1805

//const execute = require('./router/connection');
//var routerVentas = require('./router/routerVentas');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 444;

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



app.get("/notify",function(req,res){

  io.emit('despacho nuevo', "despacho", "despacho");
  res.send('ok')

}); 


//Router para app VENTAS
//app.use('/ventas', routerVentas);

app.use("/",router);

app.use("*",function(req,res){
  res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});


// SOCKET HANDLER
io.on('connection', function(socket){
  
  socket.on('ordenes nueva', function(msg,form){
	  io.emit('ordenes nueva', msg, form);
  });

  socket.on('ordenes escribiendo', function(msg,form){
	  io.emit('ordenes escribiendo', msg, form);
  });
  
  socket.on('ordenes finalizada', function(cliente,monto){
	  io.emit('ordenes finalizada', cliente, monto);
  });

  socket.on('chat msn', function(msg,user){
	  io.emit('chat msn', msg, user);
  });
  
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

/*
app.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
*/
