import React from "react";
import { useState } from "react";
import "../assets/Styles/pos.css";
import axios from "axios";
import { useEffect } from "react";

const Pos = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [Total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find(
      (item) => item.ProductID === product.ProductID
    );

    if (existingCartItem) {
      const newCart = [...cartItems];
      const index = newCart.findIndex(
        (item) => item.ProductID === product.ProductID
      );
      newCart[index].quantity++;
      setCartItems(newCart);
      const newTotal = Total + Number(product.ProductUnitPrice);
      console.log(" mao ni new total", newTotal);
      setTotal(newTotal);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const adjustQuantity = (index, newQuantity) => {
    const newCart = [...cartItems];
    newCart[index].quantity = newQuantity;
    setCartItems(newCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.ProductUnitPrice * item.quantity,
      0
    );
  };
  const imageurl = "https://gisupport.org/uploads/Products/";
  const [searchdata, setSearchdata] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://gisupport.org/backend/ViewAllProducts.php",
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = products.filter((value) => {
      return (
        value.ProductID.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.ProductName.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.ProductDescription.toLowerCase().includes(
          searchWord.toLowerCase()
        ) ||
        value.ProductAddedBy.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.ProductUnitPrice.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setSearchdata(newFilter);
    console.log("this is the searchword:", searchWord);

    console.log("this is the new filter: ", newFilter[0]);
  };

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center ">
        <img
          src="fcodes logo.png"
          style={{ width: "200px", borderRadius: "50%" }}
        />
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-lg-5  d-flex  ">
          <h2>Product List</h2>
        </div>

        <div
          className="col-lg-5 d-flex  d-flex "
          style={{
            minWidth: "300px",
            height: "5rem",
          }}
        >
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-button"
            onChange={handleFilter}
          />
        </div>
      </div>
      {/* <div className="row align-items-center rounded">
        <input
          type="text"
          placeholder="Search Product"
          className="prompt "
          onChange={handleFilter}
        />
      </div> */}

      <div className="row mt-5 pt-5 tablewrapper">
        <table className="table tableMain custom-table">
          <thead>
            <tr
              className="mt-5 imbacode"
              style={{ backgroundColor: "#ffffff" }}
            >
              <th>Image</th>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {searchdata.length == 0 ? (
              <>
                {products.map((product) => (
                  <tr className="trbody" key={product.ProductID}>
                    <td>
                      <img
                        className="ProductImage"
                        src={imageurl + product.ProductImgUrl}
                        width={70}
                        height={70}
                      />
                    </td>
                    {/* <td>{product.ProductID}</td> */}
                    <td>{product.ProductName}</td>
                    <td>{product.ProductUnitPrice} php</td>
                    <td>{product.ProductAvailability}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#000000",
                            color: "#ffffff",
                          }}
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {searchdata.map((product) => (
                  <tr className="trbody" key={product.ProductID}>
                    <td>
                      <img
                        src={imageurl + product.ProductImgUrl}
                        width={70}
                        height={70}
                      />
                    </td>
                    {/* <td>{product.ProductID}</td> */}
                    <td>{product.ProductName}</td>
                    <td>{product.ProductUnitPrice} php</td>
                    <td>{product.ProductAvailability}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn "
                          style={{ backgroundColor: "#393646", color: "white" }}
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      <div className="row   mt-5 pt-5 tablewrapper">
        <h2 className=" ml-5 ml-5" style={{ marginLeft: "10rem" }}>
          CART
        </h2>
        <table className="table tableMain custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.ProductID}</td>
                <td>{item.ProductName}</td>
                <td>{item.ProductUnitPrice} php</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) =>
                      adjustQuantity(index, parseInt(event.target.value))
                    }
                  />
                </td>
                <td>
                  {(item.ProductUnitPrice * item.quantity).toFixed(2)} php{" "}
                </td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove Item</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        className="row"
        style={{
          position: "sticky",
          bottom: "10px",
          right: "20px",
          float: "right",
        }}
      >
        Total: {Total} php
      </h2>
    </div>
  );
};

export default Pos;
