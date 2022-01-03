import classes from "./MealItem.module.css";
import MealInput from "./MealIntput";

const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <div className={classes.mealItem}>
      <div className={classes.mealAbout}>
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealInput id={props.id} />
    </div>
  );
};

export default MealItem;
