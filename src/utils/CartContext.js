import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

// ----------------------------------------INCREASING CART COUNT AND PRICE---------------------------------------------------
  useEffect(() => {
    const cartCount = () => {
      const quantities = cart.map((item) => item.quantitiy);
      const sum = quantities.reduce((acc, curr) => acc + curr, 0);
      setCount(sum);
    };
    const cartTotalPrice = () => {
      const prices = cart.map((item) => item.quantitiy * item.price);
      const sum = prices.reduce((acc, curr) => acc + curr, 0);
      setTotalPrice(sum);
    };
    cartCount();
    cartTotalPrice();
  }, [cart]);

// ---------------------------------------ADD TO CART--------------------------------------------------

  const addToCart = (newProduct) => {
    const alreadyHave = cart.find((item) => item.id === newProduct.id);
    if (alreadyHave) {
      const updated = cart.filter((item) => {
        if (item.id === alreadyHave.id) {
          return { ...alreadyHave, quantitiy: alreadyHave.quantitiy++ };
        } else {
          return item;
        }
      });
      setCart(updated);
    } else {
      setCart([...cart, { ...newProduct, quantitiy: 1 }]);
    }
  };
// --------------------------------------DECREMENT FUNCTION-------------------------------------------
  const decrement = (product) => {
    console.log(product);
    if (product.quantitiy > 1) {
      const updated = cart.filter((item) => {
        if (item.id === product.id) {
          return { ...product, quantitiy: product.quantitiy-- };
        } else {
          return item;
        }
      });
      setCart(updated);
    }
  };
// ---------------------------------------INCREMENT FUNCTION-------------------------------------------
  const increment = (product) => {
    console.log(product);
    const updated = cart.filter((item) => {
      if (item.id === product.id) {
        console.log(item.quantitiy);
        return { ...product, quantitiy: product.quantitiy++ };
      } else {
        return item;
      }
    });
    setCart(updated);
  };

// -------------------------------------REMOVE FROM CART-----------------------------------------------
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  return (
    <CartContext.Provider
      value={{
        // states
        cart,
        setCart,
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        // functions
        addToCart,
        removeFromCart,
        decrement,
        increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
