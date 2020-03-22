import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const ProductList = props => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/`).then(res => {
            console.log(res);
            setProductList(res.data.products);
        });
    }, []);

    return (
        <div>
            {productList ? (
                productList.map((product, i) => ( 
                    <Link to={`/product/${product._id}`} key={i}>
                        <p>
                            {product.title}, ${product.price}, {" "}
                            {product.desc.substring(0,20)}
                        </p>
                    </Link>
                ))
            ): (
                <div>Loading</div>
            )}
        </div>
    );
};

export default ProductList;
