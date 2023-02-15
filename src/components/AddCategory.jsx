import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onChangeEvent = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue);
        setInputValue("");
    };

    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type={"text"}
                placeholder={"Buscar Gifs"}
                value={inputValue}
                onChange={onChangeEvent}
            />
        </form>
    )
};