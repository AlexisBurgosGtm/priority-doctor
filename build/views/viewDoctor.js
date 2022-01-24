function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 shadow bg-white card-rounded">

                    <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-espera" data-toggle="tab" href="#espera" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Turnos Espera</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-preconsultas" data-toggle="tab" href="#preconsultas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Pre-Consultas</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-pacientes" data-toggle="tab" href="#pacientes" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Pacientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-reportes" data-toggle="tab" href="#reportes" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Reportes</a>
                        </li> 
                                
                    </ul>

                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="espera" role="tabpanel" aria-labelledby="receta-tab">

                            ${view.homeEspera()}

                        </div>
                        <div class="tab-pane fade" id="preconsultas" role="tabpanel" aria-labelledby="home-tab">
                            ${view.homePreconsultas()}
                        </div>

                        <div class="tab-pane fade" id="pacientes" role="tabpanel" aria-labelledby="home-tab">
                                   
                            ${view.homePacientes()}
                                   
                        </div>
                        <div class="tab-pane fade" id="reportes" role="tabpanel" aria-labelledby="tab-reportes">

                            ${view.homeReportes()}

                        </div>
                    
                    </div>

                </div>
               
            `
        },
        homePacientes:()=>{
            return `
            <div class="card-body bg-white shadow">
                <h5 class="text-info negrita">Listado de Pacientes</h5>
                
                <div class="row">
                    <div class="form-group col-sm-12 col-md-6 col-lg-4 col-xl-4">

                        <div class="input-group">
                            <input type="text" class="form-control" id="txtBuscarReceta" placeholder="Escriba para Buscar...">
                            <div class="input-group-append">
                                <button class="btn btn-info shadow" id="btnBuscarP">
                                    <i class="fal fa-search"></i>Buscar
                                </button>    
                            </div>
                        </div>
                        
                        
                    </div>
                
                </div>
                
                <br>

                <div class="row">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover" id="tblPacientes">
                            <thead  class="bg-info text-white">
                                <tr>
                                    <td>Paciente / Teléfono / Edad</td>
                                  
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblListaPacientes">
                        
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <button type="button" class="btn btn-info btn-xl btn-circle hand btn-right shadow" id="btnNuevoPaciente">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        homeEspera:()=>{
            return `
            <div class="card shadow p-0">
                <div class="card-body p-0">
                    <div class="p-4">
                        <h5 class="text-success negrita">Lista de Espera</h5>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-lg btn-success btn-circle" onclick="getTblTurnos()">
                                    <i class="fal fa-sync"></i>
                                </button>    
                            </div>
                            <div class="col-6">
                                <label class="negrita">Total Turnos: </label><h3 class="negrita text-danger" id="lbTotalTurnos">0</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover" id="tblEspera">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>Paciente</td>
                                    <td>Seguro</td>
                                </tr>
                            </thead>
                            <tbody id="tblEsperaData">
                            
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            `

        },
        homePreconsultas:()=>{
            return `
            <div class="card shadow p-4">
                <h5 class="negrita text-danger">Pre-Consultas Pendientes Disponibles</h5>
               

                <div class="card-body p-0">
                    <table class="table table-responsive">
                        <thead class="bg-danger text-white">
                            <tr>
                                <td>Fecha</td>
                                <td>Paciente</td>
                                <td>Consulta</td>
                                <td>Eliminar</td>
                            </tr>
                        </thead>
                        <tbody id="tblPreconsultas"></tbody>
                    </table>                
                  
                </div>
            </div>
            `

        },
        homeReportes:()=>{
            return `
            <div class="card shadow p-4">
                <h5 class="negrita text-warning">Reportes Disponibles</h5>
                <div class="row">
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-5">
                        <div class="form-group">
                            <label>Fecha Inicio</label>
                            <input type="date" id="txtFechaInicio" class="form-control">
                        </div>
                       
                    </div>
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-5">
                        <div class="form-group">
                            <label>Fecha Final</label>
                            <input type="date" id="txtFechaFinal" class="form-control">
                        </div>
                       
                    </div>
                </div>

                <br>

                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-auto">
                            <button class="btn btn-outline-info shadow" id="btnRptConsultas">
                                Consultas Atendidas
                            </button>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-success shadow" id="btnRptMorbilidades">
                                Morbilidades Encontradas
                            </button> 
                        </div>
                    </div>

                    <div class="row" id="containerReports">
                    
                    </div>
                      
                  
                </div>
            </div>
            `

        },
        modalNuevaReceta:()=>{
            return `
            <div class="modal fade" id="modalNuevaReceta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                   
                        <div class="modal-body">
                                <h5 class="text-danger" id="lbPaciente">Consumidor Final</h5>
                                <h5 class="text-info" id="lbEdadPaciente">-</h5>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active negrita text-info" id="home-tab" data-toggle="tab" href="#consulta" role="tab" aria-controls="home" aria-selected="true">
                                        <i class="fal fa-edit"></i>Consulta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link negrita text-primary" id="receta-tab" data-toggle="tab" href="#receta" role="tab" aria-controls="profile" aria-selected="false">
                                        <i class="fal fa-print"></i>Receta</a>
                                </li>
                               
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="consulta" role="tabpanel" aria-labelledby="home-tab">
                                    ${view.formConsulta()}
                                    <div class="row">
                                        <div class="col-6">
                                            <button type="button" class="btn btn-success btn-xl btn-circle hand shadow" id="btnIrReceta">
                                                <i class="fal fa-arrow-right"></i>
                                            </button>
                                        </div>

                                        <div class="col-6">
                                            <button type="button" class="btn btn-danger btn-xl btn-circle hand shadow" id="btnGuardarPreconsulta">
                                                <i class="fal fa-save"></i>
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                           
                                <div class="tab-pane fade" id="receta" role="tabpanel" aria-labelledby="receta-tab">
                                    ${view.formReceta()}

                                    <div class="modal-footer">
                                        <div class="row">
                                            <div class="col-4">
                                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalRecetaNueva">
                                                    <i class="fal fa-angle-left"></i>
                                                </button>
                                            </div>
                                            <div class="col-4">
                                                <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarReceta">
                                                    <i class="fal fa-save"></i>
                                                </button>
                                            </div>
                                            <div class="col-4">
                                                <button type="button" class="btn btn-outline-info btn-xl btn-circle hand shadow" id="btnGuardarRecetaPrint">
                                                    <i class="fal fa-print"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
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
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h5 class="modal-title  text-white">Nuevo Paciente</h5>
                       
                    </div>
                    <div class="modal-body">

                        <hr class="solid">

                        <div class="form-group">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="text" class="form-control" id="Nombre">
                        </div>

                        <hr class="solid">


                        <div class="form-group col-8">
                            <label class="negrita">Fecha de nacimiento</label>
                            <input type="date" class="form-control" id="FechaNacimiento">
                        </div>
                       
                        <hr class="solid">

                        <div class="form-group col-8">
                            <label class="negrita">Teléfono del Paciente</label>
                            <input type="number" class="form-control" id="Telefono">
                        </div>
                        
                        <hr class="solid">

                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalClienteNuevo">
                                    <i class="fal fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="col-6">
                              

                                <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarCliente">
                                    <i class="fal fa-save"></i>
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
            <div class="modal fade modal-with-scroll" id="modalHistorialRecetas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-secondary">
                            <h5 class="modal-title  text-white">Historial de recetas del paciente</h5>
                            <button class="btn btn-secondary btn-sm border-white" data-dismiss="modal">
                                Cerrar
                            </button>
                        </div>
                    <div class="modal-body">
                    
                        <h5 class="text-danger" id="lbPacienteHistorial">CONSUMIDOR FINAL</h5>
                        
                        <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="tab-cons-listado" data-toggle="tab" href="#tconslistado" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="fal fa-list"></i>Historial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-cons-graficas" data-toggle="tab" href="#tconsgraficas" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="fal fa-chart"></i>Gráficas</a>
                            </li>             
                        </ul>

                        <div class="tab-content" id="myTabHomeContent">
                            <div class="tab-pane fade show active" id="tconslistado" role="tabpanel" aria-labelledby="home-tab">
                                
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
                            
                            <div class="tab-pane fade" id="tconsgraficas" role="tabpanel" aria-labelledby="receta-tab">
                                <div class="" id="containerGrafPeso">
                                
                                </div>
                                <hr class="solid">
                                <div class="" id="containerGrafTalla">
                                
                                </div>
                              
                            </div>
                        </div>

                        
                        

                    
                      
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalHistorialRecetaNueva">
                                    <i class="fal fa-angle-left"></i>
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
                    <div class="col-6">
                        <div class="form-group">
                            <label class="negrita">Peso</label>
                            <input type="number" class="form-control" id="txtCPeso">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label class="negrita">Talla</label>
                            <input type="number" class="form-control" id="txtCTalla">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="negrita">(MC) Motivo de la consulta</label>
                    <textarea class="form-control" id="txtCMotivo" rows="2" placeholder="Escriba el motivo de la consulta..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(HEA) Historia de la Enfermedad Actual</label>
                    <textarea class="form-control" id="txtCHEA" rows="2" placeholder="Historia de la Enfermedad..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">Antecedentes</label>
                    <textarea class="form-control" id="txtCAntecedentes" rows="2" placeholder="Describa los antecedentes si los hay..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(EF) Exámen Físico</label>
                    <textarea class="form-control" id="txtCEF" rows="2" placeholder="Exámen físico..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(PLAN DX) Plan Diagnóstico</label>
                    <textarea class="form-control" id="txtCDiagnostico" rows="2" placeholder="Escriba el diagnóstico de la consulta..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(IC) Impresión Clínica</label>
                    <textarea class="form-control" id="txtCIC" rows="2" placeholder="Impresión clínica..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(PLAN TX) Plan Tratamiento</label>
                    <textarea class="form-control" id="txtCPTX" rows="2" placeholder="Escriba el plan tratamiento..."></textarea>
                </div>
                
           
            `
        },
        formReceta:()=>{
            return `
                <div class="form-group">
                    <label>Receta No.</label><label class="negrita text-danger" id="lbCorrelativo">0</label>
                </div>                     

                <div class="card shadow p-2">
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
                        <div class="col-sm-2 col-md-6 col-lg-6 col-xl-6">
                        </div>
                        <div class="col-sm-10 col-md-6 col-lg-6 col-xl-6" align="right">
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
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h5 class="modal-title  text-white">Detalle de la Consulta</h5>
                            <button class="btn btn-sm btn-info border-white" data-dismiss="modal">Cerrar</button>
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
                                <textarea class="form-control" id="lbCMotivo" rows="2"></textarea>
                            </div>



                            <div class="form-group">
                                <label class="negrita">(HEA) Historia de la Enfermedad Actual</label>
                                <textarea class="form-control" id="lbCHEA" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Antecedentes</label>
                                <textarea class="form-control" id="lbCAntecedentes" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(EF) Exámen Físico</label>
                                <textarea class="form-control" id="lbCEF" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(PLAN DX) Plan Diagnóstico</label>
                                <textarea class="form-control" id="lbCDiagnostico" rows="2"></textarea>
                            </div>


                            <div class="form-group">
                                <label class="negrita">(IC) Impresión Clínica</label>
                                <textarea class="form-control" id="lbCIC" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(PLAN TX) Plan Tratamiento</label>
                                <textarea class="form-control" id="lbCPTX" rows="2"></textarea>
                            </div>



                            
                        
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalDetConsulta">
                                        <i class="fal fa-angle-left"></i>
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

   
    let btnBuscarP = document.getElementById('btnBuscarP');
    btnBuscarP.addEventListener('click',()=>{

        getTblPacientes();

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
                btnGuardarCliente.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                insert_paciente(funciones.limpiarTexto(nombre.value),fechanacimiento,telefono.value)
                .then(()=>{
                    funciones.Aviso('Cliente agregado exitosamente!!')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fal fa-save"></i>';
                    $('#modalNuevoPaciente').modal('hide');

                    document.getElementById('txtBuscarReceta').value = nombre;
                    getTblPacientes();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fal fa-save"></i>';
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
        btnAgregarMedicamento.innerHTML = '<i class="fal fa-save fa-spin"></i>';

        insert_temp_receta(funciones.limpiarTexto(medicamento),dosis,duracion)
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

    let imprimeReceta = 'NO';
    let btnGuardarReceta = document.getElementById('btnGuardarReceta');
    let btnGuardarRecetaPrint = document.getElementById('btnGuardarRecetaPrint');
    btnGuardarRecetaPrint.addEventListener('click',()=>{
        imprimeReceta = 'SI';
        btnGuardarReceta.click();
    });

    btnGuardarReceta.addEventListener('click',()=>{
        
        
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Receta?')
        .then((value)=>{
            if(value==true){
        
                btnGuardarReceta.disabled = true;
                btnGuardarReceta.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                let obs = funciones.limpiarTexto(document.getElementById('txtRecetaObs').value) || 'SN';

                let peso = document.getElementById('txtCPeso').value || '0';
                let talla = document.getElementById('txtCTalla').value || '0';
                let motivo = funciones.limpiarTexto(document.getElementById('txtCMotivo').value) || 'SN';
                let diagnostico = funciones.limpiarTexto(document.getElementById('txtCDiagnostico').value) || 'SN'

                let txtCHEA = document.getElementById('txtCHEA').value || 'SN';
                let txtCAntecedentes = document.getElementById('txtCAntecedentes').value || 'SN';
                let txtCEF = document.getElementById('txtCEF').value || 'SN';
                let txtCIC = document.getElementById('txtCIC').value || 'SN';
                let txtCPTX = document.getElementById('txtCPTX').value || 'SN';

                insert_receta(GlobalSelectedCodPaciente,funciones.limpiarTexto(obs),GlobalCorrelativo,peso,talla,motivo,diagnostico,txtCHEA, txtCAntecedentes, txtCEF, txtCIC, txtCPTX)
                .then(async()=>{
                    funciones.Aviso('Receta Guardad exitosamente!!');

                    btnGuardarReceta.disabled = false;
                    btnGuardarReceta.innerHTML = '<i class="fal fa-save"></i>';
                    $("#modalNuevaReceta").modal('hide');
                    //regresa a la tab inicial en la consulta
                    document.getElementById('home-tab').click();

                    if(Number(GlobalSelectedIdTurno)==0){
                    }else{
                        delete_turno(GlobalSelectedIdTurno);
                    };

                    if(Number(GlobalSelectedIdPreconsulta)==0){
                    }else{
                        delete_preconsulta(GlobalSelectedIdPreconsulta);
                    }

                    if(imprimeReceta=='SI'){
                        receta_imprimir(GlobalCorrelativo);
                    }
                    

                    getCorrelativoCoddoc();
                    imprimeReceta ='NO';
                    await delete_all_TempReceta();

                    GlobalSelectedIdPreconsulta = 0;

                })
                .catch(()=>{
                    btnGuardarReceta.disabled = false;
                    btnGuardarReceta.innerHTML = '<i class="fal fa-save"></i>';
                    funciones.AvisoError('No se pudo guardar la receta')
                })
               
            }
        })
    });


    document.getElementById('btnIrReceta').addEventListener('click',()=>{document.getElementById('receta-tab').click()})

    getCorrelativoCoddoc();


    //HISTORIAL RECETAS
    document.getElementById('btnCerrarModalHistorialRecetaNueva').addEventListener('click',()=>{$('#modalHistorialRecetas').modal('hide');});
    document.getElementById('btnCerrarModalDetConsulta').addEventListener('click',()=>{$('#modalDatosConsulta').modal('hide')});

    funciones.slideAnimationTabs();

  
    //preconsultas
    getTblPreconsultas();

    let btnGuardarPreconsulta = document.getElementById('btnGuardarPreconsulta');
    btnGuardarPreconsulta.addEventListener('click',()=>{

        funciones.hablar('Está a punto de guardar los datos de consulta, sin guardar receta y generar un pre consulta, ¿Desea continuar?')
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Pre-Consulta?')
        .then((value)=>{
            if(value==true){
        
                btnGuardarPreconsulta.disabled = true;
                btnGuardarPreconsulta.innerHTML = '<i class="fal fa-save fa-spin"></i>';


                let peso = document.getElementById('txtCPeso').value || '0';
                let talla = document.getElementById('txtCTalla').value || '0';
                let motivo = funciones.limpiarTexto(document.getElementById('txtCMotivo').value) || 'SN';
                let diagnostico = funciones.limpiarTexto(document.getElementById('txtCDiagnostico').value) || 'SN'

                let txtCHEA = document.getElementById('txtCHEA').value || 'SN';
                let txtCAntecedentes = document.getElementById('txtCAntecedentes').value || 'SN';
                let txtCEF = document.getElementById('txtCEF').value || 'SN';
                let txtCIC = document.getElementById('txtCIC').value || 'SN';
                let txtCPTX = document.getElementById('txtCPTX').value || 'SN';

                insert_preconsulta(GlobalSelectedCodPaciente,peso,talla,motivo,diagnostico,txtCHEA, txtCAntecedentes, txtCEF, txtCIC, txtCPTX)
                .then(async()=>{
                    funciones.Aviso('Pre-Consulta Guardada exitosamente!!');

                    btnGuardarPreconsulta.disabled = false;
                    btnGuardarPreconsulta.innerHTML = '<i class="fal fa-save"></i>';

                    $("#modalNuevaReceta").modal('hide');
                    
                    //regresa a la tab inicial en la consulta
                    document.getElementById('home-tab').click();

                    socket.emit('preconsulta nueva', GlobalCodSucursal)
                    GlobalSelectedIdPreconsulta = 0;

                    getTblPreconsultas();

                })
                .catch(()=>{
                    btnGuardarPreconsulta.disabled = false;
                    btnGuardarPreconsulta.innerHTML = '<i class="fal fa-save"></i>';
                    funciones.AvisoError('No se pudo guardar la pre-consulta')
                })
               
            }
        })


    });

    // Reportes
    document.getElementById('txtFechaInicio').value = funciones.getFecha();
    document.getElementById('txtFechaFinal').value = funciones.getFecha();

    let btnRptConsultas = document.getElementById('btnRptConsultas');
    btnRptConsultas.addEventListener('click',()=>{
        getTblRptConsulta();
    });

    let btnRptMorbilidades = document.getElementById('btnRptMorbilidades');
    btnRptMorbilidades.addEventListener('click',()=>{
        funciones.hablar('Próximamente tendrás disponible esta funcionalidad');
        funciones.Aviso('Próximamente tendrás disponible esta funcionalidad');
    });

    
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
    //getTblPacientes();
    getTblTurnos();
    getTblPreconsultas();
    
};


function getTblPacientes(){
    
    let filtro = document.getElementById('txtBuscarReceta').value || '';
    if(filtro==''){
        return;
    };


    let container = document.getElementById('tblListaPacientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    getDataPacientes()
    .then((data)=>{
        data.map((r)=>{
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>${r.NOMCLIE}
                        <br>
                            <small class="negrita text-danger">${funciones.getEdad(r.FECHANACIMIENTO)} (${funciones.convertDate(r.FECHANACIMIENTO)})</small>
                        <br>
                            <small class="negrita text-primary">${r.TELEFONOS}</small>
                        <br>

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-info btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','0','${funciones.getEdad(r.FECHANACIMIENTO)}')">
                                    <i class="fal fa-edit"></i> Consulta
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-secondary btn-sm hand shadow" onclick="getTblHistorial('${r.IDCLIENTE}','${r.NOMCLIE}')">
                                    <i class="fal fa-list"></i>Historial
                                </button>
                            </div>
                        </div>
                        
                    </td>
                    
                    <td>
                        <button class="btn btn-danger btn-circle btn-sm hand shadow" onclick="delete_paciente('${r.IDCLIENTE}')" id="${'p' + r.IDCLIENTE.toString()}">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                    
                </tr>
            `
        })
        container.innerHTML = str;
        funciones.OcultarRows('tblPacientes');
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};



function getNuevaReceta(idcliente,nombre,idturno, edad){

    GlobalSelectedCodPaciente = idcliente;
    document.getElementById('lbPaciente').innerText = nombre;
    document.getElementById('lbEdadPaciente').innerText = edad;

    document.getElementById('txtRecetaObs').value = '';

    document.getElementById('txtCPeso').value = '';
    document.getElementById('txtCTalla').value = '';
    document.getElementById('txtCMotivo').value = '';
    document.getElementById('txtCDiagnostico').value = '';

    document.getElementById('txtCHEA').value = '';
    document.getElementById('txtCAntecedentes').value = '';
    document.getElementById('txtCEF').value = '';
    document.getElementById('txtCIC').value = '';
    document.getElementById('txtCPTX').value = '';


    GlobalSelectedIdTurno = Number(idturno);
    GlobalSelectedIdPreconsulta = 0;

    getTblTempReceta();

    $('#modalNuevaReceta').modal('show');


};


function getDataPacientes(){

   
    let filtro = document.getElementById('txtBuscarReceta').value;

    return new Promise((resolve, reject) => {

        axios.post('/select_lista_pacientes',{
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
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            
                axios.post('/delete_paciente',{
                    sucursal:GlobalCodSucursal,
                    id:id
                })
                .then((response) => {   
                    let data = response.data; 
                    getTblPacientes();
                }, (error) => {
                    funciones.AvisoError('No se pudo eliminar este item')
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                
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
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            
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
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                
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
                            <i class="fal fa-trash"></i>
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



function insert_receta(idcliente,obs,correlativo,peso,talla,motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx){
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
            diagnostico: diagnostico,
            historia:historia,
            antecedentes:antecedentes,
            examenf:examenf,
            impclinica:impclinica,
            plantx:plantx,
            idmorbilidad:0
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
                            <button class="btn btn-secondary btn-circle btn-md hand shadow" onclick="receta_consulta('${funciones.convertDate(r.FECHA)}','${r.PESO}','${r.TALLA}','${r.MOTIVO.replace(/(\r\n|\n|\r)/gm, "*-")}','${r.DIAGNOSTICO.replace(/(\r\n|\n|\r)/gm, "*-")}','${funciones.quitarEnter(r.HISTORIAENF)}','${funciones.quitarEnter(r.ANTECEDENTES)}','${funciones.quitarEnter(r.EXAMENFISICO)}','${funciones.quitarEnter(r.IMPRESIONCLINICA)}','${funciones.quitarEnter(r.PLANTX)}')">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-success btn-circle btn-md hand shadow" onclick="receta_whatsapp('${r.IDRECETA}')">
                                <i class="fal fa-whatsapp"></i>w
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-info btn-circle btn-md hand shadow" onclick="receta_imprimir('${r.IDRECETA}')">
                                <i class="fal fa-print"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-circle btn-md hand shadow" onclick="receta_eliminar('${r.IDRECETA}')" id="${'r' + r.IDRECETA.toString()}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
        })
        container.innerHTML = str;
        try {
            grafica_peso(data);
            grafica_talla(data);
        } catch (error) {
            
        }
       
    })
    .catch(()=> {
        container.innerHTML = 'No se pudieron cargar los datos...';
    })

    document.getElementById('lbPacienteHistorial').innerText = nomclie;
    $('#modalHistorialRecetas').modal('show');

};


function receta_consulta(fecha,peso,talla,motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx){

    document.getElementById('lbCFecha').innerText = fecha;
    document.getElementById('lbCPeso').innerText = peso;
    document.getElementById('lbCTalla').innerText = talla;
    document.getElementById('lbCMotivo').value = motivo;
    document.getElementById('lbCDiagnostico').value = diagnostico;

    document.getElementById('lbCHEA').value = historia;
    document.getElementById('lbCAntecedentes').value = antecedentes;
    document.getElementById('lbCEF').value = examenf;
    document.getElementById('lbCIC').value = impclinica;
    document.getElementById('lbCPTX').value = plantx;

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

        rootImpresion.innerHTML = getFormatoReceta(GlobalCodSucursal,fecha,paciente,str,obs);
            
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
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            
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
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                
                });

        }
    })
};




function grafica_peso(data){
   
  
    let container = document.getElementById('containerGrafPeso');
    
    container.innerHTML = '';
    container.innerHTML ='<canvas id="containerGraficaPeso" height="100"></canvas>';

    //container.innerHTML = '<canvas id="myChart1" width="40" height="40"></canvas>';

    let label = []; let valor = []; let bgColor = [];
      
    data.map((r)=>{
            label.push(r.IDRECETA);
            valor.push( Number(r.PESO));
            bgColor.push('red')
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
                borderColor: 'red',
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

function grafica_talla(data){
   
  
    let container = document.getElementById('containerGrafTalla');
    
    container.innerHTML = '';
    container.innerHTML ='<canvas id="containerGraficaTalla" height="100"></canvas>';

    //container.innerHTML = '<canvas id="myChart1" width="40" height="40"></canvas>';

    let label = []; let valor = []; let bgColor = [];
      
    data.map((r)=>{
            label.push(r.IDRECETA);
            valor.push( Number(r.TALLA));
            bgColor.push('blue')
    })

    console.log(valor);

    var ctx = document.getElementById('containerGraficaTalla').getContext('2d');
    var myChart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: 'line',
        data: {
            labels: label.reverse(),
            datasets: [{
                data:valor.reverse(),
                borderColor: 'blue',
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
                    text: 'GRAFICA POR TALLA'
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
    let conteo = 0;

    getDataTurnos()
    .then((data)=>{
        data.map((r)=>{
            conteo += 1;
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>(T:${conteo}) - ${r.NOMCLIE}
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
                        <br>
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-secondary btn-sm hand shadow" onclick="getTblHistorial('${r.IDCLIENTE}','${r.NOMCLIE}')">
                                    <i class="fal fa-list"></i>Histor
                                </button>        
                            </div>
                            <div class="col-4">
                                <button class="btn btn-info btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','${r.ID}','${funciones.getEdad(r.FECHANACIMIENTO)}')">
                                    <i class="fal fa-edit"></i>Consul
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-success btn-sm hand shadow" onclick="funciones.hablar('Es el turno de ' + '${r.NOMCLIE}' + ', adelante por favor')">
                                    <i class="fal fa-bullhorn"></i>Llamar
                                </button>    
                            </div>
                            
                        </div>
                    </td>
                    <td>${r.SEGURO}
                        <br>
                        <small class="negrita text-info">Código: ${r.CODIGO_SEGURO}</small>
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


function delete_turno(idturno){
    axios.post('/delete_temp_espera',{
        sucursal:GlobalCodSucursal,
        id:idturno
        })
    .then(async(response) => {          
        console.log('turno eliminado ' +  idturno.toString())
        GlobalSelectedIdTurno = 0;
        socket.emit('turno finalizado doctor', GlobalCodSucursal, idturno)
        await getTblTurnos();             
    }, (error) => {
        console.log('turno no eliminado');
    });

};
 
//********************* */
//********************* */

//***** PRECONSULTAS ******/
function getDataPreconsultas(){
    return new Promise((resolve, reject) => {

        axios.post('/select_lista_preconsultas',{
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

function getTblPreconsultas(){
    

    let container = document.getElementById('tblPreconsultas');
    container.innerHTML = GlobalLoader;
   

    let str = '';
 
    getDataPreconsultas()
    .then((data)=>{
        data.map((r)=>{
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>${funciones.convertDate(r.FECHA)}</td>

                    <td>${r.NOMCLIE}

                        <div class="row">
                            <div class="col-6">
                                <small class="negrita text-danger">Peso: ${r.PESO}</small>
                            </div>
                            <div class="col-6">
                                <small class="negrita text-danger">Talla: ${r.TALLA}</small>
                            </div>
                           
                        </div>
                      
                    </td>

                    <td>
                        <button class="btn btn-circle btn-lg btn-info shadow" 
                        onclick="getDatosPreconsulta(${r.CODCLIENTE},'${r.NOMCLIE}',${r.ID},'${funciones.getEdad(r.FECHANACIMIENTO)}', '${r.PESO}', '${r.TALLA}', '${r.MOTIVO}','${r.DIAGNOSTICO}','${r.HISTORIAENF}','${r.ANTECEDENTES}','${r.EXAMENFISICO}','${r.IMPRESIONCLINICA}','${r.PLANTX}')">
                            <i class="fal fa-notes-medical"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-circle btn-lg btn-danger shadow" onclick="eliminar_preconsulta(${r.ID})">
                            <i class="fal fa-trash"></i>
                        </button>
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

function insert_preconsulta(idcliente,peso,talla,motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_preconsulta',{
            sucursal:GlobalCodSucursal,
            idcliente:idcliente,
            fecha:funciones.getFecha(),
            hora:funciones.getHora(),
            peso:peso,
            talla:talla,
            motivo:motivo,
            diagnostico: diagnostico,
            historia:historia,
            antecedentes:antecedentes,
            examenf:examenf,
            impclinica:impclinica,
            plantx:plantx,
            idmorbilidad:0
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function eliminar_preconsulta(id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta Pre-Consulta?')
    .then((value)=>{
        if(value==true){
            delete_preconsulta(id)
            .then(()=>{
                funciones.Aviso('Pre-consulta eliminada exitosamente!!');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar esta Pre-Consulta');
            })
        }

    })
};

function delete_preconsulta(id){

    axios.post('/delete_preconsulta',{
        sucursal:GlobalCodSucursal,
        id:id
        })
    .then(async(response) => {          
       
        GlobalSelectedIdPreconsulta = 0;
        
        await getTblPreconsultas();             
    }, (error) => {
        console.log('turno no eliminado');
    });

};

function getDatosPreconsulta(idcliente,nombre,idpreconsulta, edad, peso, talla, motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx){

    GlobalSelectedCodPaciente = idcliente;
    document.getElementById('lbPaciente').innerText = nombre;
    document.getElementById('lbEdadPaciente').innerText = edad;

    document.getElementById('txtRecetaObs').value = '';

    document.getElementById('txtCPeso').value = peso;
    document.getElementById('txtCTalla').value = talla;
    document.getElementById('txtCMotivo').value = motivo;
    document.getElementById('txtCDiagnostico').value = diagnostico;

    document.getElementById('txtCHEA').value = historia;
    document.getElementById('txtCAntecedentes').value = antecedentes;
    document.getElementById('txtCEF').value = examenf;
    document.getElementById('txtCIC').value = impclinica;
    document.getElementById('txtCPTX').value = plantx;


    GlobalSelectedIdTurno = 0;
    GlobalSelectedIdPreconsulta = idpreconsulta;

    getTblTempReceta();

    $('#modalNuevaReceta').modal('show');


};

/************ */



/***** REPORTES ****/
function getDataRptConsultas(){

    let fi = funciones.devuelveFecha('txtFechaInicio');
    let ff = funciones.devuelveFecha('txtFechaFinal');

    return new Promise((resolve, reject) => {

        axios.post('/rpt_consultas',{
            sucursal:GlobalCodSucursal,
            fi:fi,
            ff:ff
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblRptConsulta(){
    

    let container = document.getElementById('containerReports');
    container.innerHTML = GlobalLoader;
   

    let str = '';
 
    getDataRptConsultas()
    .then((data)=>{
        data.map((r)=>{
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>${r.NOCASO}
                        <br>
                        <small class="negrita text-danger">Hora: ${r.HORA}</small>
                    </td>
                    <td>${funciones.convertDate(r.FECHA)}</td>
                    <td>${r.NOMCLIE}</td>
                </tr>
            `
        })

        let table = `<table class="table table-responsive col-12">
                        <thead class="bg-info text-white">
                            <tr>
                                <td>NO.CASO</td>
                                <td>FECHA</td>
                                <td>PACIENTE</td>
                            </tr>
                        </thead>
                        <tbody>${str}</tbody>
                    </table>`

        container.innerHTML = table;
       
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};

/***** REPORTES ****/