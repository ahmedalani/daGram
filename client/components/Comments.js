import React, { useRef } from "react";
import { useDispatch } from "react-redux";

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
            onClick={() =>
              dispatch({
                type: "REMOVE_COMMENT",
                i,
                postId: props.params.postId,
              })
            }
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
    dispatch({
      type: "ADD_COMMENT",
      postId,
      author: authorVal,
      comment: commentVal,
    });
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
