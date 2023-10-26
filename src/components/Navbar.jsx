import React from "react";
import "../assets/Styles/navbar.css";
import { NavLink as Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./counterSlice";

import { decrement, increment } from "../Redux/CounterSlice";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="navmain">
        <li>
          <Link to="/">
            <img src="" style={{ width: "200px" }}></img>
          </Link>
        </li>
        <li>
          <Link to="/Home">HOME</Link>
        </li>
        <li>
          {" "}
          <Link to="/Pos">POS</Link>{" "}
        </li>

        <li>
          <Link to="/Store">Store</Link>
        </li>
        <li>
          <Link to="/Login">
            <span>{count}</span>
            <li>LOGIN</li>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
