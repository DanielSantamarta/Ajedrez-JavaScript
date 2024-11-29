const ancho=800;
const alto=800;

const filas = 8;
const columnas = 8;

const anchoCelda = ancho / filas;
const altoCelda = alto / columnas;

const $ = (s) => document.querySelectorAll(s);

const colores = {
    claro: '#eeeed2',
    oscuro: '#769656'
}

//Piezas escritas en Unicode
const piezas = {
    rey: '&#9812',
    reina: '&#9813',
    torre: '&#9814',
    alfil: '&#9815',
    caballo: '&#9816',
    peon: '&#9817',
}

const $canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d');

$canvas.width = ancho;
$canvas.height = alto;

$canvas.style.backgroundColor = '#ffffff';

ctx.textBaseline = 'middle';
ctx.textAlign = 'center';

document.body.appendChild($canvas);
  
const renderizarTablero = () =>{
    for (let x=0; x<filas; x++){
        for (let y=0; y<columnas; y++){
            tableroMatriz[x][y] = null;
            let colorCelda = colores.claro;
            let colorTexto = colores.oscuro;
    
            if((x + y) % 2){
                colorCelda = colores.oscuro;
                colorTexto = colores.claro;
            }
    
            ctx.fillStyle = colorCelda;
            ctx.fillRect(x * anchoCelda ,y * altoCelda ,anchoCelda ,altoCelda);
            
            ctx.fillStyle = colorTexto;

            ctx.textBaseline = 'top';
            ctx.textAlign = 'start';
            ctx.font = '8px Arial';
            ctx.fillText(`[${x};${y}]`,x * anchoCelda + 10,y * altoCelda + 10);

           
            const pieza = tableroMatriz[x][y];
            if(pieza){
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.font = '64px Arial';
                ctx.fillText(pieza.tipo,x * anchoCelda + altoCelda / 2 ,y * altoCelda + anchoCelda / 2 );    
            }

        }
    }
    
}

// Inizializar el tablero
const tableroMatriz = [];
for (let x=0; x<filas; x++){
    tableroMatriz[x]=[];
    for (let y=0; y<columnas; y++){
        tableroMatriz[x][y] = null;
    }
}

//Colocar las piezas
tableroMatriz[0][0] = {
    tipo: piezas.peon,
    color: colores.claro,
}

renderizarTablero();