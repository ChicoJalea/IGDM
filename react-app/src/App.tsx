import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Ash", "ChicoJalea"];
  return (
    <Card>
      <CardBody title="Hola Mundito" text="chao mundito" />
      <List data={list} />
    </Card>
  );
}

export default App;
