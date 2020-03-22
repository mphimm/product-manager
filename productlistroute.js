import React from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const ProductListRoute = () => {
    return (
        <React.Fragment>
            <ProductForm />
            <hr />
            <ProductList />
        </React.Fragment>
    );
};

export default ProductListRoute;
