function Titulo() {
  const name = "marquito";
  if (name) {
    return <h1>Hola {name}</h1>;
  }
  return <h1>hola nomas</h1>;
}

export default Titulo;
