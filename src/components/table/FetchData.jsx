import React from "react";

function FetchData({
  numberOfRows,
  //currentExchange,
  //setArrayOfExchanges,
  arrayOfExchanges,
}) {
  /*setArrayOfExchanges((prev) => ({
    ...prev,
    currency: currentExchange.currency,
    exchange: currentExchange.exchange,
  }));*/
  console.log(arrayOfExchanges);
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
    return [...Array(arrayOfExchanges.numberOfRows)].map((x, index) => {
      return (
        <tr key={arrayOfExchanges.currency[index]}>
          <td>{arrayOfExchanges.currency[index]}</td>
          <td>{arrayOfExchanges.exchange[index]}</td>
          <td>1</td>
          <td>{arrayOfExchanges.currency[index]}</td>
        </tr>
      );
    });
  }
}

export default FetchData;
