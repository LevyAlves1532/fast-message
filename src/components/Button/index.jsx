export default props => {
  let globalClass = "";

  if (props.className) globalClass += ` ${props.className}`;

  switch (props.type) {
    default:
      let buttonClass = "Button";

      if (globalClass) buttonClass += globalClass;

      return (
        <button className={buttonClass} onClick={props.onClick}>
          <p>{props.label}</p>
          <div className="animation-point" />
        </button>
      )
  }
}