import React, { useEffect } from "react";

function Counter1({ number }) {
  useEffect(() => {
    console.log("Functional component:Updating...");

    return () => {
      console.log("Functional component:Remove...");
    };
  }, [number]);
  return <div>{number}</div>;
}

export default Counter1;
