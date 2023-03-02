import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeEvent = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setCategories( categories => [inputValue, ...categories]);
    if (inputValue.length === 0) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type={"text"}
        placeholder={"Buscar Gifs"}
        value={inputValue}
        onChange={onChangeEvent}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
