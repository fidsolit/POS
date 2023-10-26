import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../Redux/AuthenticationSlice";

// import { decrement, increment } from "./counterSlice";

import { decrement, increment, incrementByAmount } from "../Redux/CounterSlice";
import LazyImage from "../components/LazyImage";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const [Value, setValue] = useState(0);
  const dispatch = useDispatch();
  function hundleonclick() {}

  const image = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1697442066898-fa88f11693d6?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1696779917953-c5c0592d1d3b?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "c:Users\fedeAppDataLocalTempphoto-1697040470079-bd23fc88454a.avif",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1696889168405-35a9ccac2d6a?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1693497409544-02d6fd746712?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1697644154596-4bfe32c15bed?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1697052751820-d51df9fcaa02?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    // <div className="container-fluid bg-light">
    //   <div className="row ">
    //     <h1>Home</h1>

    //     <div className="bg-primary">
    //       <div>
    //         <button
    //           aria-label="Increment value"
    //           onClick={() => dispatch(increment())}
    //         >
    //           Increment
    //         </button>
    //         <span>{count}</span>
    //         <button
    //           aria-label="Decrement value"
    //           onClick={() => dispatch(decrement())}
    //         >
    //           Decrement
    //         </button>
    //         <input
    //           type="text"
    //           onChange={(e) => {
    //             // dispatch(incrementByAmount(Number(e.target.value)));
    //             setValue(e.target.value);
    //           }}
    //         ></input>
    //         <button
    //           aria-lable="By amout"
    //           onClick={(e) => dispatch(incrementByAmount(Number(Value)))}
    //         >
    //           save
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {image.map((image) => (
        // <img src={image.url} width="100%" alt="" key={image.id} />
        <LazyImage
          id={image.id}
          src={image.url}
          style={{ width: "auto", height: "auto", borderRadius: "50px" }}
          key={image.id}
        />
      ))}
    </div>
  );
};

export default Home;
