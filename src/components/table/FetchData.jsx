import React, { useState } from "react";

function FetchData({ numberOfRows, arrayOfExchanges }) {
  const [amountOfCurrencies, setAmountOfCurrencies] = useState(1);
  if (numberOfRows === 0) {
    return (
      <tr>
        <td>Select Currency</td>
        <td>Select Currency</td>
        <td>Select Currency</td>
        <td>Select Currency</td>
      </tr>
    );
  } else {
    console.log("inside else fetchdata");
    return [...Array(arrayOfExchanges.numberOfRows)].map((_, index) => {
      return (
        <tr key={arrayOfExchanges.currency[index]}>
          <td>{arrayOfExchanges.currency[index]}</td>
          <td>{arrayOfExchanges.exchange[index]}</td>
          <td>
            {
              <input
                style={{ textAlign: "center", backgroundColor: "inherit" }}
                type="number"
                onChange={(e) => {
                  setAmountOfCurrencies(e.target.value);
                }}
                value={amountOfCurrencies}
              />
            }
          </td>
          <td>{arrayOfExchanges.exchange[index] * amountOfCurrencies}</td>
        </tr>
      );
    });
  }
}

export default FetchData;
