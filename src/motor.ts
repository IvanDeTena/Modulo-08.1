import { Pacientes } from "./modelo";

// Filtra pacientes asignados a pediatría
export const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.filter((paciente) => paciente.especialidad === "Pediatra");

// Filtra pacientes asignados a pediatría y menores de 10 años
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10);

// Verifica si hay pacientes en pediatría
export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => 
  pacientes.some((paciente) => paciente.especialidad === "Pediatra");

export interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

// Cuenta pacientes por especialidad
export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: pacientes.filter((paciente) => paciente.especialidad === "Medico de familia").length,
    pediatria: pacientes.filter((paciente) => paciente.especialidad === "Pediatra").length,
    cardiologia: pacientes.filter((paciente) => paciente.especialidad === "Cardiólogo").length,
  };
};

// Reasigna pacientes de pediatría a médico de familia
export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.map((paciente) => ({
    ...paciente,
    especialidad: paciente.especialidad === "Pediatra" ? "Medico de familia" : paciente.especialidad,
  }));
