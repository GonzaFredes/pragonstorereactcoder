import { createContext, useEffect, useState } from "react";
import { DB } from "../firebase/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [productsHome, setProductsHome] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [inCartAlert, setInCartAlert] = useState(0);

  const onAddCart = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si el producto está en el carrito, actualiza la cantidad
      const newCart = cartProducts.map((inCartItem) => {
        if (inCartItem.id === item.id) {
          return { ...item, quantity: inCartItem.quantity += quantity };
        } else {
          return inCartItem;
        }
      });
      setCartProducts(newCart);
      // Si está en el carrito, también actualiza la cantidad del cart widget alert con un pequeño circulo rojo
      setInCartAlert(inCartAlert + quantity);
    } else {
      // lista de productos en el carro
      setCartProducts([...cartProducts, { ...item, quantity }]);
      // Suma 1 para mostrar en cartWidget.jsx
      setInCartAlert(inCartAlert + quantity);
    }
  };

  // Chequea si la id de los productos son las mismas
  const isInCart = (id) => cartProducts.find((item) => item.id === id);

  const emptyCart = () => {
    setCartProducts([]);
    setInCartAlert(0);
  };

  const removeItem = (id, quantity) => {
    const newCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newCart);
    setInCartAlert(inCartAlert - quantity);

    // Setea el valor de cart widget si cartProducts es 0
    if (cartProducts.length === 1) {
      setInCartAlert(0);
      return;
    } else {
      return
    }
  };

  const totalPrice = () => {
    let acc = 0;
    for (const item of cartProducts) {
      acc += item.quantity * item.precio;
    }
    return acc;
  };

  const isLoading = (param) => {
    setLoading(param);
  };

  // Promesa para productos del home
  useEffect(() => {
    isLoading(true);
    const productsCollection = collection(DB, "products");
    getDocs(productsCollection)
      .then((res) => {
        const products = res.docs.map((item) => {
          
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setProductsHome(products);
      })
      .catch((error) => console.error(error))
      .finally(() => isLoading(false));
  }, []);

  // para que muestre en el home menos de 6 productos de los mas comprados.
  const productsHomeFilter = productsHome.filter(
    (prodsHome) =>
      prodsHome.precio > 400 && prodsHome.precio <= 1000 && prodsHome.stock > 1
  );

  return (
    <AppContext.Provider
      value={{
        loading,
        isLoading,
        productsHomeFilter,
        onAddCart,
        cartProducts,
        emptyCart,
        removeItem,
        totalPrice,
        inCartAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
