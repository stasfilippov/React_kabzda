import React, { useState } from "react";
import styled from "styled-components";
import { Simulate } from "react-dom/test-utils";
import change = Simulate.change;

type ItemType = {
  title: string;
  value: any;
};

type SelectType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};
export const Select = (props: SelectType) => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickHandler = (nextTitle: string) => {
    if (props.value !== nextTitle) {
      props.onChange(nextTitle);
    }
    setCollapsed(!collapsed);
  };

  return (
    <SelectWrapperStyled>
      <SelectItemStyled onClick={() => setCollapsed(!collapsed)}>
        {props.value}
      </SelectItemStyled>
      {collapsed ? (
        <ItemsWrapper>
          {props.items.map((i) => (
            <ItemStyled key={i.value} onClick={() => onClickHandler(i.title)}>
              {i.title}
            </ItemStyled>
          ))}
        </ItemsWrapper>
      ) : (
        <></>
      )}
    </SelectWrapperStyled>
  );
};

const SelectWrapperStyled = styled.div`
  margin: 20px auto;
  background-color: lightgoldenrodyellow;
  position: relative;
`;

const SelectItemStyled = styled.div`
  border: 1px solid cadetblue;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ItemsWrapper = styled.div`
  position: absolute;
  background-color: darkgrey;
  width: 100%;
  top: 0;
  left: 0;
`;

const ItemStyled = styled.div`
  font-size: 20px;

  &:hover {
    color: darkblue;
    font-weight: bold;
    cursor: pointer;
  }
`;
