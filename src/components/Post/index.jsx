// LIBs
import { Link } from "react-router-dom";

// ICONs
import { FaRegHeart, FaComment } from "react-icons/fa";

export default props => {
  let postLikedClass = "Post__footer--liked";
  let postCommentsClass = "Post__footer--comments";
  let postBodyClass = "Post__body";

  if (props.liked) postLikedClass += " active-post-liked";
  if (props.comments) postCommentsClass += " active-post-comments";
  if (props.comments) postBodyClass += " active-post-comments";

  return (
    <div className="Post">
      <div className="Post__header">
        <div className="Post__header--details">
          <img src={props.user.image} alt="" />
          <Link to={`/profile/${props.user.id}`}>{props.user.name}</Link>
        </div>
      </div>

      <div className={postBodyClass}>
        <img src={props.image} alt="" />

        <div className="Post__body--comments">
          {props.children}
        </div>
      </div>

      <div className="Post__footer">
        <div className={postLikedClass}>
          <button>
            <span><FaRegHeart /></span>
          </button>
        </div>

        <div className={postCommentsClass} onClick={props.onComment}>
          <button>
            <span><FaComment /></span>
          </button>
        </div>
      </div>
    </div>
  )
}