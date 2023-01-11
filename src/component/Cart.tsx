import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProdContext } from "../App";
import "../App.css";

export const Cart = () => {
  let confirm;
  const [price, setPrice] = useState(0); //state for price to display
  const data: any = useContext(ProdContext as any);
  const navigate = useNavigate();
  console.log(data.productDetails);
  /* Quantity Increament Function */
  const QuantityIncreament = (id: any) => {
    let temp: number = 0;
    data.productDetails.forEach((ele: any) => {
      if (ele._id === id) {
        ele.quantity += 1;
        /* Method to calculate the price */
        temp += ele.quantity * ele.price;
        setPrice(temp);
        data.setProductDetails([...data.productDetails]);
      }
    });
  };
  // Quantity Decreament Function
  const QuantityDecreament = (id: any) => {
    let temp: number = 0;
    for (var i = 0; i < data.productDetails.length; i++) {
      if (data.productDetails[i]._id === id) {
        data.productDetails[i].quantity -= 1;
        temp +=
          price -
          data.productDetails[i].quantity * data.productDetails[i].price;
        setPrice(temp);
        if (data.productDetails[i].quantity < 1) {
          confirm = window.confirm("Your item will be lost are you sure?");
          if (confirm === true) {
            data.productDetails.splice(i, 1);
            data.setProductDetails([...data.productDetails]);
          }
        }
      }
    }
  };
  /* Delete product from the cart table Function */
  const deleteProduct = (id: any) => {
    let temp = 0;
    let confirm = window.confirm("Are you sure ?");
    for (var i = 0; i < data.productDetails.length; i++) {
      if (confirm === true) {
        if (data.productDetails[i]._id === id) {
          temp +=
            price -
            data.productDetails[i].price * data.productDetails[i].quantity;
          setPrice(temp);
          data.productDetails.splice(i, 1);
          data.setProductDetails([...data.productDetails]);
        }
      } else if (confirm === false) {
        setPrice(price);
        data.setProductDetails([...data.setProductDetails]);
      }
    }
  };
  /*Empty Cart Function */
  const emptyCart = () => {
    confirm = window.confirm("Your product will be lost are you sure ?");
    if (confirm === true) {
      data.productDetails.splice(0, data.productDetails.length);
      setPrice(0);
      data.setProductDetails([...data.productDetails]);
    }
  };
  //function to checkout
  const handleCheckout = () => {
    if (data.productDetails.length === 0) {
      alert("Please Add Products in your cart");
      navigate("/");
    } else {
      alert("Thank You for shopping");
      data.setProductDetails([]);
      navigate("/");
    }
  };
  // function to logout
  const handleLogOut = () => {
    confirm = window.confirm("Your all progress will be lost are you sure?");
    if (confirm === true) {
      data.setProductDetails([]);
      data.setLoggedIn(false);
      navigate("/");
    }
  };
  // useEffect Hook used to display the price
  useEffect(() => {
    let temp = 0;
    data.productDetails.forEach((ele: any) => {
      temp += ele.quantity * ele.price;
    });
    setPrice(temp);
  }, [price]);
  return (
    <div className="cart_container">
      <table id="customers">
        <tbody>
          <tr>
            <th>ITEMS IN YOUR CART</th>
            <th>SPAR UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>ACTION</th>
          </tr>
          {data.productDetails.map((ele: any) => (
            <tr>
              <td>{ele.title}</td>
              <td>{`₹ ${ele.price}`}</td>
              <td>
                <button
                  className="btn rounded-pill"
                  onClick={() => QuantityIncreament(ele._id)}
                  style={{ borderColor: "green", color: "green" }}
                >
                  +
                </button>
                <span style={{ color: "green" }}>
                  &nbsp;{ele.quantity}&nbsp;
                </span>
                <button
                  className="btn rounded-pill"
                  onClick={() => QuantityDecreament(ele._id)}
                  style={{ borderColor: "green", color: "green" }}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteProduct(ele._id)}
                  style={{ border: "none" }}
                >
                  <i
                    className="fas fa fa-trash-alt"
                    style={{ fontSize: "25px", color: "red" }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button className="btn btn-secondary" onClick={emptyCart}>
                Empty Cart
              </button>
            </td>
            <td colSpan={1}>
              Total Amount: ₹ <span style={{ color: "red" }}>{price}</span>
            </td>
            <td colSpan={1}>
              <button className="btn btn-secondary" onClick={handleCheckout}>
                Continue Shopping
              </button>
            </td>
            <td colSpan={1}>
              <button onClick={handleLogOut} className="btn btn-danger">
                Logout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
