let Navegar ={
    login : ()=>{
        funciones.loadScript('./views/login.js','root')
        .then(()=>{
            GlobalCodSucursal = '';
            GlobalSelectedCodPaciente = 0;
            GlobalSelectedNomPaciente = '';
            InicializarVista();
        })
    },
    recetas: ()=>{
        funciones.loadScript('./views/viewRecetas.js','root')
          .then(()=>{
            initView();
          })
    },
    recepcion: ()=>{
        funciones.loadScript('./views/viewTurnos.js','root')
        .then(()=>{
          initView();
        })
    }
}