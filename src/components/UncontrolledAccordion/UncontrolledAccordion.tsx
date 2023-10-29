import {useState} from 'react';

type AccordionPropsType = {
	titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {

	const [collapsed, setCollapsed] = useState(false)

	const onClickButtonHandler = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div>
			<AccordionTitle title={props.titleValue} clickHandler={onClickButtonHandler}/>
			{!collapsed && <AccordionBody/>}
		</div>
	)
}

type AccordionTitlePropsType = {
	title: string;
	clickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log('AccordionTitle rendering')

	const styleHeader = {
		cursor: 'pointer'
	}

	return (
		<h3 style={styleHeader} onClick={props.clickHandler} >{props.title}</h3>
	)
}

function AccordionBody() {
	console.log('AccordionBody rendering')
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}

