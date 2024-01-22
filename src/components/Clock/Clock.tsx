import React, { useEffect, useState } from "react";

type PropsType = {};

const get2DigitsString = (num: number) => (num < 10 ? "0" + num : num);
export const Clock: React.FC<PropsType> = (props) => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <span>{get2DigitsString(data.getHours())}</span>:
      <span>{get2DigitsString(data.getMinutes())}</span>:
      <span>{get2DigitsString(data.getSeconds())}</span>
    </div>
  );
};
