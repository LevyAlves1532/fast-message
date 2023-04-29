// LIBs
import { BrowserRouter, Routes, Route } from "react-router-dom";

// VIEWs
import SignIn from "../../views/sign-in";
import SignUp from "../../views/sign-up";

// CONFIG
import config from "../config/config";

export default props => {
  console.debug("Mode: " + process.env.NODE_ENV);
  console.debug("Path Name: " + config.pathName);

  return (
    <BrowserRouter basename={config.pathName}>
      <Routes>
        {/* PUBLIC ROUTEs */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        {/* PRIVATE ROUTEs */}
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  )
}