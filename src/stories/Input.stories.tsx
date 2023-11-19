import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input",
};

export const UncontrolledInput = () => {
  return <input />;
};

export const СontrolledInput = () => {
  let [value, setValue] = useState("");

  const Change = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setValue(currentValue);
  };

  return (
    <>
      <input value={value} onChange={Change} />
    </>
  );
};

export const GetValueByButtonPressOfUncontrolledInput = () => {
  let [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}> Save </button> - actual value: - {value}
    </>
  );
};

export const СontrolledCheckbox = () => {
  let [value, setValue] = useState<boolean>(false);

  const Change = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.checked;
    setValue(currentValue);
  };

  return (
    <>
      <input checked={value} onChange={Change} type={"checkbox"} />-
      <div>{value}</div>
    </>
  );
};

export const СontrolledSelect = () => {
  let [value, setValue] = useState<string | undefined>(undefined);

  const Change = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <select onChange={Change} value={value}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Kiev</option>
      </select>
    </>
  );
};
