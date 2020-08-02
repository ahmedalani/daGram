import React from "react";

import Photo from "./Photo";
function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => (
        <Photo key={i} {...props} post={post} i={i} />
      ))}
    </div>
  );
}
export default PhotoGrid;
