function CustomInput(props) {
    return ( 
    <>
         <label>{props.lable} </label>
          <input type={props.type} name={props.name} required />
    </>);
}

export default CustomInput;