// LIBs
import { Link } from "react-router-dom";

// FORMs
import FormSignInLogin from "../../forms/sign-in/login";

// ASSETS
import banner from "../../assets/sign-in-banner.png";

function SignIn(props) {
  return (
    <main className="SignInView">
      <div className="SignInView__container">
        <div className="SignInView__container--banner">
          <img src={banner} alt="" />
          <div className="SignInBlockedImage" />
        </div>

        <div className="SignInView__container--form">
          <div className="SignInTitle">
            <h1>Faça seu Login</h1>
          </div>

          <div className="SignInText">
            <p>Sua rede social interativa! Conecte-se com seus amigos e muito mais!</p>
          </div>

          <FormSignInLogin />

          <div className="SignInRegister">
            <p>Não tem conta? <Link to="/sign-up">Clique Aqui</Link></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn;
