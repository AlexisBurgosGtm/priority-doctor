function get_correlativo(coddoc){
    return new Promise((resolve,reject)=>{
        axios.post('/select_correlativo',{
            sucursal:GlobalCodSucursal,
            coddoc:coddoc
        })
        .then((response) => {
             //console.log(response);
             let correlativo = 0;
             response.data.map((r)=>{
                correlativo= Number(r.CORRELATIVO);
             })
             //console.log(correlativo);          
            resolve(correlativo);             
        }, (error) => {
            reject(0);
        });
    });
};


function get_data_receta(idreceta){
    return new Promise((resolve,reject)=>{
        axios.post('/select_receta',{
            sucursal:GlobalCodSucursal,
            correlativo:idreceta
        })
        .then((response) => {
             
             let data = response.data
                       
            resolve(data);             
        }, (error) => {
            reject(error);
        });
    });
};



function getFormatoReceta(sucursal,fecha,paciente,data,obs){
    let view = '';
    switch (sucursal) {
        case 'AMPIE':
            view = `
           
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
                    ${data}
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
            break;
    
        default:
            break;
    }

    return view;
    
}