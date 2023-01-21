import Table from "react-bootstrap/Table";
import Dropdown from "./Dropdown.jsx";
import FetchData from "./FetchData.jsx";

function BasicExample() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Dropdown options={options} />
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
