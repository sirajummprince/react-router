import logo from "./logo.svg";
import "./App.css";
import ProductList from "./ProductList";
import React, { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Loader from "./Loader";
import Error404 from "./Error404";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: `Product 1`,
      description: `Product 1 Description`,
      price: `$10`,
      category: `Category 1`,
    },
    {
      id: 2,
      name: `Product 2`,
      description: `Product 2 Description`,
      price: `$20`,
      category: `Category 2`,
    },
    {
      id: 3,
      name: `Product 3`,
      description: `Product 3 Description`,
      price: `$30`,
      category: `Category 3`,
    },
  ]);

  const [currentProduct, setCurrentProduct] = useState();

  const [loader, setLoader] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  // const selectProducts = (details) => {
  //   setCurrentProduct(details);
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1000);
  // };

  const backToList = () => {
    setCurrentProduct(null);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    history.push('/')
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Link to="/">Home Page</Link>
          <Link to="/ProductDetail">Product Details</Link>
          <Switch>
            <Route exact path="/">
              <ProductList products={products} />
            </Route>
            <Route exact path="/ProductDetail">
              <ProductDetail
                currentProduct={currentProduct}
                backToList={backToList}
              />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          {/* {!currentProduct ? (
            <ProductList products={products} selectProducts={selectProducts} />
          ) : (
            <ProductDetail
              currentProduct={currentProduct}
              backToList={backToList}
            />
          )} */}
        </>
      )}
    </div>
  );
}

export default App;
