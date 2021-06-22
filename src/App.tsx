import React, { useEffect, useState } from "react";
import { FirebaseContext } from "./components/firebase";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Filter from "./components/filter/components/Filter";
import Home from "./components/home/components/Home";
import Cart from "./components/cart/components/Cart";
import PaginationBtn from "./components/pagination/PaginationBtn";
import Landing from "./components/landing/components/Landing";
import Signup from "./components/validation/Signup";
import Signin from "./components/validation/Signin";
import axios from "axios";
import "./App.scss";
import { IProduct } from "./components/common/types";
import PaypalBtn from "./components/paypal/Paypal";

// eslint-disable-next-line no-empty-pattern
const App = (): JSX.Element => {
  const myStorage = window.localStorage;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>(() => {
    const savedCart = myStorage.getItem("savedCart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });
  const [disabled, setDisabled] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [propductsPerPage] = useState<number>(9);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    order: "",
  });

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setFilteredProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    myStorage.setItem("savedCart", JSON.stringify(cart));
  }, [cart, myStorage]);
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
    if (!disabled.includes(id)) {
      setDisabled([id, ...disabled]);
    }

    const cartItems = [cartProduct, ...cart];
    setCart(cartItems);
  };
  // handle filters
  const handleFilters = (newFilter: {
    category: string;
    search: string;
    order: string;
  }) => {
    let isFilteredProducts = products;

    //default
    // eslint-disable-next-line eqeqeq
    if (newFilter.order == "default" && newFilter.category == "default") {
      isFilteredProducts = products;
      setFilteredProducts(isFilteredProducts);
      return;
    }
    //order
    if (newFilter.order) {
      switch (newFilter.order) {
        case "low":
          isFilteredProducts = isFilteredProducts.sort(
            (a, b) => +a.price - +b.price
          );
          break;
        case "high":
          isFilteredProducts = isFilteredProducts.sort(
            (a, b) => Number(b.price) - Number(a.price)
          );
          break;
        default:
          isFilteredProducts = products;
          break;
      }
    }

    // category
    if (newFilter.category) {
      isFilteredProducts = isFilteredProducts.filter((product) => {
        return product.title.includes(newFilter.category);
      });
    }

    //search
    if (newFilter.search) {
      isFilteredProducts = isFilteredProducts.filter((product) => {
        return `${product.title} ${product.price} ${product.description}`
          .toLowerCase()
          .includes(newFilter.search);
      });
    }
    setFilteredProducts(isFilteredProducts);
  };

  // handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newFilter = { ...filters, category: value };
    setFilters(newFilter);
    handleFilters(newFilter);
  };

  // handle order change
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newFilter = { ...filters, order: value };
    setFilters(newFilter);
    handleFilters(newFilter);
  };

  //handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
  };

  // handle search
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFilter = { ...filters, search: searchValue };
    setFilters(newFilter);
    handleFilters(newFilter);
  };

  // handle remove from cart
  const handleRemovefromCart = (id: number) => {
    const filteredCartProduct = cart.filter((product) => {
      return product.id !== id;
    });
    setCart(filteredCartProduct);
    const newDisableds = disabled.filter((d) => {
      // eslint-disable-next-line eqeqeq
      return d != id;
    });
    setDisabled(newDisableds);
  };
  // get current posts
  const indexOfLastProduct = currentPage * propductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - propductsPerPage;
  const currentList = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <Router>
      <div className="container">
        <Header cartCounter={cart.length} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Filter
              handleSearch={handleSearch}
              handleSearchChange={handleSearchChange}
              handleCategoryChange={handleCategoryChange}
              handleOrderChange={handleOrderChange}
            />
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
                      disabled={disabled}
                    />
                  );
                })}
              </div>
            )}
            <PaginationBtn
              productsPerPage={propductsPerPage}
              totalProducts={products?.length}
              handlePage={handlePage}
            />
          </Route>
          <Route exact path="/cart">
            {cart.length === 0 ? (
              <h2 className="emptycart-text">
                Nothing in Cart <Link to="/home">Start Shopping</Link>
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
            {cart.length ? (
              <Link to="/payment" className="btn--chkout">
                <button className=" btn btn--chkout">
                  Proceed to Checkout
                </button>
              </Link>
            ) : (
              ""
            )}
          </Route>
          <Route exact path="/signup">
            <FirebaseContext.Consumer>
              {(firebase) => <Signup firebase={firebase} />}
            </FirebaseContext.Consumer>
          </Route>
          <Route exact path="/signin">
            <FirebaseContext.Consumer>
              {(firebase) => <Signin firebase={firebase} />}
            </FirebaseContext.Consumer>
          </Route>
          <Route exact path="/payment">
            <PaypalBtn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
