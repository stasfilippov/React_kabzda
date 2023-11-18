type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle isCollapsed={props.onChange} title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
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
