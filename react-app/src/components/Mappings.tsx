// este archivo guarda los mapeos y listas que se utilizan en ciertas partes.

export const nombreTablasMapeadas = {
  receta_medica: "Receta Médica",
  maestro_paciente: "Maestro Paciente",
  tiempo_espera: "Tiempos de Espera",
  fhir: "FHIR",
  deis: "EIS",
  core: "CoreCL",
  core_minsal: "Core Minsal",
  hl7_guias: "Guías HL7",
  ips: "IPS",
  ipscl: "IPS Cl",
  otras_guias: "Otras Guías",
};

export const nombreColumnasMapeadas = {
  receta_medica: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  maestro_paciente: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  tiempo_espera: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  fhir: {
    url: "Link",
    version: "Version",
    recurso: "Recurso",
  },
  ips: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  ipscl: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  otras_guias: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  hl7_guias: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  core: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
  core_minsal: {
    id_computableName: "Computable Name",
    tipo: "Tipo",
    artefacto: "Artefacto",
    dependencia: "Dependencia",
    versionDep: "Proviene de",
    url_dep: "Link de la Dependencia",
    url_version: "Link",
  },
};

export const tableOrder = [
  "fhir",
  "ips",
  "deis",
  "core",
  "ipscl",
  "core_minsal",
  "hl7_guias",
  "otras_guias",
  "receta_medica",
  "maestro_paciente",
  "tiempo_espera",
];

export const tableGroupTitles = [
  "Estandar e Internacionales",
  "Core Nacional",
  "Core Locales",
  "Guías de Implementación",
];

export const tableDescriptions: Record<string, string> = {
  fhir: "Estandar internacional FHIR(Recursos de Interoperabilidad Sanitaria Rápida)",
  ips: "Guía de implementación del resumen para pacientes internacionales",
  deis: "Guía de Estandares de Información de Salud",
  core: "Guía núcleo de guías de implementación",
  ipscl:
    "Guía de implementación del resumen para pacientes internacionales versión Chile",
  core_minsal: "Guía núcleo de guías de implementación versión Minsal",
  hl7_guias: "Guías creadas por la organización HL7",
  otras_guias: "Guías creadas por cualquier otra institución",
  receta_medica: "Sistema Nacional de receta electronica",
  maestro_paciente:
    "Sistema de unificación y gestión de identidad única de pacientes en salud nacional",
  tiempo_espera:
    "Gestión de consultas nuevas de especialidad desde APS al nivel secundario vía Tiempos de Espera.",
};
