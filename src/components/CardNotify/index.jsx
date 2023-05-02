// ICONs
import * as FaIcons from "react-icons/fa";

export default props => {
  const Icon = FaIcons[props.iconName] || FaIcons["FaIcons"];

  let cardNotifyClass = "CardNotify";

  if (props.className) cardNotifyClass += ` ${props.className}`;

  if (props.color && props.color === "danger") cardNotifyClass += " card-notify-danger";
  if (props.color && props.color === "warn") cardNotifyClass += " card-notify-warn";
  if (props.color && props.color === "info") cardNotifyClass += " card-notify-info";

  return (
    <div className={cardNotifyClass}>
      <div className="CardNotify__icon">
        <Icon />
      </div>

      <div className="CardNotify__details">
        <div className="CardNotify__details--title">
          <p>{props.title}</p>
        </div>

        <div className="CardNotify__details--date">
          <p>
            { props.date &&
              new Date(props.date).toDateString()
            }
          </p>
        </div>
      </div>

      <div className="CardNotify__del">
        <span onClick={props.onDel}>
          <FaIcons.FaRegTrashAlt />
        </span>
      </div>
    </div>
  )
}