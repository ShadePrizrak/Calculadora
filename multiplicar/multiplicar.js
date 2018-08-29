//Requireds
const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!(Number(base) && Number(limite))) {
            return reject('La base o el limite no es un número')
        }
        if (limite < 1) {
            return reject('El limite debe ser un número mayor igual a 1')
        }
        console.log('================'.green);
        console.log(`==tabla del ${base}==`.green);
        console.log('================'.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i}=${base*i}\n`);
        }
        return resolve(`Tabla ${base} listada`);
    })
}

let CrearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject('La base no es un número');

        }
        let Contenido = '';

        for (let i = 1; i <= limite; i++) {
            Contenido += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, Contenido, (err) => {
            if (err)
                return reject(err);
            else
                return resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    CrearArchivo,
    ListarTabla
}