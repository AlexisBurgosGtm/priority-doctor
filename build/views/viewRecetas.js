const { addListener } = require("nodemon");

function getView(){
    let view = {
        body:()=>{
            return `
                <div class="card col-12">
                    <div class="card-header">
                        <h4>Recetas Emitidas</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" class="form-control" id="txtBuscarReceta" placeholder="Escriba para Buscar...">
                            </div>
                        </div>
                        <div class="row">
                            <div class="table-responsive">
                                <table class="table table-responsive table-hover table-striped" id="tblRecetas">
                                    <thead  class="bg-info text-white">
                                        <tr>
                                            <td>No.</td>
                                            <td>Fecha</td>
                                            <td>Paciente</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                </table>
                                <tbody id="bodyTblRecetas">
                                
                                </tbody>
                            </div>

                        </div>
                        

                    </div>
                </div>
            `
        },
        modalNuevaReceta:()=>{
            return `
            <div class="modal fade" id="modalNueva" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Receta</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       
                        

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body();
};

function addEventListeners(){

};

function initView(){
    getView();
    addListeners();
    
};


function getTblRecetas(){
  
    
};