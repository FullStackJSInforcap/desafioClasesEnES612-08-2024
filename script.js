import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

let clienteUno = new Cliente('Marcos');
let impuestoUno = new Impuestos(12000000, 2000000);
clienteUno.impuestos = impuestoUno;
clienteUno.calcularImpuesto();

