function getView(){
    let view = {
        formPaciente:()=>{
            return `
                <div class="card">
                    <div class="card-header">
                        <h4>Nuevo paciente</h4>
                    </div>
                    <div class="card-body">
                        
                        <div class="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" class="form-control">
                        </div>

                    </div>
                </div>
            `
        }
    }

    //root es una variable que representa el contenedor principal
    // ahi dibulo el html 
    root.innerHTML = view.formPaciente();

}


function InicializarVista(){
    getView(); //esta funcion dibuja el html dentro del contenedor principal
    //aca abajo haré otra funcion para ir agregandole los eventos a cada elemento

}