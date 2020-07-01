const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;

// console.log(process.argv);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// let argv2 = process.argv;

// console.log(argv.limite);
// console.log(argv2);

let comando = argv._[0];

console.log(argv);

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((e) => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}