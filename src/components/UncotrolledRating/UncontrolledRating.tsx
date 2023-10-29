import React, {MouseEvent} from 'react';
import {useState} from 'react';


export function UncontrolledRating() {
	console.log('rating rendering')

	let [selected, setSelected] = useState(0)


	const clickHandler = (event: MouseEvent) => {
		const value = event.currentTarget.getAttribute('data-value')

		setSelected(Number(value))
	}



	return (
		<div>
			<Star selected={selected > 0}/><button onClick={clickHandler} data-value={1}>1</button>
			<Star selected={selected > 1}/><button onClick={clickHandler} data-value={2}>2</button>
			<Star selected={selected > 2}/><button onClick={clickHandler} data-value={3}>3</button>
			<Star selected={selected > 3}/><button onClick={clickHandler} data-value={4}>4</button>
			<Star selected={selected > 4}/><button onClick={clickHandler} data-value={5}>5</button>
		</div>
	)

}

type StarPropsType = {
	selected: boolean;
}

function Star(props: StarPropsType) {
	console.log('Star rendering');
	if (props.selected === true) {
		return (
			<span><b>star</b> </span>
		)
	} else {
		return <span>star </span>
	}
}
