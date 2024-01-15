import React, { useMemo, useState } from "react";
export default {
  title: "useState demo",
};
function generateData() {
  console.log("render generateFc");
  const a = 5;
  let tempResult = 1;
  for (let i = 1; i <= a; i++) {
    let fake = 0;
    while (fake < 100000000) {
      fake++;
      const fakeValue = Math.random();
    }
    tempResult = tempResult * i;
  }
  return tempResult;
}
export const Example1 = () => {
  console.log("EXAMPLE");

  const initValue = useMemo(() => generateData, []);

  const [count, setCount] = useState(initValue);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </>
  );
};
