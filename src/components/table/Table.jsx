import { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "./Dropdown.jsx";
import FetchData from "./FetchData.jsx";

function BasicExample() {
  const options = useRef({
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  });

  const [arrayOfExchanges, setArrayOfExchanges] = useState({
    currency: [],
    exchange: [],
    numberOfRows: 0,
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Dropdown
              options={options.current}
              setArrayOfExchanges={setArrayOfExchanges}
              arrayOfExchanges={arrayOfExchanges}
            />
            {console.log(arrayOfExchanges)}
          </th>
          <th>Exhange rate</th>
          <th>Amount</th>
          <th>Amount to U.S.Dollar</th>
        </tr>
      </thead>
      <tbody>
        <FetchData
          setArrayOfExchanges={setArrayOfExchanges}
          arrayOfExchanges={arrayOfExchanges}
        />
      </tbody>
    </Table>
  );
}

export default BasicExample;
