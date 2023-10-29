import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import { OnOff } from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncotrolledRating/UncontrolledRating';


function App() {
	console.log('App rendering')
	return (
		<div className='App'>
			<UncontrolledAccordion titleValue={'--Uncontrolled accordion--'}/>
			<Accordion titleValue={'--Controlled accordion--'} collapsed={false}/>

			<OnOff/>

			<Rating value={4}/>
			<UncontrolledRating/>
		</div>
	);
}

export default App;
