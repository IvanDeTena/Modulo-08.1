import "./style.css";
import { pacientes } from "./modelo";
import { imprimirMensajeConEstilo, verificarYNotificarPediatra } from "./ui";
import { obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, reasignaPacientesAMedicoFamilia, cuentaPacientesPorEspecialidad } from "./motor";


// Apartado 1:A
imprimirMensajeConEstilo("Apartado 1 A: Pacientes pediatría");
console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Apartado 1:B
imprimirMensajeConEstilo("Apartado 1 B: Pacientes pediatría menores de 10 años");
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
imprimirMensajeConEstilo("Apartado 2: Protocolo de urgencia");
let protocoloActivado = false;
for (let i = 0; i < pacientes.length; i++) {
  if (pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) {
    protocoloActivado = true;
    break;
  }
}
console.log("Protocolo " + (protocoloActivado ? "activado" : "no activado"));

// Apartado 3
imprimirMensajeConEstilo("Apartado 3: Reasignación de pacientes");
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
imprimirMensajeConEstilo("Apartado 4: Hay pacientes de pediatría");
verificarYNotificarPediatra(pacientes);

// Apartado 5
imprimirMensajeConEstilo("Apartado 5: Listado de pacientes por especialidad");
console.log(cuentaPacientesPorEspecialidad(pacientes));
