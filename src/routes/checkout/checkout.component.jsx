import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  const increaseItemCount = () => addItemToCart();
  return (
    <div>
      <h1>I am the Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
