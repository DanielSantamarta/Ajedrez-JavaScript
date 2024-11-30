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

const coloresPiezas = {
    claro: '#ffffff',
    oscuro: '#000000'
}

//Piezas escritas en Unicode
const piezas = {
    rey: ['♚','♔'],
    reina: ['♛','♕'],
    torre: ['♜','♖'],
    alfil: ['♝','♗'],
    caballo: ['♞','♘'],
    peon: ['♟','♙'],
}

const posicionarPiezas = altoCelda * .1;

const $canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d');

$canvas.width = ancho;
$canvas.height = alto;

$canvas.style.backgroundColor = '#ffffff';

ctx.textBaseline = 'middle';
ctx.textAlign = 'center';

document.body.appendChild($canvas);

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignContent = 'center';
document.body.style.height = '100%';
document.body.parentElement.style.height = '100%';
document.body.style.background = '#333333'

  
const renderizarTablero = () =>{
    for (let x=0; x<filas; x++){
        for (let y=0; y<columnas; y++){
            let colorCelda = colores.claro;
            let colorTexto = colores.oscuro;
    
            if((x + y) % 2){
                colorCelda = colores.oscuro;
                colorTexto = colores.claro;
            }
    
            ctx.fillStyle = colorCelda;
            ctx.fillRect(x * anchoCelda ,y * altoCelda ,anchoCelda ,altoCelda);
            
            //dibujar posicion base
            ctx.fillStyle = colorTexto;
            ctx.textBaseline = 'top';
            ctx.textAlign = 'start';
            ctx.font = '8px Arial';
            ctx.fillText(`[${x};${y}]`,x * anchoCelda + 10,y * altoCelda + 10);

           //dibujar pieza
            const pieza = tableroMatriz[x][y];
            if(pieza){
                ctx.fillStyle = pieza.color;
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.font = '72px Arial';
                ctx.fillStyle = pieza.color;
                ctx.fillText(pieza.tipo[0],x * anchoCelda + altoCelda / 2 ,y * altoCelda + anchoCelda / 2 + posicionarPiezas );    
                ctx.fillStyle = coloresPiezas.oscuro;
                ctx.fillText(pieza.tipo[1],x * anchoCelda + altoCelda / 2 ,y * altoCelda + anchoCelda / 2 + posicionarPiezas );    
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
for(let i = 0; i < columnas; i++){
    tableroMatriz[i][1] = {
        tipo: piezas.peon,
        color: coloresPiezas.oscuro,
    }
    tableroMatriz[i][6] = {
        tipo: piezas.peon,
        color: coloresPiezas.claro,
    }
}

tableroMatriz[0][0] = {
    tipo: piezas.torre,
    color: coloresPiezas.oscuro,
}
tableroMatriz[1][0] = {
    tipo: piezas.caballo,
    color: coloresPiezas.oscuro,
}
tableroMatriz[2][0] = {
    tipo: piezas.alfil,
    color: coloresPiezas.oscuro,
}
tableroMatriz[3][0] = {
    tipo: piezas.reina,
    color: coloresPiezas.oscuro,
}
tableroMatriz[4][0] = {
    tipo: piezas.rey,
    color: coloresPiezas.oscuro,
}
tableroMatriz[5][0] = {
    tipo: piezas.alfil,
    color: coloresPiezas.oscuro,
}
tableroMatriz[6][0] = {
    tipo: piezas.caballo,
    color: coloresPiezas.oscuro,
}
tableroMatriz[7][0] = {
    tipo: piezas.torre,
    color: coloresPiezas.oscuro,
}

tableroMatriz[0][7] = {
    tipo: piezas.torre,
    color: coloresPiezas.claro,
}
tableroMatriz[1][7] = {
    tipo: piezas.caballo,
    color: coloresPiezas.claro,
}
tableroMatriz[2][7] = {
    tipo: piezas.alfil,
    color: coloresPiezas.claro,
}
tableroMatriz[3][7] = {
    tipo: piezas.reina,
    color: coloresPiezas.claro,
}
tableroMatriz[4][7] = {
    tipo: piezas.rey,
    color: coloresPiezas.claro,
}
tableroMatriz[5][7] = {
    tipo: piezas.alfil,
    color: coloresPiezas.claro,
}
tableroMatriz[6][7] = {
    tipo: piezas.caballo,
    color: coloresPiezas.claro,
}
tableroMatriz[7][7] = {
    tipo: piezas.torre,
    color: coloresPiezas.claro,
}

renderizarTablero();