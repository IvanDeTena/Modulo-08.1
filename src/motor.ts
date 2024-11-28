import { Pacientes } from "./modelo";

// Filtra pacientes asignados a pediatría
export const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  const resultado: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push(pacientes[i]);
    }
  }
  return resultado;
};

// Filtra pacientes asignados a pediatría y menores de 10 años
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const resultado: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      resultado.push(pacientes[i]);
    }
  }
  return resultado;
};

// Verifica si hay pacientes en pediatría
export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }
  return false;
};

export interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

// Cuenta pacientes por especialidad
export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let contadorMedicoDeFamilia = 0;
  let contadorPediatria = 0;
  let contadorCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      contadorMedicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      contadorPediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      contadorCardiologia++;
    }
  }

  return {
    medicoDeFamilia: contadorMedicoDeFamilia,
    pediatria: contadorPediatria,
    cardiologia: contadorCardiologia,
  };
};

// Reasigna pacientes de pediatría a médico de familia
export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  const copiaPacientes: Pacientes[] = [];
  
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = { ...pacientes[i] };
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
    copiaPacientes.push(paciente);
  }

  return copiaPacientes;
};