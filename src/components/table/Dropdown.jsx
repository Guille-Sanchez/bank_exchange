import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function BasicExample({ options }) {
  const [array_of_currencies, setArray_of_currencies] = useState({
    value: [],
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (true) {
      fetch("https://currency-exchange.p.rapidapi.com/listquotes", options, {
        signal,
      })
        .then((response) => response.json())
        .then((response) => {
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
          Dropdown Button
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
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {array_of_currencies.value[0].map((currency) => {
            return (
              <Dropdown.Item href="#/action-1" key={currency}>
                {currency}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default BasicExample;
