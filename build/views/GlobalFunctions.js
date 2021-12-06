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