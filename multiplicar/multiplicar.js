//Requires
const fileSystem = require('fs');
const colors = require('colors');

let listarTabla = (iBase, iLimite = 10) => {
    let cTabla = '';
    if (!Number(iBase)) {
        console.log(`El valor para la base '${base}' no es un número`);
        return;
    }

    if (!Number(iLimite)) {
        console.log(`El valor del limite '${iLimite}' no es un número`);
        return;
    }

    console.log('==================='.green);
    console.log(`tabla del ${iBase}`.green);
    console.log('==================='.green);

    cTabla = ObtenerTabla(iBase, iLimite);
    console.log(cTabla);
}

let crearArchivo = (base, iLimite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor para la base '${base}' no es un número`);
            return;
        }

        if (!Number(iLimite)) {
            reject(`El valor para el limite '${iLimite}' no es un número`);
            return;
        }

        let cDatos = '';
        let cNombreArchivo = `tabla-${base}-al-${iLimite}.txt`;

        cDatos = ObtenerTabla(base, iLimite);

        fileSystem.writeFile(`tablas/${cNombreArchivo}`, cDatos, (err) => {
            if (err)
                reject(err)
            else
                resolve(cNombreArchivo);
        });
    });
};

let ObtenerTabla = (iBase, iLimite) => {
    let cDatos = '';

    for (let iContador = 1; iContador <= iLimite; iContador++) {
        let cLinea = `${iBase} * ${iContador} = ${iBase * iContador} \n`;
        cDatos += cLinea;
    }

    return cDatos;
};

module.exports = {
    crearArchivo,
    listarTabla
}