export default props => {
  let globalClass = "";

  if (props.className) globalClass += ` ${props.className}`;

  if (props.danger) globalClass += " danger-input";
  if (props.info) globalClass += " info-input";
  if (props.success) globalClass += " success-input";

  switch(props.type) {
    default:
      let inputLabelClass = "InputLabel";

      if (globalClass) inputLabelClass += globalClass;

      return (
        <label className={inputLabelClass} style={props.style}>
          <span>{props.label}</span>
          <input 
            type={props.type || "text"} 
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            value={props.value}
            onChange={props.onChange}
            {...props.input}
          />
        </label>
      )
  }
}