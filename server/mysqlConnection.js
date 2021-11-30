var mysql = require('mysql');
const config = {
    connectionLimit : 100,
    host            : 'mysql5027.site4now.net',
    user            : 'a6478c_medical',
    password        : 'razors1805',
    database        : 'db_a6478c_medical'
  };

let execute = {
    query:(qry,res)=>{
        var pool  = mysql.createPool(config);

        pool.query(qry, function (error, results, fields) {
            //if (error) throw error;
            if(error){
                res.send(error);
            }else{
                res.send(results[0]);
            }
            //console.log('The solution is: ', results[0].solution);
            
        });
    }
}

export default execute;