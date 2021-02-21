const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try {
        
    
        let salida, consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }
    
        if (listar) {
            console.log('==================='.green);
            console.log(`Tabla del ${base}`);
            console.log('==================='.green);
            console.log(consola);
        }
    
        // fs.writeFile(`tabla del ${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`Tabla del ${base} creada`);
        // });
    
        // forma sincrona
        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);
        return `tabla del ${base}.txt`.magenta;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}