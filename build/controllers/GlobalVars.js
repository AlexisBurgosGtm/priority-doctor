
let root = document.getElementById('root');
let rootImpresion = document.getElementById('rootImpresion');

let GlobalLoader = `
    <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
    </div>
`;


let GlobalCodSucursal = 'AMPIE';
let GlobalCoddoc='REC01';
let GlobalCorrelativo = 0;

let GlobalSelectedIdTurno = 0;

let GlobalTipoUsuario = '';

//paciente
let GlobalSelectedCodPaciente = 0;
let GlobalSelectedNomPaciente = '';


let GlobalEncabezadoReceta = 'Clínica Médica Niño Jesús - Dr. Pablo A. Vásquez Ampié' + "\n" + 'Dirección: Frente al centro de salud, Retalhuleu. Teléfono: 7771-2416 / 5199-5119' + "\n" + "-----------------" + "\n";
let GlobalFooterReceta = '';

let GlobalRecetaEmpresa = '';
let GlobalRecetaDireccion = '';
let GlobalRecetaTelefono = '';
let GlobalRecetaFooter = '';
let GlobalRecetaLogo = '';