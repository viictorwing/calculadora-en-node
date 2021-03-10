const fs = require('fs');

const creararchivo = async(base = 5, listar=false, fin=10) =>{
//return new Promise ((resolve, reject) =>{ promesa

try {

let salida = '';

for (let i =1; i<=fin; i++){
    //console.log(`${base} x ${i}= ${base * i}`);
    salida+= `${base} x ${i}= ${base * i}\n`;
}

if (listar){
    console.log('======================')
    console.log('TABLA DEL', base);
    console.log('======================')
    console.log(salida);
}

fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);
    return`tabla-${base}.txt`;
} catch (error) {
    throw err;
}

}
//)}
module.exports ={
    creararchivo
}