import React, { useEffect, useMemo, useState } from "react";
export default {
  title: "useEffect demo",
};

export const ExampleUseEffect = () => {
  console.log("EXAMPLE");

  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(() => {
    console.log("useEffect alredy rendered");
  });

  useEffect(() => {
    console.log("use effect will render only first");
    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'
  }, []);

  useEffect(() => {
    console.log("useEffect render when rerendered counter");
  }, [count]);

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

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setHours(new Date().getHours());
  }, []);

  useEffect(() => {
    setMinutes(new Date().getMinutes());
  }, []);

  if (minutes === 60) {
    setHours(new Date().getHours());
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(new Date().getSeconds());
      if (seconds === 0) {
        setMinutes(new Date().getMinutes());
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {hours} : {minutes} : {seconds}
    </>
  );
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect");

    return () => {
      console.log("reset effect");
    };
  }, []);

  const increase = () => setCounter(counter + 1);

  return (
    <div>
      <h3>Hello {counter}</h3>
      <button onClick={increase}>+</button>
    </div>
  );
};

export const KeysTyped = () => {
  const [text, setText] = useState("");

  const handler = (e: KeyboardEvent) => {
    console.log(e.key);
    setText((state) => state + e.key);
  };

  useEffect(() => {
    window.addEventListener("keypress", handler);
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, []);

  return <div>{text}</div>;
};
