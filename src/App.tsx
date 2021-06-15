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
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    date: "",
  });

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setFilteredProducts(res.data);
    setLoading(false);
  };

  // handle page
  const handlePage = (number: number) => {
    setCurrentPage(number);
  };

  // handle add to cart
  const handleCart = (id: number) => {
    console.log(id)
    const cartProduct = products.find((product) => {
      return product.id === id;
    });
    if (!cartProduct) {
      return;
    }
    const cartItems = [cartProduct, ...cart];
    setCart(cartItems);
  };
  // handle filters
  const handleFilters = (newFilter: {
    category: string;
    search: string;
    date: string;
    order?: string;
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
    console.log(value);
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
  };
  // get current posts
  const indexOfLastProduct = currentPage * propductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - propductsPerPage;
  const currentList = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Filter
          handleSearch={handleSearch}
          handleSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
          handleOrderChange={handleOrderChange}
        />
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
              <h2 className="emptycart-text">
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
