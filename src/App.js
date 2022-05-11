import React from "react";
import SearchSelectInput from "./components/searchSelectInput";
import "./styles.css";

export default function App() {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [users] = React.useState([
    { id: "1", value: "Juan" },
    { id: "2", value: "Choco" },
    { id: "3", value: "Marian" },
    { id: "4", value: "Santi" }
  ]);

  React.useEffect(() => {
    if (selectedOption) {
      console.log(
        `fetch by user id => any-endpoint?userId=${selectedOption.id}`
      );
    }
  }, [selectedOption]);

  return (
    <div className="App">
      <h1>Search with Select Input</h1>
      <h2>Example</h2>
      <SearchSelectInput
        options={users}
        setSelectedOption={setSelectedOption}
      />
      <br />
      <h3>{selectedOption && JSON.stringify(selectedOption)}</h3>
    </div>
  );
}
