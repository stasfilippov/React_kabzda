import React from "react";
import { UncontrolledOnOff } from "./UncontrolledOnOff";

export default {
  title: "UncontrolledOnOff",
  component: UncontrolledOnOff,
};

export const onMode = () => {
  return <UncontrolledOnOff defaultOn={true} />;
};

export const offMode = () => {
  return <UncontrolledOnOff defaultOn={false} />;
};
