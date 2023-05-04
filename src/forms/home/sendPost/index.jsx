// LIBs
import { useState } from "react";

// COMPONENTs
import Input from "../../../components/Input";
import Button from "../../../components/Button";

// ICONs
import { FaRegTrashAlt } from "react-icons/fa";

export default props => {
  const [ text, setText ] = useState("");
  const [ file, setFile ] = useState(null);

  function send() {
    props.onSend({
      text,
      file,
    });
  }

  return (
    <div className="FormHomePost">
      <div className="FormHomePost__header">
        <h1>Faça sua publicação</h1>
      </div>

      <div className="FormHomePost__body">
        <div className="FormHomePost__body--text">
          <Input 
            label="Fale o que você sente..." 
            value={text} 
            onChange={event => setText(event.target.value)} 
          />
        </div>

        <div className="FormHomePost__body--file">
          { !file &&
            <label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={event => setFile(event.target.files[0])} 
              />
              <Button type="mask" label="Selecionar Imagem" />
            </label>
          }

          { file &&
            <>
              <img src={URL.createObjectURL(file)} alt="" />
              <button className="RemoveImage" onClick={() => setFile(null)}>
                <div>
                  <span>
                    <FaRegTrashAlt />
                  </span>
                </div>
              </button>
            </>
          }
        </div>

        <div className="FormHomePost__body--button">
          <Button label="Publicar" onClick={send} />
        </div>
      </div>
    </div>
  )
}