import React, { useState } from "react";
import axios from "axios";


const InitialForm = {
    title: "",
    price: "",
    desc: "",
    submitted: false
};

const ProductForm = props => {
    const [formState, setFormState ] = useState(InitialForm);

    const onChangeHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

const onSubmitHandler = e => {
    console.log("Items have been submitted!!!")
    e.preventDefault();

    setFormState({
        ...InitialForm,
        submitted: true
    });

    axios
        .post("http://localhost:8000/api/product/new", {
            title: formstate.title,
            price: formstate.price,
            desc: formstate.desc
        })
        .then(newProductData => console.log(newProductData))
        .catch(error => console.log("Something is wrong", error));
};

return (
    <div>
        {formState.submitted && "Your product has been submitted!"}
        <form onSubmit={onSubmitHandler}>
            <br />
            <label>Title:  
                <input
                 type="text" 
                 name="title" 
                 onChange={onChangeHandler}
                 value={formState.title}
                />
            </label>
            <br />
            {formState.title.length > 0 && formState.title.length < 2 && (
                <span>Must be at least 2 characters!</span>
            )}
            <label>
                Price: 
                <input
                 type="number" 
                 name="price"
                onChange={onChangeHandler} 
                value={formState.price}
                />
            </label>
            <br />
            {isNaN(formState.price) && <span>Price must be a number</span>}
            <label>
                Description: 
                <textarea
                    type="text"
                    name="desc"
                    onChange={onChangeHandler}
                    value= {formState.desc}
                ></textarea>
            </label>
            <br />
            {formState.desc.length > 0 &&
                formState.desc.length < 10 && (
                    <span>Description must be 10 characters or more</span>
                )} 
            <button type="submit">Add Product</button>
        </form>

        <div>
            <p>
                <span>Title: {formstate.title}</span>
            </p>
            <p>
                <span>Price: {formstate.price}</span>
            </p>
            <p>
                <span>Description: {formstate.desc}</span>
            </p>
        </div>
    </div>
);

};

export default ProductForm;
