import { useState } from "react";
import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartItem from "./components/Cart/CartItem";
import { MealContextProvider } from "./store/mealContext";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartOpenHandler = () => {
    console.log("modal clicked");
    setCartIsVisible(true);
  };

  const cartCloseHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <MealContextProvider>
      {cartIsVisible && <CartItem onCartClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <AvailableMeals />
    </MealContextProvider>
  );
}

export default App;
