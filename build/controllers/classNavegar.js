let Navegar ={
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
    recetas: ()=>{
        funciones.loadScript('./views/viewRecetas.js','root')
          .then(()=>{
            initView();
          })
    },
    consultas: ()=>{

    }
}