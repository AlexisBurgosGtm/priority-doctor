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
                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">Código</label>
                                <input type="text" class="form-control" id="tPacienteCodigo" disabled="true">
                            </div>    
                        </div>
                        <div class="col-4">
                            <button class="btn btn-info btn-xl btn-circle shadow" id="btnBuscarPaciente">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-success btn-xl btn-circle shadow" id="btnNuevoPaciente">
                                <i class="fa fa-plus"></i>
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
                            <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalTurno">
                                <i class="fa fa-angle-left"></i>
                            </button>
                        </div>
                        <div class="col-6">
                          

                            <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarTurno">
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
        modalListaPacientes:()=>{
            return `
        <div class="modal fade" id="modalPacientes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header bg-secondary">
                    <h5 class="modal-title  text-white">Listado de Pacientes</h5>
                </div>
                <div class="modal-body">

                    <hr class="solid">
                   

                    <div class="form-group">
                        <label class="negrita">Busque al paciente por Nombre</label>
                        <input type="text" class="form-control" id="txtBuscarPaciente" placeholder="Escriba el nombre para buscar...">
                        <button class="btn btn-md btn-secondary shadow" id="btnBuscar">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                                     
                    <hr class="solid">
                  
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-bordered">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>Paciente</td>
                                    <td>Edad</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPacientesData">
                            
                            </tbody>
                        </table>
                    </div>

                    
                    
                    <hr class="solid">

                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalListado">
                                <i class="fa fa-angle-left"></i>
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

    root.innerHTML = view.body() + view.modalNuevoTurno() + view.modalListaPacientes() + view.modalNuevoPaciente();

};

function addListeners(){


    document.getElementById('btnCerrarModalTurno').addEventListener('click',()=>{$('#modalNuevoTurno').modal('hide')});
    document.getElementById('btnCerrarModalListado').addEventListener('click',()=>{$('#modalPacientes').modal('hide')});


    let btnNuevoTurno = document.getElementById('btnNuevoTurno');
    btnNuevoTurno.addEventListener('click',()=>{

        document.getElementById('tPacienteCodigo').value='0';
        document.getElementById('tPacienteNombre').value='';
        document.getElementById('tTemperatura').value='36';
        document.getElementById('tPA').value='0/0';

        $('#modalNuevoTurno').modal('show');

    });

    let btnBuscarPaciente = document.getElementById('btnBuscarPaciente');
    btnBuscarPaciente.addEventListener('click',()=>{

        document.getElementById('txtBuscarPaciente').value= '';
        $('#modalPacientes').modal('show');

    });

    let btnBuscar = document.getElementById('btnBuscar');
    btnBuscar.addEventListener('click',()=>{

        buscar_paciente('txtBuscarPaciente');

    });

    let btnGuardarTurno = document.getElementById('btnGuardarTurno');
    btnGuardarTurno.addEventListener('click',()=>{

        funciones.Aviso('proceso para guardar turno');

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


//busqueda de pacientes
function buscar_paciente(idbuscar){
    let buscar = document.getElementById(idbuscar).value;
    
    if(buscar==''){
        funciones.AvisoError('Escriba para buscar');
        return;
    }else{
        buscar = funciones.limpiarTexto(buscar);
    };

    getTblPaciente(buscar);

};

function getDataPaciente(filtro){
    return new Promise((resolve, reject) => {

        axios.post('/select_paciente',{
            sucursal:GlobalCodSucursal,
            filtro:filtro
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblPaciente(filtro){
    

    let container = document.getElementById('tblPacientesData');
    container.innerHTML = GlobalLoader;
    let str = '';

    getDataPaciente(filtro)
    .then((data)=>{
        data.map((r)=>{
            str += `
                <tr>
                    <td>${r.NOMCLIE}
                        <br><small class="negrita text-danger">${r.TELEFONOS}</small>
                        <br>
                        <button class="btn btn-info btn-sm hand shadow" onclick="agregar_espera('${r.IDCLIENTE}','${r.NOMCLIE}')">
                            <i class="fa fa-edit"></i>Agregar a Espera...
                        </button>
                    </td>
                    <td>${funciones.getEdad(r.FECHANACIMIENTO)}
                        <br>
                        <small class="negrita">FN:${funciones.convertDate(r.FECHANACIMIENTO)}</small>
                                              
                    </td>
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

function agregar_espera(codigo,nombre){
    document.getElementById('tPacienteCodigo').value = codigo;
    document.getElementById('tPacienteNombre').value = nombre;
    $('#modalPacientes').modal('hide');
};
