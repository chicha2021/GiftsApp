import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);
    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gift App</h1>
            {/* <AddCategory setCategories={ setCategories } /> */}
            <AddCategory onNewCategory={(newCategory) => addCategory(newCategory) } />

            <h2>Eze</h2>
            
            <ol>
                {
                    categories?.map((cat) => (
                       <GiftGrid key={cat} category={cat} />
                    ))
                }
            </ol>
        </>
    )
}