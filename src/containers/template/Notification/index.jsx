// COMPONENTs
import CardNotify from "../../../components/CardNotify";

// ICONs
import { BsChevronRight } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";

export default props => {
  let notificationClass = "Notification";

  if (props.show) notificationClass += " active-notification";

  const colors = ["danger", "warn", "info", null];

  return (
    <div className={notificationClass}>
      <div className="Notification__container">
        <div className="Notification__container--header">
          <div className="NotificationHeaderTitle">
            <span><MdNotificationsNone /></span>
            <p>Notificações</p>
          </div>

          <div className="NotificationHeaderIcon">
            <span onClick={() => props.onHide(false)}>
              <BsChevronRight />
            </span>
          </div>
        </div>

        <div className="Notification__container--body">
          {
            Array(props.count).fill(0).map((el, index) => (
              <CardNotify 
                iconName="FaUserPlus" 
                title="Você tem um novo amigo (@julinbr_03)" 
                date="2023-05-02" 
                color={colors[Math.floor(Math.random() * colors.length)]}
                onDel={() => props.onHide(false)}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}