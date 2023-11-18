import { UncontrolledAccordion } from "./UncontrolledAccordion";
import React, { useState } from "react";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const ChangingMode = () => {
  return <UncontrolledAccordion titleValue={"Uncotrol"} />;
};
