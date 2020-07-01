const fs = require("fs");

let crearArchivo = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }

    return new Promise((resolve, reject) => {
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, "utf8", (err) => {
            if (err) reject(err);
            else resolve(`tabala-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    let data = "";
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla,
};