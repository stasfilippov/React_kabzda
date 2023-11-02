import {useState} from 'react';

export const UncontrolledOnOff = () => {
    console.log('OnOff rendering')
    let [isOn, setIsOn] = useState(false);


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
            <span>This uncontrolled: </span>
            <div style={onStyle} onClick={ () => {setIsOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => { setIsOn(false) } }>Off</div>
            <div style={lightbulbStyle}></div>
        </div>
    )
}