import React, { useReducer, useRef } from "react";

const mealcontext = React.createContext({
  availableMeals: [],
  allOrders: [],
  mealSubmitHandler: () => {},
  addOrderHandler: () => {},
  removeOrderHandler: () => {},
});

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mysore Bonda",
    price: 25,
    about: "4 Hot and crispy Bonda",
  },
  {
    id: "m2",
    name: "Poori",
    price: 30,
    about: "2 Hot and Indian Bread served with curry",
  },
  {
    id: "m3",
    name: "Dosa",
    price: 20,
    about: "1 Big round dosa",
  },
  {
    id: "m4",
    name: "Idly",
    price: 20,
    about: "4 round and white idly",
  },
];

const orderReducer = (state, action) => {
  if (action.type === "ADD_ORDER") {
    const existingOrder = state.orders.find(
      (order) => order.id === action.order.id
    );
    if (existingOrder) {
      let updatedOrders;
      existingOrder.amount =
        parseInt(existingOrder.amount) + parseInt(action.order.amount);

      updatedOrders = state.orders.map((order) => {
        if (order.id === existingOrder.id) {
          return existingOrder;
        } else {
          return order;
        }
      });

      const totalAmount = updatedOrders
        .reduce((res, order) => res + order.price * order.amount, 0)
        .toFixed(2);
      return {
        orders: updatedOrders,
        totalAmount: totalAmount,
      };
    } else {
      const mealFound = DUMMY_MEALS.find((meal) => meal.id === action.order.id);
      const allOrders = state.orders.concat({
        ...mealFound,
        amount: action.order.amount,
      });
      const totalAmount = allOrders
        .reduce((res, order) => res + order.price * order.amount, 0)
        .toFixed(2);
      return {
        orders: allOrders,
        totalAmount: totalAmount,
      };
    }
  }

  if (action.type === "REMOVE_ORDER") {
    const existingOrder = state.orders.find(
      (order) => order.id === action.orderId
    );
    let totalAmount;

    if (parseInt(existingOrder.amount) === 1) {
      const filteredOrders = state.orders.filter(
        (order) => order.id !== action.orderId
      );
      totalAmount = filteredOrders.reduce(
        (res, order) => res + order.price * order.amount,
        0
      );
      return {
        orders: filteredOrders,
        totalAmount: totalAmount,
      };
    }

    existingOrder.amount = parseInt(existingOrder.amount) - 1;

    let updatedOrders = state.orders.map((order) => {
      if (order.id === existingOrder.id) {
        return existingOrder;
      } else {
        return order;
      }
    });

    totalAmount = updatedOrders.reduce(
      (res, order) => res + order.price * order.amount,
      0
    );

    return {
      orders: updatedOrders,
      totalAmount: totalAmount,
    };
  }

  return {
    orders: [],
    totalAmount: 0,
  };
};

export const MealContextProvider = (props) => {
  const [allOrders, dispatchOrder] = useReducer(orderReducer, {
    orders: [],
    totalAmount: 0,
  });

  const addOrderHandler = (order) => {
    console.log(order);
    dispatchOrder({
      type: "ADD_ORDER",
      order: order,
    });
  };

  const removeOrderHandler = (order) => {
    console.log(order);
    dispatchOrder({
      type: "REMOVE_ORDER",
      orderId: order.id,
    });
  };

  return (
    <mealcontext.Provider
      value={{
        availableMeals: DUMMY_MEALS,
        allOrders: allOrders,
        addOrderHandler: addOrderHandler,
        removeOrderHandler: removeOrderHandler,
      }}
    >
      {props.children}
    </mealcontext.Provider>
  );
};

export default mealcontext;
