function CustomButton(props) {
    return ( 
    <button onClick={props.onClick} className={props.className} disabled ={props.disable}>
        <span>{props.value}</span>
    </button> );
}

export default CustomButton;