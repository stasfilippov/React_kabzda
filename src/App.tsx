import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { UncontrolledRating } from './components/UncotrolledRating/UncontrolledRating';

export type valueType = 0| 1 | 2 | 3 | 4 | 5


function App() {

	let [ratingValue, setRatingValue] = useState<valueType>(0)

	let [collapsedValue, setCollapsedValue] = useState<boolean>(false);

	const changeCollapsed = () => {
		setCollapsedValue(!collapsedValue)
	}

	let [switchOn, setSwitchOn] = useState<boolean>(false)

	console.log('App rendering')
	return (
		<div className='App'>
			<UncontrolledAccordion titleValue={'--Uncontrolled accordion--'}/>
			<Accordion titleValue={'--Controlled accordion--'} isCollapsed={changeCollapsed} collapsed={collapsedValue}/>
			<OnOff isOn={switchOn} isOnChange= {setSwitchOn}/>
			<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
			<Rating value={ratingValue} onClick = {setRatingValue}/>
			<UncontrolledRating/>
		</div>
	);
}

export default App;
