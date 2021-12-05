function getView(){
    let view = {
        body:()=>{
            return `
                <div class="card col-12">
                    <div class="card-header">
                        <h4>Recetas Emitidas</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" class="form-control" id="txtBuscarReceta" placeholder="Escriba para Buscar...">
                            </div>
                          
                        </div>
                        <div class="row">
                            <div class="table-responsive">
                                <table class="table table-responsive table-hover table-striped" id="tblRecetas">
                                    <thead  class="bg-info text-white">
                                        <tr>
                                            <td>No.</td>
                                            <td>Fecha</td>
                                            <td>Paciente</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                </table>
                                <tbody id="bodyTblRecetas">
                                
                                </tbody>
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
            <div class="modal fade" id="modalNueva" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Receta</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       
                        

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
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

    root.innerHTML = view.body() + view.modalNuevoPaciente();
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
        
        btnGuardarCliente.disabled = true;
        btnGuardarCliente.innerHTML = '<i class="fa fa-save fa-spin"></i>';

        funciones.Confirmacion('¿Está seguro que desea Guardar este Paciente?')
        .then((value)=>{
            if(value==true){
                let nombre = document.getElementById('Nombre');
                let fechanacimiento = funciones.devuelveFecha('FechaNacimiento');
                let telefono = document.getElementById('Telefono') || '0';

                insert_paciente(funciones.limpiarTexto(nombre.value),fechanacimiento,telefono.value)
                .then(()=>{
                    funciones.Aviso('Cliente agregado exitosamente!!')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fa fa-save"></i>';
                    $('#modalNuevoPaciente').modal('hide');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fa fa-save"></i>';
                })
               
            }
        })
    });


};

function initView(){
    getView();
    addListeners();
    
};


function getTblRecetas(){
  
    
};

function insert_paciente(nombre,fechanacimiento,telefono){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_paciente',{
            nombre:nombre,
            fechanacimiento:fechanacimiento,
            telefonos:telefono
        })
        .then((response) => {   
            console.log(response)            
            resolve();             
        }, (error) => {
            reject();
        });
    });
}