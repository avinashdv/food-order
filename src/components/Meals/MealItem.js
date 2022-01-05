import classes from "./MealItem.module.css";
import MealInput from "./MealIntput";
import mealcontext from "../../store/mealContext";

const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <div className={classes.mealItem}>
      <div className={classes.mealAbout}>
        <div
          className={classes["meal-image"]}
          style={{
            background: `url(${props.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={classes["meal-details"]}>
          <h3>{props.name}</h3>
          <p>{props.about}</p>
          <p className={classes.price}>{price}</p>
        </div>
      </div>
      <MealInput id={props.id} />
    </div>
  );
};

export default MealItem;
