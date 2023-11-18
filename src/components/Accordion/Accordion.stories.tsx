import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import React, { useState } from "react";

export default {
  component: Accordion,
};

const onChangeCallback = action("onChange");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"--Collapsed Accordion--"}
      onChange={onChangeCallback}
      collapsed={true}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"--Opened Accordion--"}
      onChange={onChangeCallback}
      collapsed={false}
    />
  );
};

export const AccordionCliced = () => {
  let [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Accordion
      titleValue={"--Accordion--"}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
      collapsed={collapsed}
    />
  );
};
