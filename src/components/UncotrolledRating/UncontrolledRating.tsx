import React, {MouseEvent} from 'react';
import {useState} from 'react';


export function UncontrolledRating() {
	console.log('rating rendering')

	let [selected, setSelected] = useState(0)


	const clickHandler = (num: number) => {
		setSelected(num)
	}


	return (
		<div>
			<Star clickHandler={clickHandler} selected={selected > 0} id={1}/>
			<Star clickHandler={clickHandler} selected={selected > 1} id={2}/>
			<Star clickHandler={clickHandler} selected={selected > 2} id={3}/>
			<Star clickHandler={clickHandler} selected={selected > 3} id={4}/>
			<Star clickHandler={clickHandler} selected={selected > 4} id={5}/>
		</div>
	)

}

type StarPropsType = {
	clickHandler: (num: number) => void,
	selected: boolean,
	id: number
}

function Star(props: StarPropsType) {
	console.log('Star rendering');

	const onClickSpanHandler = () => {
		props.clickHandler(props.id)
	}

	return (props.selected === true)
		? <span onClick={onClickSpanHandler}><b>star</b></span>
		: <span onClick={onClickSpanHandler}>star </span>

}
