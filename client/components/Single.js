import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

function Single(props) {
  const { postId } = props.params;
  // index of the post
  const i = props.posts.findIndex((post) => post.code === postId);
  // get the post
  const post = props.posts[i];
  // get the comments
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
}
export default Single;
