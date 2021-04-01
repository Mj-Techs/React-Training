import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Cart,
  Counter,
  Product,
  ProductList,
  Simple,
  UserInfo,
} from "./components";
import { ISeller, productInfo, sellerInfo } from "./data/ProductInfo";
import { ProductDetail } from "./components/ProductDetail";

export const sellerContext = createContext<ISeller>(sellerInfo);

function App() {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
  const [cartProduct, setCartProduct] = useState<Array<any>>([]);
  const [productList, setProductList] = useState<Array<any>>([]);

  const addToCart = (product) => {
    console.log(product);
    setCartProduct([...cartProduct, product]);
  };

  const updateTitle = (data) => {
    console.log("data >>", data);
  };

  useEffect(() => {
    setProductList(productInfo);
  });
  return (
    <div className="App">
      React Application
      {/* <div> <Counter /> </div>
      <div>
        <button type="button" onClick={() => setIsDisplayed((x) => !x)}>
          Toggle
        </button>
      </div>
      <div id="user-info">
        {isDisplayed && <UserInfo lastLogin={"some date"} />}
      </div> */}
      {/* <div>
        <Simple name="Hi Mrityunjay" />
        <Simple name="Training" age={20} />
      </div> */}
      {/* <div>
        <Product title="pen" price={20}>
          Description of Product Image of Product
        </Product>
      </div> */}
      {/* <div>
        <ProductList
          list={productList}
          addtocart={addToCart}
          updateTitle={updateTitle}
        />
      </div> */}
      {/* <div>
        <Product
          id={4}
          title="New Product"
          price={404}
          addtocart={addToCart}
          updateTitle={updateTitle}
        />
      </div> */}
      {/* <div>
        <Cart list={cartProduct} />
      </div> */}
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Counter} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/product/:id" component={ProductDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
