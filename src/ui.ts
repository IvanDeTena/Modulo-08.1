import { Pacientes, estilo } from "./modelo";

// Imprime un mensaje con estilo
export const imprimirMensajeConEstilo = (mensaje: string): void => {
  console.log(`%c${mensaje}`, estilo);
};

// Notifica si un médico de pediatría tiene pacientes asignados
export const verificarYNotificarPediatra = (pacientes: Pacientes[]): void => {
  const tienePacientesDePediatria = pacientes.some((paciente) => paciente.especialidad === "Pediatra");
  console.log(
    tienePacientesDePediatria 
      ? "El médico no puede irse a casa, tiene pacientes asignados." 
      : "El médico puede irse a casa, no tiene pacientes asignados."
  );
};
