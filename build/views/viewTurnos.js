function getView(){
    let view = {
        body:()=>{
            return `
            <div class="card shadow p-4">
                <div class="card-header">
                    <h5>Listado de Turnos Pendientes</h5>
                </div>
                <div class="card-body">
                    <div class="">
                        <label class="negrita">Turnos Pendientes: </label><label class="negrita text-danger" id="lbTotalTurnos">0</label>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-bordered" id="tblTurnos">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>PACIENTE</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblEsperaData">
                            
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
                            <div class="form-group">
                                <label class="negrita">Código</label>
                                <input type="text" class="form-control" id="tPacienteCodigo" disabled="true">
                            </div>    
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info btn-xl btn-circle shadow" id="btnBuscarPaciente">
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
                   
                    <div class="row">
                        <div class="col-8">
                            <div class="form-group">
                                <label class="negrita">Busque al paciente por Nombre</label>
                                <input type="text" class="form-control" id="txtBuscarPaciente" placeholder="Escriba el nombre para buscar...">
                                <button class="btn btn-md btn-secondary shadow" id="btnBuscar">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>    
                        </div>
                        <div class="col-4">
                            <button class="btn btn-success btn-xl btn-circle shadow" id="btnNuevoPaciente">
                                <i class="fa fa-plus"></i>
                            </button>    
                        </div>
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
        document.getElementById('tblPacientesData').innerHTML = '';
        $('#modalPacientes').modal('show');

    });

    let btnBuscar = document.getElementById('btnBuscar');
    btnBuscar.addEventListener('click',()=>{

        buscar_paciente('txtBuscarPaciente');

    });

    document.getElementById('txtBuscarPaciente').addEventListener('keydown',(e)=>{
        if (e.key == 'Enter' || e.keyCode == 13) {
            btnBuscar.click();
        };
    })

    let btnGuardarTurno = document.getElementById('btnGuardarTurno');
    btnGuardarTurno.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea agregar este Turno a la cola de Espera?')
        .then((value)=>{
            if(value==true){
                let codigo = document.getElementById('tPacienteCodigo').value;
                if(codigo=='0'){
                    funciones.AvisoError('Debe indicar el paciente');
                    return
                };

                let temperatura = document.getElementById('tTemperatura').value  || '36';
                let pa = document.getElementById('tPA').value || '0/0';
                btnGuardarTurno.disabled = true;
                btnGuardarTurno.innerHTML =  '<i class="fa fa-save fa-spin"></i>';
                insert_turno(codigo,temperatura,pa)
                .then(()=>{
                    btnGuardarTurno.disabled = false;
                    btnGuardarTurno.innerHTML =  '<i class="fa fa-save"></i>';
                    funciones.Aviso('Cliente agregado exitosamente!!');
                    getTblTurnos();
                    $('#modalNuevoTurno').modal('hide');

                })
                .catch(()=>{
                    btnGuardarTurno.disabled = false;
                    btnGuardarTurno.innerHTML =  '<i class="fa fa-save"></i>';
                    funciones.AvisoError('No se pudo agregar este turno a la Espera');
                })

            }
        })

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
                    
                    document.getElementById('txtBuscarPaciente').value= nombre.value;
                    btnBuscar.click();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fa fa-save"></i>';
                })
               
            }
        })
    });


    getTblTurnos();


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


//********************* */
//turnos de Espera
//********************* */

function getDataTurnos(){
    return new Promise((resolve, reject) => {

        axios.post('/select_lista_espera',{
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

function getTblTurnos(){
    

    let container = document.getElementById('tblEsperaData');
    container.innerHTML = GlobalLoader;
    let lbTotalTurnos = document.getElementById('lbTotalTurnos');
    lbTotalTurnos.innerText = '--';

    let str = '';

    let contador = 0;

    getDataTurnos()
    .then((data)=>{
        data.map((r)=>{
            contador += 1;
            str += `
                <tr>
                    <td>${r.NOMCLIE}
                        <div class="row">
                            <div class="col-4">
                                <small class="negrita text-danger">Temp: ${r.TEMPERATURA}</small>
                            </div>
                            <div class="col-4">
                                <small class="negrita text-danger">P/A: ${r.PA}</small>
                            </div>
                            <div class="col-4">
                                <small class="negrita text-info">Hora: ${r.HORA}</small>
                            </div>
                        </div>
                       
                    </td>
                   
                    <td>
                        <button class="btn btn-success btn-circle btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','${r.ID}')">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>

                    <td>
                        <button class="btn btn-info btn-circle btn-sm hand shadow" onclick="funciones.hablar('Es el turno de ' + '${r.NOMCLIE}' + ', adelante por favor')">
                            <i class="fa fa-bullhorn"></i>
                        </button>
                    </td>

                    <td>
                        <button class="btn btn-danger btn-circle btn-sm hand shadow" onclick="eliminar_turno(${'row' + r.ID.toString()})" id="${'row' + r.ID.toString()}" >
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotalTurnos.innerText = conteo;
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};

function insert_turno(idcliente,temperatura,pa){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_temp_espera',{
            sucursal:GlobalCodSucursal,
            idcliente:idcliente,
            temperatura:temperatura,
            pa:pa,
            hora:funciones.getHora()
        })
        .then((response) => {     
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function eliminar_turno(idturno){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este turno?')
    .then((value)=>{
        if(value==true){

            document.getElementById(idturno).disabled = true;
            document.getElementById(idturno).innerHTML = '<i class="fa fa-trash fa-spin"></i>'

            delete_turno(idturno)
            .then(async()=>{
                funciones.Aviso('Turno eliminado exitosamente!!');
                await getTblTurnos();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar este turno');
                document.getElementById(idturno).disabled = false;
                document.getElementById(idturno).innerHTML = '<i class="fa fa-trash"></i>'
            })

        }
    })
}

function delete_turno(idturno){
    return new Promise((resolve, reject) => {

        axios.post('/delete_temp_espera',{
            sucursal:GlobalCodSucursal,
            id:idturno
            })
        .then(async(response) => {          
            GlobalSelectedIdTurno = 0;
            resolve();    
        }, (error) => {
            console.log('turno no eliminado');
            reject();
        });

    })
    

}
