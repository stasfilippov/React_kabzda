import { useState } from "react";

type UncontrolledOnOffPropsType = {
  defaultOn?: boolean;
};

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
  console.log("OnOff rendering");
  let [isOn, setIsOn] = useState(props.defaultOn ? props.defaultOn : false);

  const onStyle = {
    display: "inline-block",
    backgroundColor: isOn ? "green" : "white",
    width: "50px",
    height: "20px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "1px black solid",
    cursor: "pointer",
  };

  const offStyle = {
    display: "inline-block",
    backgroundColor: isOn ? "white" : "red",
    width: "50px",
    height: "20px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "1px black solid",
    cursor: "pointer",
  };

  const lightbulbStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "1px black solid",
    backgroundColor: isOn ? "green" : "red",
  };

  const onClicked = () => {
    setIsOn(true);
  };

  const offClicked = () => {
    setIsOn(false);
  };

  return (
    <div>
      <span>This uncontrolled: </span>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={lightbulbStyle}></div>
    </div>
  );
};
