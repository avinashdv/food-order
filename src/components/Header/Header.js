import classes from "./Header.module.css";
import Cart from "../Cart/Cart";
import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactOrganicMeals</h1>
        <img
          src="https://www.pinclipart.com/picdir/middle/79-792502_leave-vector-single-png-transparent-download-organic-food.png"
          alt="Leaf"
          className={classes.organicImg}
        />
        <Cart onCartOpen={props.onCartOpen} />
      </div>
      <div className={classes.img}>
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/8/90038/ba0ace0f3ce2794fbd54cc762ea3de8f_o2_featured_v2.jpg"
          alt="Delicious food on the table."
        />
      </div>
      <div className={classes.about}>
        <h1>Delicious Food. Delivered To You.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          laudantium totam debitis officiis quia iste voluptates rerum aliquid
          quibusdam necessitatibus deleniti, aliquam atque voluptatibus incidunt
          recusandae neque vero. Ipsum, quas.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
