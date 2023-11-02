
type OnOffPropsType = {
    isOn: boolean
    isOnChange: (value: boolean) => void
}

export const OnOff = (props:OnOffPropsType) => {
    console.log('OnOff rendering')

    const onStyle = {
        display: 'inline-block',
        backgroundColor: props.isOn ? 'green' : 'white',
        width: '50px',
        height: '20px',
        borderRadius: '5px',
        marginRight: '10px',
        border: '1px black solid',
        cursor: 'pointer'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: props.isOn ? 'white' : 'red',
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
        backgroundColor: props.isOn ? 'green' : 'red',
    }

    return (
        <div>
            <span>This controlled: </span>
            <div onClick={() => props.isOnChange(true)} style={onStyle} >On</div>
            <div onClick={() => props.isOnChange(false)} style={offStyle} >Off</div>
            <div style={lightbulbStyle}></div>
        </div>
    )
}