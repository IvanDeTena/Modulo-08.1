import { Pacientes, estilo } from "./modelo";

// Imprime un mensaje con estilo
export const imprimirMensajeConEstilo = (mensaje: string): void => {
  console.log(`%c${mensaje}`, estilo);
};

// Notifica si un médico de pediatría tiene pacientes asignados
export const verificarYNotificarPediatra = (pacientes: Pacientes[]): void => {
  let tienePacientesDePediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      tienePacientesDePediatria = true;
      break;
    }
  }

  console.log(
    tienePacientesDePediatria 
      ? "El médico no puede irse a casa, tiene pacientes asignados." 
      : "El médico puede irse a casa, no tiene pacientes asignados."
  );
};
