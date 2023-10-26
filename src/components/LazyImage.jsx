import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

const LazyImage = (props) => {
  const [inView, setinView] = useState(false);
  const ref = useRef();
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      //   if (entry.isIntersecting) {setinView(true);
      if (entry.isIntersecting) {
        setinView(true);
      }
    });
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
      console.log("this is the intersected part", ref.current);
    }
    return () => {
      //   observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img {...props} />
  ) : (
    <div>
      <img
        ref={ref}
        src=""
        alt=""
        style={{
          borderRadius: "50px",
          width: "auto",
          height: "auto",
          backgroundColor: "purple",
        }}
      />
    </div>
  );
};

export default LazyImage;
