// ICONs
import { FaRegPaperPlane } from "react-icons/fa";

export default props => {
  return (
    <div className="FormHomeMessage">
      <input type="text" placeholder="Deixe seu comentário..." />
      <button>
        <span><FaRegPaperPlane /></span>
      </button>
    </div>
  )
}