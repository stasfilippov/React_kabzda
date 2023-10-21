import './OnOff.css';

type OnOffPropsType = {
    isOn: boolean
}

const greenColor = {
    backgroundColor: 'green'
}

const redColor = {
    backgroundColor: 'red'
}


export const OnOff = (props:OnOffPropsType) => {
    if (props.isOn === true) {
        return (
            <div className='box'>
                <div style={true && greenColor} className='button'>ON</div>
                <div className='button'>OFF</div>
                <div className='lightbulb' style={greenColor}></div>
            </div>
        )
    } else {
        return (
            <div className='box'>
                <div className='button'>ON</div>
                <div className='button' style={redColor}>OFF</div>
                <div className='lightbulb' style={redColor}></div>
            </div>
        )
    }
}