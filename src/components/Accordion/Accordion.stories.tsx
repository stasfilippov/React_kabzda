import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import React, { useState } from "react";

export default {
  component: Accordion,
};

const onChangeCallback = action("onChange");
const onClickHandler = action("Item was clicked with Id ");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      items={[]}
      titleValue={"--Collapsed Accordion--"}
      onChange={onChangeCallback}
      collapsed={true}
      onClick={onClickHandler}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      items={[
        { title: "Dima", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      titleValue={"--Opened Accordion--"}
      onChange={onChangeCallback}
      collapsed={false}
      onClick={onClickHandler}
    />
  );
};

export const AccordionCliced = () => {
  let [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Accordion
      onClick={onClickHandler}
      items={[
        { title: "Dima", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      titleValue={"--Accordion--"}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
      collapsed={collapsed}
    />
  );
};
