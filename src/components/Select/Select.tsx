import React, { useState } from "react";
import styled from "styled-components";
import { Simulate } from "react-dom/test-utils";
import change = Simulate.change;

type ItemType = {
  title: string;
  value: string;
};

type SelectType = {
  value: string | null;
  onChange: (value: any) => void;
  items: ItemType[];
};
export const Select = (props: SelectType) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const defaultValue = props.items.find((el) => el.value === props.value);
  const hoveredItem = props.items.find(
    (el) => el.value === hoveredElementValue
  );

  const toggleItems = () => setCollapsed(!collapsed);
  const onClickHandler = (nextTitle: any) => {
    if (props.value !== nextTitle) {
      props.onChange(nextTitle);
    }
    toggleItems();
  };

  return (
    <SelectWrapperStyled>
      <SelectItemStyled onClick={toggleItems}>
        {defaultValue && defaultValue.title}
      </SelectItemStyled>
      {collapsed && (
        <ItemsWrapper>
          {props.items.map((i) => (
            <ItemStyled key={i.value} onClick={() => onClickHandler(i.value)}>
              {i.title}
            </ItemStyled>
          ))}
        </ItemsWrapper>
      )}
    </SelectWrapperStyled>
  );
};

const SelectWrapperStyled = styled.div`
  margin: 30px auto;
  position: relative;
  height: 30px;
  width: 150px;
`;

const SelectItemStyled = styled.div`
  border: 2px solid #c2cad0;
  border-radius: 10px;
  background-color: #e7717d;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ItemsWrapper = styled.div`
  position: absolute;
  border: 2px solid #c2cad0;
  background-color: white;
  color: #e7717d;
  border-radius: 10px;
  width: 100%;
  top: 0;
  left: 0;
`;

const ItemStyled = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #e8707d;
    background-color: #c2cad0;
    font-weight: bold;
    cursor: pointer;
  }
`;
