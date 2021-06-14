import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Filter from "./components/filter/components/Filter";
import Home from "./components/home/components/Home";
import Cart from "./components/cart/components/Cart";
import PaginationBtn from "./components/pagination/PaginationBtn";
import axios from "axios";
import "./App.scss";
import { IProduct } from "./components/common/types";

// eslint-disable-next-line no-empty-pattern
const App = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [propductsPerPage] = useState<number>(9);

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setLoading(false);
  };

  // get current posts
  const indexOfLastProduct = currentPage * propductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - propductsPerPage;
  const currentList = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  // handle page
  const handlePage = (number: number) => {
    setCurrentPage(number);
  };

  // handle add to cart
  const handleCart = (id: number) => {
    const cartProduct = products.find((product) => {
      return product.id === id;
    });
    if (!cartProduct) {
      return;
    }
    const cartItems = [cartProduct, ...cart];
    setCart(cartItems);
  };

  // handle remove from cart
  const handleRemovefromCart = (id: number) => {
   const filteredCartProduct = cart.filter((product)=>{
     return product.id !== id
   });
   setCart(filteredCartProduct)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <Router>
      <div className="container">
        <Header />
        <Filter />
        <Switch>
          <Route exact path="/">
            {loading || !currentList ? (
              <p>Loading...</p>
            ) : (
              <div className="product-container">
                {currentList.map((product) => {
                  return (
                    <Home
                      key={product.id}
                      productcard={product}
                      handleCart={handleCart}
                    />
                  );
                })}
              </div>
            )}
          </Route>
          <Route exact path="/cart">
            {cart.length === 0 ? (
              <h2 className='emptycart-text'>
                Nothing in Cart <Link to="/">Start Shopping</Link>
              </h2>
            ) : (
              <div className="product-container">
                {cart.map((product) => {
                  return (
                    <Cart
                      cartProducts={product}
                      key={product.id}
                      handleRemovefromCart={handleRemovefromCart}
                    />
                  );
                })}
              </div>
            )}
          </Route>
        </Switch>
        <PaginationBtn
          productsPerPage={propductsPerPage}
          totalProducts={products?.length}
          handlePage={handlePage}
        />
      </div>
    </Router>
  );
};

export default App;
