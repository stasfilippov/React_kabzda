type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle isCollapsed={props.onChange} title={props.titleValue} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  isCollapsed: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  const styleHeader = {
    cursor: "pointer",
  };

  console.log("AccordionTitle rendering");
  return (
    <h3 style={styleHeader} onClick={(event) => props.isCollapsed()}>
      {props.title}
    </h3>
  );
}

type AccordionBodyType = {
  items: ItemType[];
  onClick: (value: any) => void;
};
function AccordionBody(props: AccordionBodyType) {
  console.log("AccordionBody rendering");
  return (
    <ul>
      {props.items.map((el, index) => (
        <li
          onClick={() => {
            props.onClick(el.value);
          }}
          key={index}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
}
