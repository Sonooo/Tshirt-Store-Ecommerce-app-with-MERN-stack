import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./PaymentB";


const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setreload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = products => {
        return (
            <div>
                <h2>this selection is to load products</h2>
                {
                    products.map((product, index) => (
                        <Card
                            key={index}
                            product={product}
                            removeFromCart={true}
                            addtoCart={false}
                            setreload={setreload}
                            reload={reload}
                        />
                    ))
                }
            </div>
        )
    }


    const loadCheckout = () => {
        return (
            <div>
                <h2>this selection for checkouts</h2>
            </div>
        )
    }




    return (
        <Base title="Cart Page" description="Ready to CheckOut" className="text-dark">
            <div className="row  text-center">
                <div className="col-md-6 mb-4">{

                    products.length > 0 ? loadAllProducts(products) : <h1> No products in Cart  </h1>


                }</div>
                <div className="col-md-6 mb-4"> <Paymentb products={products} setreload={setreload} /> </div>

            </div>
        </Base>
    );
}



export default Cart;