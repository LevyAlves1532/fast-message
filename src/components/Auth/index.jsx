// LIBs
import { Navigate } from "react-router-dom";

// CONTAINERs
import Header from "../../containers/template/Header";

export default props => {
  const logged = true;
  
  if (logged) {
    return (
      <div style={{ paddingTop: window.screen.width > 768 ? 81 : 119 }}>
        <Header />
        {props.component}
      </div>
    );
  } else {
    return <Navigate to="/sign-in" />
  }
}