import { useContext } from "react";
import React from "react";
import classes from "./CartItem.module.css";
import mealcontext from "../../store/mealContext";
import Modal from "../UI/Modal/Modal";

const CartItem = (props) => {
  const orderCtx = useContext(mealcontext);

  const addItemHandler = (id) => {
    orderCtx.addOrderHandler({ id: id, amount: 1 });
  };

  const removeItemHandler = (id) => {
    orderCtx.removeOrderHandler({ id: id });
  };

  const orderList = orderCtx.allOrders.orders.map((order) => {
    return (
      <div key={order.id} className={classes.item}>
        <div className={classes["item-about"]}>
          <h3>{order.name}</h3>
          <div className={classes["item-about-details"]}>
            <p>₹ {order.price}</p>
            <p>x{order.amount}</p>
          </div>
        </div>
        <div className={classes["item-changes"]}>
          <button
            onClick={() => {
              addItemHandler(order.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              removeItemHandler(order.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <Modal onClose={props.onCartClose}>
        {/* <div className={classes.modal}>
          <Card className={classes.additionalContent}> */}
        {orderList}
        <div className={classes.total}>
          <h3>Total Amount:</h3>
          <span className={classes.totalAmt}>
            <h3>₹{orderCtx.allOrders.totalAmount}</h3>
          </span>
        </div>

        <div className={classes["action-buttons"]}>
          {orderCtx.allOrders.orders.length > 0 ? (
            <button className={classes.active}>Order</button>
          ) : (
            ""
          )}
          <button className={classes.inactive} onClick={props.onCartClose}>
            Close
          </button>
        </div>
        {/* </Card>
        </div> */}
      </Modal>
    </React.Fragment>
  );
};

export default CartItem;
