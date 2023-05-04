// COMPONENTs
import Post from "../../../components/Post";

export default props => {
  function togglePostComments(post) {
    if (props.comments) {
      if (props.comments.id === post.id) {
        props.onComment(null);
      } else {
        props.onComment({ 
          id: post.id, 
          comments: post.comments
        });
      }
    } else {
      props.onComment({ 
        id: post.id, 
        comments: post.comments
      });
    }
  }

  return (
    <section className="HomePosts">
      {props.formElement}
      { 
        props.data.map((el, index) => (
          <Post 
            user={el.user}
            image={el.image}
            text={el.text}
            liked={el.liked} 
            comments={(props.comments && props.comments.id === el.id) ? props.comments : null}
            onComment={() => togglePostComments(el)}
            key={index}
          >{props.commentElement}</Post>
        ))
      }
    </section>
  )
}