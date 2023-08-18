import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
	console.log('App rendering')
	// делает что-то полезное
	// в конце обязательно возвращает JSX
	return (
		<div>
			<PageTitle title={"This is app component"}/>
			<PageTitle title={"My friend"}/>
			<h3>Article 1</h3>
			<Rating value={0}/>
			<Accordion titleValue={'Title Accordion One'}/>
			<Accordion titlevalue={'Title Accordion Two'}/>
			<h3>Article 2</h3>
			<Rating value={1}/>
			<Rating value={2}/>
			<Rating value={3}/>
			<Rating value={4}/>
			<Rating value={5}/>
		</div>
	);
}

function PageTitle(props: any) {
	console.log('PageTitle rendering')
	return (
		<h1>{props.title}</h1>
	)
}


export default App;
