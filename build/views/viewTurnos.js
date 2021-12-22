function getView(){
    let view = {
        body:()=>{
            return `
            <div class="card shadow p-4">
                <div class="card-header">
                    <h5>Listado de Turnos Pendientes</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-bordered" id="tblTurnos">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>PACIENTE</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblTurnosData">
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <button type="button" class="btn btn-info btn-xl btn-circle hand btn-right shadow" id="btnNuevoTurno">
                <i class="fa fa-plus"></i>
            </button>
            `
        },
        modalNuevoTurno:()=>{
            return `
        <div class="modal fade" id="modalNuevoTurno" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title  text-white">Nuevo Turno</h5>
                </div>
                <div class="modal-body">

                    <hr class="solid">

                    <div class="row">
                        <div class="col-6">
                            <div class="form-group col-4">
                                <label class="negrita">Código del Paciente</label>
                                <input type="text" class="form-control" id="tPacienteCodigo" disabled="true">
                            </div>    
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info btn-lg btn-circle shadow" id="btnBuscarPaciente">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    

                    <div class="form-group">
                        <label class="negrita">Nombre del Paciente</label>
                        <input type="text" class="form-control" id="tPacienteNombre" disabled="true">
                    </div>
                                     
                    <hr class="solid">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">Temperatura</label>
                                <input type="number" class="form-control" id="tTemperatura">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">Presión Arterial</label>
                                <input type="text" class="form-control" id="tPA" value="0/0">
                            </div>
                        </div>
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
        },
        modalNuevoPaciente:()=>{
            return `
            <div class="modal fade" id="modalNuevoPaciente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h5 class="modal-title  text-white">Nuevo Paciente</h5>
                       
                    </div>
                    <div class="modal-body">

                        <hr class="solid">

                        <div class="form-group">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="text" class="form-control" id="Nombre"
                        </div>

                        <hr class="solid">


                        <div class="form-group col-8">
                            <label class="negrita">Fecha de nacimiento</label>
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

    root.innerHTML = view.body() + view.modalNuevoTurno() + view.modalNuevoPaciente();

};

function addListeners(){


    let btnNuevoTurno = document.getElementById('btnNuevoTurno');
    btnNuevoTurno.addEventListener('click',()=>{

        $('#modalNuevoTurno').modal('show');

    });


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
                    getTblPacientes();
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