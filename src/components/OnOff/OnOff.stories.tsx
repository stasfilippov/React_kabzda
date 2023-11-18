import React, { useState } from "react";
import { OnOff } from "./OnOff";
import { action } from "@storybook/addon-actions";

export default {
  title: "OnOff stories",
  component: OnOff,
};

const callback = action("on or off clicked");
export const OffMode = () => <OnOff isOn={false} isOnChange={callback} />;
export const OnMode = () => <OnOff isOn={true} isOnChange={callback} />;

export const ChangingMode = () => {
  let [switchOn, setSwitchOn] = useState<boolean>(false);

  return <OnOff isOn={switchOn} isOnChange={setSwitchOn} />;
};
