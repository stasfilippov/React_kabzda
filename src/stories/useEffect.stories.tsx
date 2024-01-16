import React, { useEffect, useMemo, useState } from "react";
export default {
  title: "useEffect demo",
};

export const ExampleUseEffect = () => {

  console.log("EXAMPLE");

  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1)

  useEffect(() => {
    console.log('useEffect alredy rendered');
  })

  useEffect(() => {
    console.log("use effect will render only first");
    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'
  }, []);

  useEffect(() => {
    console.log('useEffect render when rerendered counter');
  }, [count])

  return (
    <>
      {count}
      {fake}
      <button onClick={() => setCount(count + 1)}>count inc</button>
      <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
  );
};

export const ExampleSetTimeout = () => {

  console.log("ExampleSetTimeout");

  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1)


  useEffect (() => {
    setInterval(() => {
      setCount((state) => state + 1) 
    }, 1000)
  }, [])

  return (
    <>
      {count}
      {fake}
      {/* <button onClick={() => setCount(count + 1)}>count inc</button>
      <button onClick={() => setFake(fake + 1)}>fake +</button> */}
    </>
  );
}; 