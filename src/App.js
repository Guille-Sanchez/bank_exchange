import "./App.css";
import NavBar from "./components/navbar/Navbar.jsx";
import Table from "./components/table/Table.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Table className={"table"} />
    </div>
  );
}

export default App;
