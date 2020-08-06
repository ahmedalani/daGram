import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.commentForm = React.createRef();
    this.author = React.createRef();
    this.comment = React.createRef();
  }
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={(e) =>
              this.props.removeComment(this.props.params.postId, i)
            }
          >
            &times;
          </button>
        </p>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.author.current.value;
    const comment = this.comment.current.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.current.reset();
  }
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={this.commentForm}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref={this.author} placeholder="author" />
          <input type="text" ref={this.comment} placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
