export default props => {
  let globalClass = "";

  if (props.className) globalClass += ` ${props.className}`;

  switch (props.type) {
    case "mask":
      let buttonMaskClass = "ButtonMask";

      if (globalClass) buttonMaskClass += globalClass;

      return (
        <span className={buttonMaskClass} onClick={props.onClick}>
          <p>{props.label}</p>
          <div className="animation-point" />
        </span>
      )
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