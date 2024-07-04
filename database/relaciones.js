export const relaciones = [
  {
    table_name: "ips",
    column_name: "url_dep",
    foreign_table_name: "fhir",
    foreign_column_name: "url",
  },
  {
    table_name: "ipscl",
    column_name: "url_dep",
    foreign_table_name: "ips",
    foreign_column_name: "url_version",
  },
  {
    table_name: "hl7_guias",
    column_name: "url_dep",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "otras_guias",
    column_name: "url_dep",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "core_minsal",
    column_name: "url_dep",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "tiempo_espera",
    column_name: "dep_fhir",
    foreign_table_name: "fhir",
    foreign_column_name: "url",
  },
  {
    table_name: "receta_medica",
    column_name: "url_dep",
    foreign_table_name: "fhir",
    foreign_column_name: "url",
  },
  {
    table_name: "core",
    column_name: "url_dep",
    foreign_table_name: "fhir",
    foreign_column_name: "url",
  },
  {
    table_name: "maestro_paciente",
    column_name: "dep_fhir",
    foreign_table_name: "fhir",
    foreign_column_name: "url",
  },
  {
    table_name: "tiempo_espera",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "tiempo_espera",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "maestro_paciente",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "maestro_paciente",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "tiempo_espera",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "tiempo_espera",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "maestro_paciente",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
  {
    table_name: "maestro_paciente",
    column_name: "dep_core",
    foreign_table_name: "core",
    foreign_column_name: "url_version",
  },
];
