import './OnOff.css';
import {useState} from 'react';

// type OnOffPropsType = {
//     isOn: boolean
// }



export const OnOff = () => {
    console.log('OnOff rendering')
    let [isOn, setIsOn] = useState(false);

    console.log('isOn:' + isOn)

    const onStyle = {
        display: 'inline-block',
        backgroundColor: isOn ? 'green' : 'white',
        width: '50px',
        height: '20px',
        borderRadius: '5px',
        marginRight: '10px',
        border: '1px black solid',
        cursor: 'pointer'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: isOn ? 'white' : 'red',
        width: '50px',
        height: '20px',
        borderRadius: '5px',
        marginRight: '10px',
        border: '1px black solid',
        cursor: 'pointer'
    }

    const lightbulbStyle = {
        display: 'inline-block',
        width: "10px",
        height: "10px",
        borderRadius: '50%',
        border: '1px black solid',
        backgroundColor: isOn ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {setIsOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => { setIsOn(false) } }>Off</div>
            <div style={lightbulbStyle}></div>
        </div>
    )
}