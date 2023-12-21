import { useReducer, useState } from "react";
import { action } from "@storybook/addon-actions";

type AccordionPropsType = {
  titleValue: string;
};

type ActionType = {
  type: string;
};

const reducer = (state: boolean, action: ActionType) => {
  if (action.type === "TOGGLE-COLLAPSED") {
    return !state;
  }

  return state;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, dispatch] = useReducer(reducer, false);

  const onClickButtonHandler = () => {
    dispatch({ type: "TOGGLE-COLLAPSED" });
  };

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        clickHandler={onClickButtonHandler}
      />
      {!collapsed && <AccordionBody />}
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
