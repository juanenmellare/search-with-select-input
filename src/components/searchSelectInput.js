import React from "react";

const SearchSelectInput = ({ options, setSelectedOption }) => {
  const [input, setInput] = React.useState("");

  const onChange = ({ target: { value } }) => {
    setInput(value);
  };

  const findOptionByValue = (candidateValue) =>
    options.find(
      ({ value }) => candidateValue.toLowerCase() === value.toLowerCase()
    );

  const onSelect = ({ target: { value } }) => {
    const optionSelected = findOptionByValue(value);
    if (optionSelected) {
      setSelectedOption(optionSelected);
      setInput(optionSelected.value);
    }
  };

  const onBlur = ({ target: { value } }) => {
    const optionSelected = findOptionByValue(value);
    if (!optionSelected) {
      setInput("");
      setSelectedOption(null);
    }
  };

  return (
    <div>
      <input
        list="items"
        value={input}
        onSelect={onSelect}
        onChange={onChange}
        onBlur={onBlur}
      />
      <datalist id="items">
        {options.map(({ id, value }) => (
          <option key={id} value={value} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchSelectInput;
