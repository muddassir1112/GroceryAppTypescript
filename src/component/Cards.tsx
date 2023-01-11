import React, { useContext, useState } from "react";
import { ProdContext } from "../App";
import "../App.css";
import { products } from "../data";

export const Cards = () => {
  const [tempProd, setTempProd] = useState(products);
  const data: any = useContext(ProdContext as any);
  // function to add product to the cart
  const handleAddToCart = (id: any) => {
    console.log(id.target.value);
    tempProd.forEach((ele) => {
      if (ele._id === id.target.value) {
        if (ele.quantity < 1) {
          /*Quantity Checked */
          ele.quantity += 1;
          data.productDetails.push(ele);
          data.setProductDetails([...data.productDetails]);
        } else {
          ele.quantity += 1;
        }
      }
    });
  };
  return (
    <div className="product_container">
      {tempProd.map((ele) => (
        <div
          className="card card_hover"
          style={{ width: "18rem", marginBottom: "1%" }}
        >
          <img src={ele.images} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={{ height: "78px" }}>
              {ele.title}
            </li>
            <li className="list-group-item">{`Brand: ${ele.brand}`}</li>
            <li className="list-group-item">{`Category: ${ele.category}`}</li>
            <li className="list-group-item"> {`₹ ${ele.price}`} </li>
          </ul>
          <div className="card-body">
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#008545",
                  borderRadius: "0px",
                  border: "none",
                }}
                type="button"
                value={ele._id}
                onClick={handleAddToCart}
              >
                <i className="fa fa-shopping-cart"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
