// LIBs
import { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTs
import Input from "../../../components/Input";

// CONTAINERs
import Notification from "../Notification";

// ICONs
import { MdOutlineNotificationsNone, MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export default props => {
  const countNotify = Math.floor(Math.random() * 11) + 1;

  let headerButtonClass = "Header__container--button";
  let headerNavClass = "Header__container--nav";

  const [ showMenu, setShowMenu ] = useState(false);
  const [ showNotify, setShowNotify ] = useState(false);

  if (showMenu) {
    headerButtonClass += " active-button-menu";
    headerNavClass += " active-menu";
  }

  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__container--logo">
          <Link to="/">Fast <span>Message</span></Link>
        </div>

        <div className={headerButtonClass}>
          <div className="HeaderButton" onClick={() => setShowMenu(!showMenu)}>
            <div className="HeaderButton__bar" />
            <div className="HeaderButton__bar" />
            <div className="HeaderButton__bar" />
          </div>
        </div>

        <div className="Header__container--search">
          <Input placeholder="O que você procura?" color="white" />
        </div>

        <nav className={headerNavClass}>
          <ul>
            <li onMouseLeave={() => window.screen.width > 768 && setShowNotify(false)}>
              <p onClick={() => setShowNotify(!showNotify)}>
                <span><MdOutlineNotificationsNone /></span>
                <span>Notificações</span>
                <small>{countNotify > 9 ? "+9" : countNotify}</small>
              </p>

              { window.screen.width > 768 &&
                <Notification show={showNotify} count={countNotify} />
              }
            </li>
            <li>
              <Link to="/profile">
                <span><FaRegUserCircle /></span>
                <span>Ver Perfil</span>  
              </Link>
            </li>
            <li>
              <p>
                <span><MdLogout /></span>
                <span>Sair</span>
              </p>
            </li>
          </ul>
        </nav>
      </div>

      { window.screen.width <= 768 &&
        <Notification 
          show={showNotify} 
          count={countNotify} 
          onHide={setShowNotify}
        />
      }
    </header>
  )
}