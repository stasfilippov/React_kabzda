import React, {MouseEvent} from 'react';
import {useState} from 'react';
import {valueType} from '../../App';


export function UncontrolledRating() {
	console.log('rating rendering')

	let [value, setValue] = useState(0)


	const clickHandler = (num: valueType) => {
		setValue(num)
	}


	return (
		<div>
			<Star clickHandler={clickHandler} selected={value > 0} id={1}/>
			<Star clickHandler={clickHandler} selected={value > 1} id={2}/>
			<Star clickHandler={clickHandler} selected={value > 2} id={3}/>
			<Star clickHandler={clickHandler} selected={value > 3} id={4}/>
			<Star clickHandler={clickHandler} selected={value > 4} id={5}/>
		</div>
	)

}

type StarPropsType = {
	clickHandler: (num: valueType) => void,
	selected: boolean,
	id: valueType
}

function Star(props: StarPropsType) {
	console.log('Star rendering');

	const onClickSpanHandler = () => {
		props.clickHandler(props.id)
	}

	return (
		<span onClick={onClickSpanHandler}>{props.selected === true ? <b>star </b> : 'star '}</span>
	)
}
