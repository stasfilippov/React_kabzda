import {valueType} from '../../App';


type RatingPropsType = {
	value: valueType
	onClick: (value: valueType) => void
}

export function Rating(props: RatingPropsType) {
	console.log('rating rendering')

	return (
		<div>
			<Star onClick = {props.onClick} selected={props.value > 0} value={1}/>
			<Star onClick = {props.onClick} selected={props.value > 1} value={2}/>
			<Star onClick = {props.onClick} selected={props.value > 2} value={3}/>
			<Star onClick = {props.onClick} selected={props.value > 3} value={4}/>
			<Star onClick = {props.onClick} selected={props.value > 4} value={5}/>
		</div>
	)

}

type StarPropsType = {
	selected: boolean
	value: valueType
	onClick: (value: valueType) => void
}

function Star(props: StarPropsType) {
	console.log('Star rendering');
	return (
		<span onClick={() => props.onClick(props.value)}>{props.selected === true ? <b>star </b> : 'star '}</span>
	)
}
