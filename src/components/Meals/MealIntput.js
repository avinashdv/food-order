import { useContext, useRef } from "react";
import classes from "./MealInput.module.css";
import Input from "../UI/Input/Input";
import mealContext from "../../store/mealContext";

const MealInput = (props) => {
  const mealInputRef = useRef();

  const orderCtx = useContext(mealContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const itemAmount = mealInputRef.current.value;
    if (!itemAmount) {
      return;
    }
    orderCtx.addOrderHandler({ id: props.id, amount: itemAmount });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        data={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          label: "Amount",
        }}
        ref={mealInputRef}
      />
      <button className={classes.addBtn}>Add</button>
    </form>
  );
};

export default MealInput;
