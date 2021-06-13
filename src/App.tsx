import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Filter from "./components/filter/components/Filter";
import Home from "./components/home/components/Home";
import Cart from "./components/cart/components/Cart";
import PaginationBtn from "./components/pagination/PaginationBtn";
import axios from "axios";
import "./App.scss";

// eslint-disable-next-line no-empty-pattern
const App = (): JSX.Element => {
  const [products, setProducts] = useState<[] | null>(null);
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
  const handlePage = (number:number) => {
    setCurrentPage(number)
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
                {currentList.map((product, index) => {
                  return <Home key={index} productcard={product} />;
                })}
              </div>
            )}
          </Route>
          <Route exact path="/cart">
            <Cart />
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
