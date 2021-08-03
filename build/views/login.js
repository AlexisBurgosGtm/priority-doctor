function getView(){
    let view = {
        formLogin:()=>{
            return `
                <div class="card">
                    <div class="card-header">
                        <h4>Inicio de Sesión</h4>
                    </div>
                    <div class="card-body">
                        
                        <div class="form-group">
                            <label>Usuario</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-info shadow btn-lg" id="btnIniciar">
                                <i class="fal fa-user"></i>Iniciar
                            </button>
                        </div>


                    </div>
                </div>
            `
        }
    }

    //root es una variable que representa el contenedor principal
    // ahi dibulo el html 
    root.innerHTML = view.formLogin();

}

function addListeners(){
    let btnIniciar = document.getElementById('btnIniciar');
    btnIniciar.addEventListener('click',()=>{
      
        classNavegar.pacientes();
    })
}

function InicializarVista(){
    getView(); //esta funcion dibuja el html dentro del contenedor principal
    //aca abajo haré otra funcion para ir agregandole los eventos a cada elemento
    addListeners();
}