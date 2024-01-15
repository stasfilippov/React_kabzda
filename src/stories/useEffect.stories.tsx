import React, { useEffect, useMemo, useState } from "react";
export default {
  title: "useEffect demo",
};

export const ExampleUseEffect = () => {
  console.log("EXAMPLE");

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("use effect");
    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </>
  );
};
