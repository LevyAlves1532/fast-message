// LIBs
import { Navigate } from "react-router-dom";

// CONTAINERs
import Header from "../../containers/template/Header";

export default props => {
  const logged = true;
  
  if (logged) {
    return (
      <>
        <Header />
        {props.component}
      </>
    );
  } else {
    return <Navigate to="/sign-in" />
  }
}