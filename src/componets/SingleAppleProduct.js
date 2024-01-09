import React, { useState, useEffect } from "react";
import Four04 from "./Four04";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
    let [product, setProduct] = useState([]);
    // console.log(useParams());
    const { productName } = useParams();
    // console.log(productName);
    useEffect(() => {
        fetch("http://localhost:2020/iphones")
            .then((res) => res.json())
            .then((data) => {
                const productList = data.products;
                // console.log(productList);
                const SingleProduct = productList.filter(
                    (product) =>
                        product.product_url.trim().toLowerCase() ===
                        productName.trim().toLowerCase()
                );
                setProduct(SingleProduct);
            })
            .catch((error) => console.log("Error:unbale to fetch "));
    }, [productName]);
    console.log(product);

    if (product.length) {
        return (
            <div className="text-center container">
                <div className="title-wrapper text-center het">
                    {product.product_name}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                {product?.map((product, index) => {
                    let productDiv = (
                        <div className="row h-100" key={index}>
                            <div
                                className={`col-12 col-md my-auto order-${
                                    index % 2 === 0 ? "1" : "2"
                                }`}
                            >
                                <div className="description-wrapper">
                                    {product.product_brief_description}
                                    <br />
                                    {product.price_range}
                                </div>
                            </div>
                            <div
                                className={`col-12 col-md my-auto order-${
                                    index % 2 === 0 ? "2" : "1"
                                }`}
                            >
                                <div>
                                    <img src={product.product_image} />
                                </div>
                            </div>
                        </div>
                    );
                    return productDiv;
                })}
            </div>
        );
    } else {
        <br />;
        // return <Four04 />;
    }
}
export default SingleAppleProduct;
