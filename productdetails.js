import React, { useEffect,useState } from "react";
import axios from "axios";

const ProductDetails = props => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                console.log(res)
                setProduct(res.data);
            })
            .catch(error =>
                console.log(
                    "Something went wrong in product details...",
                     error
            )
        );
    }, []);
    
    return(
        <div>
        {product !== null? (
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.desc}</p>
            </div>
        ): (
            <div>...Loading</div>
        )}
        </div>
    );
};

export default ProductDetails;
