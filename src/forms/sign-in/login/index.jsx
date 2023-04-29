// LIBs
import { useState } from "react";

// COMPONENTs
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default props => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className="FormSignInLogin">
      <Input 
        type="email" 
        label="E-mail" 
        value={email}
        onChange={event => setEmail(event.target.value)}
        input={{
          autoFocus: true,
        }}
      />
      <Input 
        type="password" 
        label="Senha" 
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Button label="Logar" />
    </div>
  )
}