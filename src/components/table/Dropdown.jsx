import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

async function FetchExchange(
  to,
  options,
  setArrayOfExchanges,
  arrayOfExchanges
) {
  const controller = new AbortController();
  const signal = controller.signal;
  await fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=${to}&q=1.0`,
    options,
    {
      signal,
    }
  )
    .then((response) => response.json())
    .then((response) => {
      setArrayOfExchanges((prev) => ({
        ...prev,
        currency: [...arrayOfExchanges.currency, to],
        exchange: [...arrayOfExchanges.exchange, response],
        numberOfRows: arrayOfExchanges.numberOfRows + 1,
      }));
    })
    .catch((err) => console.error(err));
  console.log("Completed");
  return () => {
    controller.abort();
  };
}

function DropdownButton({ options, setArrayOfExchanges, arrayOfExchanges }) {
  const [array_of_currencies, setArray_of_currencies] = useState({
    value: [],
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    function removeUSD(response) {
      let cleanResponse = [];
      response.forEach((element) => {
        if (element !== "USD") {
          cleanResponse.push(element);
        }
      });
      console.log(cleanResponse);
      return cleanResponse;
    }
    if (true) {
      fetch("https://currency-exchange.p.rapidapi.com/listquotes", options, {
        signal,
      })
        .then((response) => response.json())
        .then((response) => {
          response = removeUSD(response); // Removes USD currency because it generates conflict if used in 2nd API
          setArray_of_currencies((prev) => ({
            ...prev,
            value: [response],
            loading: false,
          }));
        })
        .catch((err) => console.error(err));
    }

    return () => {
      controller.abort();
    };
  }, [options]);

  if (array_of_currencies.loading) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Add Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Loading Currencies</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Add Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {array_of_currencies.value[0].map((currency) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  FetchExchange(
                    e.target.innerText,
                    options,
                    setArrayOfExchanges,
                    arrayOfExchanges
                  );
                  console.log(e.target.innerText);
                }}
                key={currency}
              >
                {currency}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownButton;
