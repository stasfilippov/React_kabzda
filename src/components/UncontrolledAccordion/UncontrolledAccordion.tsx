import { useReducer, useState } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  // const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  const onClickButtonHandler = () => {
    dispatch({ type: TOGGLE_COLLAPSED });
  };

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        clickHandler={onClickButtonHandler}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  clickHandler: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");

  const styleHeader = {
    cursor: "pointer",
  };

  return (
    <h3 style={styleHeader} onClick={props.clickHandler}>
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
