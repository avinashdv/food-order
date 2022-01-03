import { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import mealcontext from "../../store/mealContext";

const AvailableMeals = () => {
  const mealCtx = useContext(mealcontext);

  const mealsList = mealCtx.availableMeals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        about={meal.about}
        price={meal.price}
      />
    );
  });

  return (
    <div className={classes.availableMeals}>
      <Card>{mealsList}</Card>
    </div>
  );
};

export default AvailableMeals;
