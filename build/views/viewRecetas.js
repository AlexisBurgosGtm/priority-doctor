function getView(){
    let view = {
        body:()=>{
            return `
                <div class="card col-12">
                    <div class="card-header">
                        <h4>Listado de Pacientes</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" class="form-control" id="txtBuscarReceta" placeholder="Escriba para Buscar...">
                            </div>
                          
                        </div>
                        <div class="row">
                            <div class="table-responsive">
                                <table class="table table-responsive table-hover table-striped" id="tblPacientes">
                                    <thead  class="bg-info text-white">
                                        <tr>
                                            <td>Paciente / Teléfono</td>
                                            <td>Edad</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblListaPacientes">
                                
                                    </tbody>
                                </table>
                              
                            </div>

                        </div>
                        

                    </div>
                </div>
                <button type="button" class="btn btn-success btn-xl btn-circle hand btn-right shadow" id="btnNuevoPaciente">
                    <i class="fa fa-plus"></i>
                </button>
            `
        },
        modalNuevaReceta:()=>{
            return `
            <div class="modal fade" id="modalNuevaReceta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Receta</h5>
                       
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label id="lbPaciente">Consumidor Final</label>
                           
                        </div>

                      

                        <hr class="solid">

                        <div class="card shadow">
                            <div class="form-group">
                                <label id="">Agregue un Medicamento</label>
                                <input type="text" class="form-control" placeholder="Medicamento...">
                                <input type="text" class="form-control" placeholder="Dosis...">
                                <input type="text" class="form-control" placeholder="Frecuencia...">
                                <button class="btn btn-primary">Agregar</button>
                            </div>
                        
                        </div>
                        
                        

                    
                      
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalRecetaNueva">
                                    <i class="fa fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="col-6">
                              

                                <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarReceta">
                                    <i class="fa fa-save"></i>
                                </button>
                            </div>
                        </div>
                       

                    </div>
                    </div>
                </div>
            </div>
            `
        },
        modalNuevoPaciente:()=>{
            return `
            <div class="modal fade" id="modalNuevoPaciente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 class="modal-title" id="exampleModalLabel">Nuevo Paciente</h5>
                       
                    </div>
                    <div class="modal-body">

                        <hr class="solid">

                        <div class="form-group">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="text" class="form-control" id="Nombre"
                        </div>

                        <hr class="solid">


                        <div class="form-group col-8">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="date" class="form-control" id="FechaNacimiento"
                        </div>
                       
                        <hr class="solid">

                        <div class="form-group col-8">
                            <label class="negrita">Teléfono del Paciente</label>
                            <input type="number" class="form-control" id="Telefono"
                        </div>
                        
                        <hr class="solid">

                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalClienteNuevo">
                                    <i class="fa fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="col-6">
                              

                                <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarCliente">
                                    <i class="fa fa-save"></i>
                                </button>
                            </div>
                        </div>
                       

                    </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body() + view.modalNuevaReceta() + view.modalNuevoPaciente() ;
};

function addListeners(){

    document.getElementById('FechaNacimiento').value = funciones.getFecha();
    let btnNuevoPaciente = document.getElementById('btnNuevoPaciente');
    btnNuevoPaciente.addEventListener('click',()=>{

        document.getElementById('Nombre').value='';
        document.getElementById('FechaNacimiento').value = funciones.getFecha();
        document.getElementById('Telefono').value=0;

        $('#modalNuevoPaciente').modal('show');
    });


    document.getElementById('btnCerrarModalClienteNuevo').addEventListener('click',()=>{$('#modalNuevoPaciente').modal('hide')});


    let btnGuardarCliente = document.getElementById('btnGuardarCliente');
    btnGuardarCliente.addEventListener('click',()=>{
        
       

        funciones.Confirmacion('¿Está seguro que desea Guardar este Paciente?')
        .then((value)=>{
            if(value==true){
                let nombre = document.getElementById('Nombre');
                let fechanacimiento = funciones.devuelveFecha('FechaNacimiento');
                let telefono = document.getElementById('Telefono') || '0';

                btnGuardarCliente.disabled = true;
                btnGuardarCliente.innerHTML = '<i class="fa fa-save fa-spin"></i>';

                insert_paciente(funciones.limpiarTexto(nombre.value),fechanacimiento,telefono.value)
                .then(()=>{
                    funciones.Aviso('Cliente agregado exitosamente!!')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fa fa-save"></i>';
                    $('#modalNuevoPaciente').modal('hide');
                    getTblRecetas();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fa fa-save"></i>';
                })
               
            }
        })
    });

    //RECETA
    document.getElementById('btnCerrarModalRecetaNueva').addEventListener('click',()=>{$('#modalNuevaReceta').modal('hide')});

    let btnGuardarReceta = document.getElementById('btnGuardarReceta');
    btnGuardarReceta.addEventListener('click',()=>{
        
        
        funciones.Confirmacion('¿Está seguro que desea Guardar este Paciente?')
        .then((value)=>{
            if(value==true){
        
                btnGuardarReceta.disabled = true;
                btnGuardarReceta.innerHTML = '<i class="fa fa-save fa-spin"></i>';

               
            }
        })
    });


};

function initView(){
    getView();
    addListeners();
    getTblRecetas();
};


function getTblRecetas(){
    

    let container = document.getElementById('tblListaPacientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    getDataPacientes()
    .then((data)=>{
        data.map((r)=>{
            str += `
                <tr>
                    <td>${r.NOMCLIE}
                        <br><small class="negrita text-danger">${r.TELEFONOS}</small>
                    </td>
                    <td>${funciones.getEdad(r.FECHANACIMIENTO)}
                        <br>
                        <small class="negrita">FN:${funciones.convertDate(r.FECHANACIMIENTO)}</td></small>
                    <td>
                        <button class="btn btn-info btn-circle btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','${r.FECHANACIMIENTO}')">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td></td>
                </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};



function getNuevaReceta(idcliente,nombre,fechanacimiento){

    //document.getElementById('lbPaciente').innerText = nombre;

    $('#modalNuevaReceta').modal('show');


};


function getDataPacientes(){
    return new Promise((resolve, reject) => {

        axios.post('/select_lista_pacientes',{
            sucursal:GlobalCodSucursal
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function insert_paciente(nombre,fechanacimiento,telefono){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_paciente',{
            sucursal:GlobalCodSucursal,
            nombre:nombre,
            fechanacimiento:fechanacimiento,
            telefonos:telefono
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};