let classNavegar ={
    login : ()=>{
        funciones.loadScript('./views/login.js','root')
        .then(()=>{
            InicializarVista();
        })
    },
    pacientes: ()=>{
          funciones.loadScript('./views/pacientes.js','root')
            .then(()=>{
                InicializarVista();
            })
    },
    consultas: ()=>{

    }
}