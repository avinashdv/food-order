import React, { useContext, useEffect, useRef } from "react";
import classes from "./Cart.module.css";
import mealcontext from "../../store/mealContext";

const Cart = (props) => {
  const cartRef = useRef();
  const cartCtx = useContext(mealcontext);

  useEffect(() => {
    if (cartCtx.allOrders.orders.length) {
      cartRef.current.classList.add(classes.cartAnimation);
      const timer = setTimeout(() => {
        cartRef.current.classList.remove(classes.cartAnimation);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartCtx.allOrders]);

  return (
    <React.Fragment>
      <div ref={cartRef} className={classes.cart} onClick={props.onCartOpen}>
        <p>Your Cart</p>
        <p>{cartCtx.allOrders.orders.length}</p>
      </div>
    </React.Fragment>
  );
};

export default Cart;
