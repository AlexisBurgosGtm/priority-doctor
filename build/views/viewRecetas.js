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
                                        </tr>
                                    </thead>
                                    <tbody id="tblListaPacientes">
                                
                                    </tbody>
                                </table>
                              
                            </div>

                        </div>
                        

                    </div>
                </div>
                <button type="button" class="btn btn-info btn-xl btn-circle hand btn-right shadow" id="btnNuevoPaciente">
                    <i class="fa fa-plus"></i>
                </button>
            `
        },
        modalNuevaReceta:()=>{
            return `
            <div class="modal fade" id="modalNuevaReceta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-success">
                        <h5 class="modal-title text-white">Nueva Receta</h5>
                       
                    </div>

                    <div class="modal-body">
                             <h5 class="text-danger" id="lbPaciente">Consumidor Final</h5>

                             <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#consulta" role="tab" aria-controls="home" aria-selected="true">
                                        <i class="fa fa-edit"></i>Consulta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#receta" role="tab" aria-controls="profile" aria-selected="false">
                                        <i class="fa fa-print"></i>Receta</a>
                                </li>
                               
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="consulta" role="tabpanel" aria-labelledby="home-tab">
                                    ${view.formConsulta()}
                                </div>
                           
                                <div class="tab-pane fade" id="receta" role="tabpanel" aria-labelledby="profile-tab">
                                    ${view.formReceta()}
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
        },
        modalHistorialRecetas:()=>{
            return `
            <div class="modal fade" id="modalHistorialRecetas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-secondary">
                        <h5 class="modal-title  text-white">Historial de recetas del paciente</h5>
                       
                    </div>
                    <div class="modal-body">
                        <canvas id="containerGraficaPeso" height="100"></canvas>

                        <h5 class="text-danger" id="lbPacienteHistorial">CONSUMIDOR FINAL</h5>
                        <div class="card shadow p-2">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead class="bg-secondary text-white">
                                        <tr>
                                            <td>Fecha</td>
                                            <td>C</td>
                                            <td>W</td>
                                            <td>P</td>
                                            <td>E</td>
                                        </tr>
                                    </thead>         
                                    <tbody id="tblHistorialRecetas">
                                    
                                    </tbody>                       
                                </table>
                           
                            </div>
                        </div>

                    
                      
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalHistorialRecetaNueva">
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
        formConsulta:()=>{
            return `
           
                <div class="row">
                    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <label class="negrita">Peso</label>
                            <input type="number" class="form-control" id="txtCPeso">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <label class="negrita">Talla</label>
                            <input type="number" class="form-control" id="txtCTalla">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="negrita">Motivo de la consulta</label>
                    <textarea class="form-control" id="txtCMotivo" rows="4"></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">Diagnóstico</label>
                    <textarea class="form-control" id="txtCDiagnostico" rows="4"></textarea>
                </div>
           
            `
        },
        formReceta:()=>{
            return `
                <div class="form-group">
                    <label>Receta No.</label><label class="negrita text-danger" id="lbCorrelativo">0</label>
                </div>                     

                <hr class="solid">

                <div class="card shadow">
                    <label id="">Agregue un Medicamento</label>                                   
                        
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <input type="text" class="form-control" placeholder="Medicamento..." id="txtRecetaMedicamento"> 
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <input type="text" class="form-control" placeholder="Dosis...Frecuencia" id="txtRecetaDosis">
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <input type="text" class="form-control" placeholder="Duración..." id="txtRecetaDuracion">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-6">
                        </div>
                        <div class="col-6" align="right">
                            <button class="btn btn-success btn-md shadow hand col-6" id="btnAgregarMedicamento">Agregar(+)</button>
                        </div>
                    </div>
                </div>

                <div class="card shadow p-2">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>Medicamento</td>
                                    <td>Dosis</td>
                                    <td>Duración</td>
                                    <td></td>
                                </tr>
                            </thead>         
                            <tbody id="tblReceta">
                            
                            </tbody>                       
                        </table>

                        <div class="form-group p-4">
                            <label>Observaciones</label>
                            <textarea class="form-control" rows="3" placeholder="Observaciones adicionales..." id="txtRecetaObs">
                            </textarea>
                        </div>

                    </div>
                </div>
            `
        }, 
        modalDatosConsulta:()=>{
            return `
            <div class="modal fade" id="modalDatosConsulta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h5 class="modal-title  text-white">Detalle de la Consulta</h5>
                        
                        </div>
                        <div class="modal-body card shadow">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Fecha</label>
                                        <h5 class="text-danger" id="lbCFecha"></h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Peso</label>
                                        <h5 class="text-danger" id="lbCPeso"></h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Talla</label>
                                        <h5 class="text-danger" id="lbCTalla"></h5>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Motivo de la Consulta</label>
                                <textarea class="form-control" id="lbCMotivo"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Diagnóstico</label>
                                <textarea class="form-control" id="lbCDiagnostico"></textarea>
                            </div>
                        
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalDetConsulta">
                                        <i class="fa fa-angle-left"></i>
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

    root.innerHTML = view.body() + view.modalNuevaReceta() + view.modalHistorialRecetas() + view.modalDatosConsulta() + view.modalNuevoPaciente();
};

function addListeners(){

    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      })

    document.getElementById('txtBuscarReceta').addEventListener('keydown',()=>{
        funciones.FiltrarTabla('tblPacientes','txtBuscarReceta');
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

    let btnAgregarMedicamento = document.getElementById('btnAgregarMedicamento');
    btnAgregarMedicamento.addEventListener('click',()=>{
        let medicamento = document.getElementById('txtRecetaMedicamento').value || 'SN';
        let dosis = document.getElementById('txtRecetaDosis').value || 'SN';
        let duracion = document.getElementById('txtRecetaDuracion').value || 'SN';

        if(medicamento == 'SN'){funciones.AvisoError('Escriba el nombre del medicamento');return;}
        if(dosis == 'SN'){funciones.AvisoError('Escriba la dosis');return;}
        if(duracion == 'SN'){funciones.AvisoError('Escriba la duración del tratamiento');return;}

        btnAgregarMedicamento.disabled = true;
        btnAgregarMedicamento.innerHTML = '<i class="fa fa-save fa-spin"></i>';

        insert_temp_receta(medicamento,dosis,duracion)
        .then(()=>{
            btnAgregarMedicamento.disabled = false;
            btnAgregarMedicamento.innerHTML = 'Agregar(+)';

            funciones.Aviso('Medicamento agregado exitosamente!!');
            getTblTempReceta();

            document.getElementById('txtRecetaMedicamento').value ='';
            document.getElementById('txtRecetaDosis').value ='';
            document.getElementById('txtRecetaDuracion').value ='';

            document.getElementById('txtRecetaMedicamento').focus();
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo agregar el medicamento')
            btnAgregarMedicamento.disabled = false;
            btnAgregarMedicamento.innerHTML = 'Agregar(+)';
        })

    })

    let btnGuardarReceta = document.getElementById('btnGuardarReceta');
    btnGuardarReceta.addEventListener('click',()=>{
        
        
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Receta?')
        .then((value)=>{
            if(value==true){
        
                btnGuardarReceta.disabled = true;
                btnGuardarReceta.innerHTML = '<i class="fa fa-save fa-spin"></i>';

                let obs = funciones.limpiarTexto(document.getElementById('txtRecetaObs').value) || 'SN';

                let peso = document.getElementById('txtCPeso').value || '0';
                let talla = document.getElementById('txtCTalla').value || '0';
                let motivo = funciones.limpiarTexto(document.getElementById('txtCMotivo').value) || 'SN';
                let diagnostico = funciones.limpiarTexto(document.getElementById('txtCDiagnostico').value) || 'SN'

                insert_receta(GlobalSelectedCodPaciente,funciones.limpiarTexto(obs),GlobalCorrelativo,peso,talla,motivo,diagnostico)
                .then(async()=>{
                    funciones.Aviso('Receta Guardad exitosamente!!');

                    btnGuardarReceta.disabled = false;
                    btnGuardarReceta.innerHTML = '<i class="fa fa-save"></i>';
                    $("#modalNuevaReceta").modal('hide');

                    receta_imprimir(GlobalCorrelativo);

                    getCorrelativoCoddoc();
                    await delete_all_TempReceta();

                    

                })
                .catch(()=>{
                    btnGuardarReceta.disabled = false;
                    btnGuardarReceta.innerHTML = '<i class="fa fa-save"></i>';
                    funciones.AvisoError('No se pudo guardar la receta')
                })
               
            }
        })
    });

    getCorrelativoCoddoc();


    //HISTORIAL RECETAS
    document.getElementById('btnCerrarModalHistorialRecetaNueva').addEventListener('click',()=>{$('#modalHistorialRecetas').modal('hide');});
    document.getElementById('btnCerrarModalDetConsulta').addEventListener('click',()=>{$('#modalDatosConsulta').modal('hide')});



};

function getCorrelativoCoddoc(){
    get_correlativo(GlobalCoddoc)
    .then((correlativo)=> {
        document.getElementById('lbCorrelativo').innerText = correlativo;
        GlobalCorrelativo = correlativo;
    })
    .catch(()=>{
        document.getElementById('lbCorrelativo').innerText = 0;
        GlobalCorrelativo = 0;
    })
}

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
                        <br>
                        <button class="btn btn-info btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','${r.FECHANACIMIENTO}')">
                            <i class="fa fa-edit"></i>Nueva Consulta/Receta
                        </button>
                    </td>
                    <td>${funciones.getEdad(r.FECHANACIMIENTO)}
                        <br>
                        <small class="negrita">FN:${funciones.convertDate(r.FECHANACIMIENTO)}</small>
                        <br>
                        <button class="btn btn-secondary btn-sm hand shadow" onclick="getTblHistorial('${r.IDCLIENTE}','${r.NOMCLIE}')">
                            <i class="fa fa-list"></i>Historial
                        </button>
                      
                    </td>
                    <td>
                        <button class="btn btn-danger btn-circle btn-sm hand shadow" onclick="delete_paciente('${r.IDCLIENTE}')" id="${'p' + r.IDCLIENTE.toString()}">
                            <i class="fa fa-trash"></i>
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

    GlobalSelectedCodPaciente = idcliente;
    document.getElementById('lbPaciente').innerText = nombre;
    document.getElementById('txtRecetaObs').value = '';

    document.getElementById('txtCPeso').value = '0';
    document.getElementById('txtCTalla').value = '0';
    document.getElementById('txtCMotivo').value = 'SN';
    document.getElementById('txtCDiagnostico').value = 'SN'

    getTblTempReceta();

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

function delete_paciente(id){
    funciones.Confirmacion("¿Está seguro que desea ELIMINAR este Paciente y todo su historial?")
    .then((value)=>{
        if(value==true){
            let btn = document.getElementById('p' + id.toString())
            btn.disabled = true;
            btn.innerHTML = `<i class="fa fa-trash fa-spin"></i>`;
            
                axios.post('/delete_paciente',{
                    sucursal:GlobalCodSucursal,
                    id:id
                })
                .then((response) => {   
                    let data = response.data; 
                    getTblRecetas();
                }, (error) => {
                    funciones.AvisoError('No se pudo eliminar este item')
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa fa-trash"></i>`;
                
                });

        }
    })
    
    
};

function insert_temp_receta(medicamento,dosis,duracion){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_temp_receta',{
            sucursal:GlobalCodSucursal,
            medicamento:medicamento,
            dosis:dosis,
            duracion:duracion
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function delete_TempReceta(id){
    funciones.Confirmacion("¿Está seguro que desea quitar este medicamento de la lista?")
    .then((value)=>{
        if(value==true){
            let btn = document.getElementById('rtemp' + id.toString())
            btn.disabled = true;
            btn.innerHTML = `<i class="fa fa-trash fa-spin"></i>`;
            
                axios.post('/delete_temp_receta',{
                    sucursal:GlobalCodSucursal,
                    id:id
                })
                .then((response) => {   
                    let data = response.data; 
                    getTblTempReceta();
                }, (error) => {
                    funciones.AvisoError('No se pudo eliminar este item')
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa fa-trash"></i>`;
                
                });

        }
    })
    
    
};

function getDataTempReceta(){
    return new Promise((resolve, reject) => {

        axios.post('/select_temp_receta',{
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

function getTblTempReceta(){
    let container = document.getElementById('tblReceta');
    container.innerHTML = GlobalLoader;
    
    let str = '';

    getDataTempReceta()
    .then((data) => {
        data.map((r)=>{
            str += `
                <tr>
                    <td>${r.MEDICAMENTO}</td>
                    <td>${r.DOSIS}</td>
                    <td>${r.DURACION}</td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-circle hand shadow" onclick="delete_TempReceta('${r.ID}')" id="${'rtemp' + r.ID.toString()}">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        container.innerHTML =str;
    })
    .catch(() => {
        container.innerHTML = 'No se pudieron cargar los datos...'
    })

};



function insert_receta(idcliente,obs,correlativo,peso,talla,motivo,diagnostico){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_receta',{
            sucursal:GlobalCodSucursal,
            idcliente:idcliente,
            obs:obs,
            fecha:funciones.getFecha(),
            hora:funciones.getHora(),
            correlativo:correlativo,
            coddoc:GlobalCoddoc,
            peso:peso,
            talla:talla,
            motivo:motivo,
            diagnostico: diagnostico
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function delete_all_TempReceta(){
  
                axios.post('/delete_all_temp_receta',{
                    sucursal:GlobalCodSucursal
                })
                .then((response) => {   
                    let data = response.data; 
                    
                }, (error) => {
  
                });
 
    
};


//Historial

function getDataHistorialReceta(codcliente){
    return new Promise((resolve, reject) => {

        axios.post('/select_historial_recetas',{
            sucursal:GlobalCodSucursal,
            codclie:codcliente
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblHistorial(idcliente,nomclie){

    GlobalSelectedCodPaciente = idcliente;
    GlobalSelectedNomPaciente = nomclie;

    let container = document.getElementById('tblHistorialRecetas');
    container.innerHTML = GlobalLoader;
    let str ='';
    getDataHistorialReceta(idcliente)
    .then(async(data)=> {  
        data.map((r)=> {
            str += `<tr>
                        <td>${funciones.convertDate(r.FECHA)}
                            <br>
                            <small class="negrita">Hora:${r.HORA}</small>
                            <br>
                            <small class="negrita">No.:${r.IDRECETA}</small>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-circle btn-md hand shadow" onclick="receta_consulta('${funciones.convertDate(r.FECHA)}','${r.PESO}','${r.TALLA}','${r.MOTIVO}','${r.DIAGNOSTICO}')">
                                <i class="fa fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-success btn-circle btn-md hand shadow" onclick="receta_whatsapp('${r.IDRECETA}')">
                                <i class="fa fa-whatsapp"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-info btn-circle btn-md hand shadow" onclick="receta_imprimir('${r.IDRECETA}')">
                                <i class="fa fa-print"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-circle btn-md hand shadow" onclick="receta_eliminar('${r.IDRECETA}')" id="${'r' + r.IDRECETA.toString()}">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
        })
        container.innerHTML = str;
        await grafica_peso(data);
    })
    .catch(()=> {
        container.innerHTML = 'No se pudieron cargar los datos...';
    })

    document.getElementById('lbPacienteHistorial').innerText = nomclie;
    $('#modalHistorialRecetas').modal('show');

};


function receta_consulta(fecha,peso,talla,motivo,diagnostico){

    document.getElementById('lbCFecha').innerText = fecha;
    document.getElementById('lbCPeso').innerText = peso;
    document.getElementById('lbCTalla').innerText = talla;
    document.getElementById('lbCMotivo').value = motivo;
    document.getElementById('lbCDiagnostico').value = diagnostico;

    $('#modalDatosConsulta').modal('show');

};

function receta_whatsapp(idreceta){

    $('#modalHistorialRecetas').modal('hide');

    funciones.enviarRecetaWhatsapp(idreceta);

};

function receta_imprimir(idreceta){
  
    $('#modalHistorialRecetas').modal('hide');

   
    rootImpresion.innerHTML = ''; //
    let str = '';
    let fecha = ''; let paciente = ''; let obs = '';

    get_data_receta(idreceta)
    .then((data)=>{
        //console.log(data);
        data.map((r)=>{
            fecha = funciones.convertDate(r.FECHA);
            paciente = r.NOMCLIE;
            obs = r.OBS;
            str += `
                <li class="negrita"> ${r.MEDICAMENTO} - ${r.DOSIS} - ${r.DURACION}</li>
            `
        })
        console.log(fecha);
       
        rootImpresion.innerHTML = `
           
            <div class="row">
                <div class="col-3">
                    <img src="./img/logoreceta.png" width="110" height="200">
                </div>
                <div class="col-9 text-center">
                    <h5 class="negrita cursiva">Clínica Médica "Niño Jesús"</h5>
                    <h4>Dr. Pablo A. Vásquez Ampié</h4>
                    <small class="cursiva">Miembro de la Asociación de Médicos y Cirujanos de Guatemala</small><br>
                    <small class="cursiva">Miembro de la Asociación Pediátrica de Guatemala.</small><br>
                    <small class="cursiva">Colegiado Activo 8,871</small><br>
                    <small>3a. Avenida 5-02 Zona 1, Edificio El Colorado,</small><br>
                    <small>Frente al Centro de Salud, Retalhuleu.</small><br>
                    <small>Teléfono 7771-2416 * Celular 5199-5119</small><br>
                    <small>e-mail: pablovasapmie@hotmail.com</small>
                </div>
            </div> 
            <h5>_________________________________________________________________________________</h5> 
           
            <div class="row" style="font-size:80%">
                <h5>Retalhuleu, ${fecha}</h5>
                <h5>Nombre del Paciente: ${paciente}</h5>
            </div>  
            <h5>_________________________________________________________________________________</h5>
           
            <div class="row">
                <div class="col-12">
                    ${str}
                </div>
            
            </div>
            <br><br><br>
            <div class="row">
                <div class="form-group">
                    <label class="negrita">Observaciones:</label>
                    <br>
                    <label>${obs}</label>
                </div>
            </div>
            <br>
             
            <div class="row footer text-center">
            <h5>PRÓXIMA CITA: ______________________________________________</h5>
            <small>NO CAMBIAR LA RECETA SIN AUTORIZACIÓN DE SU MÉDICO</small>
            <h3 class="bg-info text-white">EMERGENCIAS LAS 24 HORAS</h3>
            <small>Onne-Doctor Online</small>
            </div>  
  
            `

             


            
            setTimeout(()=>{window.print();},2000)

            setTimeout(()=>{rootImpresion.innerHTML = '';console.log('timer...');},9000)
             
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo generar la impresión');
    })

     
};

function receta_eliminar(id){
    funciones.Confirmacion("¿Está seguro que desea ELIMINAR esta receta?")
    .then((value)=>{
        if(value==true){
            let btn = document.getElementById('r' + id.toString())
            btn.disabled = true;
            btn.innerHTML = `<i class="fa fa-trash fa-spin"></i>`;
            
                axios.post('/delete_receta',{
                    sucursal:GlobalCodSucursal,
                    id:id
                })
                .then((response) => {   
                    let data = response.data; 
                    getTblHistorial(GlobalSelectedCodPaciente,GlobalSelectedNomPaciente);
                }, (error) => {
                    funciones.AvisoError('No se pudo eliminar esta Receta')
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa fa-trash"></i>`;
                
                });

        }
    })
};




function grafica_peso(data){
   
  
    let container = document.getElementById('containerGraficaPeso').innerHTML = '';
    //container.innerHTML = '<canvas id="myChart1" width="40" height="40"></canvas>';

    let label = []; let valor = []; let bgColor = [];
      
    data.map((r)=>{
            label.push(r.IDRECETA);
            valor.push( Number(r.PESO));
            bgColor.push(getRandomColor())
    })

    console.log(valor);

    var ctx = document.getElementById('containerGraficaPeso').getContext('2d');
    var myChart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: 'line',
        data: {
            labels: label.reverse(),
            datasets: [{
                data:valor.reverse(),
                borderColor: 'gray',
                backgroundColor:bgColor
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'GRAFICA POR PESO'
                  },
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  anchor:'end',
                  align:'end',
                  listeners: {
                    click: function(context) {
                      // Receives `click` events only for labels of the first dataset.
                      // The clicked label index is available in `context.dataIndex`.
                      console.log(context);
                    }
                  },
                  formatter: function(value) {
                    return value;
                    // eq. return ['line1', 'line2', value]
                  },
                  color: function(context) {
                    return context.dataset.backgroundColor;
                  },
                  //borderColor: 'white',
                  borderRadius: 25,
                  borderWidth: 0,
                  font: {
                    weight: 'bold'
                  }
                }
            }
        }
    });


    

};




function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};