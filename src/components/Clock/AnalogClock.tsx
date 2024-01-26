import React, { useEffect, useState } from "react";
import s from "./AnalogClock.module.css";

export const AnalogClock = () => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let second = data.getSeconds();
  let minute = data.getMinutes();
  let hour = data.getHours();

  // считаем угол поворота стрелок
  let ss = second * 6;
  let mm = minute * 6;
  let hh = hour * 30 + mm / 12;

  return (
    <div className={s.clock_box}>
      <div className={s.arrow_helper + " " + s.a1}></div>
      <div className={s.arrow_helper + " " + s.a2}></div>
      <div className={s.arrow_helper + " " + s.a3}></div>
      <div className={s.arrow_helper + " " + s.a4}></div>
      <div className={s.arrow_helper + " " + s.a5}></div>
      <div className={s.arrow_helper + " " + s.a6}></div>

      <div className={s.number + " " + s.n01}>01</div>
      <div className={s.number + " " + s.n02}>02</div>
      <div className={s.number + " " + s.n03}>03</div>
      <div className={s.number + " " + s.n04}>04</div>
      <div className={s.number + " " + s.n05}>05</div>
      <div className={s.number + " " + s.n06}>06</div>
      <div className={s.number + " " + s.n07}>07</div>
      <div className={s.number + " " + s.n08}>08</div>
      <div className={s.number + " " + s.n09}>09</div>
      <div className={s.number + " " + s.n10}>10</div>
      <div className={s.number + " " + s.n11}>11</div>
      <div className={s.number + " " + s.n12}>12</div>

      <div className={s.clock_hands_box}>
        <div
          style={{ transform: `rotate(${ss}deg)` }}
          className={s.clock_hand__second}
        ></div>
        <div
          style={{ transform: `rotate(${mm}deg)` }}
          className={s.clock_hand__minute}
        ></div>
        <div
          style={{ transform: `rotate(${hh}deg)` }}
          className={s.clock_hand__hour}
        ></div>
      </div>
    </div>
  );
};
