function InputElement(props){
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <br/>
            <input className="rounded-lg w-11/12 text-black" type={props.type} id={props.id} value={props.value} onChange={props.func} max={props.max}/>
        </div>
    )
}

export default InputElement;