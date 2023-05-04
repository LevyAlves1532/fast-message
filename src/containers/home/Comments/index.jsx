export default props => {
  console.log(props);

  return (
    <div className="HomeComments">
      <div className="HomeComments__messages">
        { (props.data) &&
          props.data.comments.map((comment, index) => (
            <div className="HomeCommentsMessage" key={index}>
              <div className="HomeCommentsMessage__image">
                <img src={comment.image} alt="" />
              </div>

              <div className="HomeCommentsMessage__details">
                <p>{comment.name}</p>

                <span>{comment.comment}</span>
              </div>
            </div>
          ))
        }
      </div>

      {props.children}
    </div>
  )
}