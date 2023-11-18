import React from "react";
import { useState } from "react";
import { valueType } from "../../App";

type UncontrolledRatingType = {
  defaultValue?: valueType;
  onChange?: (value: valueType) => void;
};

export function UncontrolledRating(props: UncontrolledRatingType) {
  console.log("rating rendering");

  let [value, setValue] = useState<valueType>(
    props.defaultValue ? props.defaultValue : 0
  );

  const clickHandler = (num: valueType) => {
    setValue(num);
  };

  return (
    <div>
      <Star
        clickHandler={clickHandler}
        selected={value > 0}
        id={1}
        onChange={props.onChange}
      />
      <Star
        clickHandler={clickHandler}
        selected={value > 1}
        id={2}
        onChange={props.onChange}
      />
      <Star
        clickHandler={clickHandler}
        selected={value > 2}
        id={3}
        onChange={props.onChange}
      />
      <Star
        clickHandler={clickHandler}
        selected={value > 3}
        id={4}
        onChange={props.onChange}
      />
      <Star
        clickHandler={clickHandler}
        selected={value > 4}
        id={5}
        onChange={props.onChange}
      />
    </div>
  );
}

type StarPropsType = {
  clickHandler: (num: valueType) => void;
  selected: boolean;
  id: valueType;
  onChange?: (value: valueType) => void;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");

  const onClickSpanHandler = () => {
    props.clickHandler(props.id);
    if (props.onChange) {
      props.onChange(props.id);
    }
  };

  return (
    <span onClick={onClickSpanHandler}>
      {props.selected === true ? <b>star </b> : "star "}
    </span>
  );
}
