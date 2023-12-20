import React, { useState } from "react";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
};

const itemsData = [
  {
    title: "JS",
    value: "1",
  },
  {
    title: "React",
    value: "2",
  },
  {
    title: "CSS",
    value: "3",
  },
  {
    title: "Redux",
    value: "4",
  },
];

export const CustomSelect = () => {
  const [currentValue, setCurrentValue] = useState(null);

  return (
    <Select value={currentValue} onChange={setCurrentValue} items={itemsData} />
  );
};
