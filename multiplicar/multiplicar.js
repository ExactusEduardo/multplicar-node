//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida no es número ${ base }`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido no es número ${ limite }`);
            return;
        }

        console.log('============================================'.red);
        console.log(`tabla de ${base}`.red);
        console.log('============================================'.red);
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i}`.green);
        }
        resolve(`tabla-${ base }-al-${ limite }.txt`);
    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida no es número ${ base }`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            }

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}