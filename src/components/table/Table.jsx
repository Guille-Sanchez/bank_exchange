import Table from "react-bootstrap/Table";
import Dropdown from "./Dropdown.jsx";
import FetchData from "./FetchData.jsx";

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Dropdown />
          </th>
          <th>Exhange rate</th>
          <th>Amount</th>
          <th>Amount to U.S.Dollar</th>
        </tr>
      </thead>
      <tbody>
        <FetchData />
      </tbody>
    </Table>
  );
}

export default BasicExample;
