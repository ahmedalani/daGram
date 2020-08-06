import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeComment, addComment } from "../actions/actionCreator";

function Comments(props) {
  const dispatch = useDispatch();
  const commentForm = useRef(null);
  const comment = useRef(null);
  const author = useRef(null);

  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => dispatch(removeComment(props.params.postId, i))}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = props.params;
    const authorVal = author.current.value;
    const commentVal = comment.current.value;
    dispatch(addComment(postId, authorVal, commentVal));
    commentForm.current.reset();
  };

  return (
    <div className="comments">
      {props.postComments.map(renderComment)}
      <form
        ref={commentForm}
        className="comment-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type="text" ref={author} placeholder="author" />
        <input type="text" ref={comment} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
}
export default Comments;
