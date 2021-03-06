// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  return (
    <div className="post-border">
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={props.postData.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.postData.imageUrl}
        />
      </div>
      <LikeSection 
        likes={props.postData.likes}
      />
      <CommentSection
        comments={props.postData.comments}
      />
    </div>
  );
};

export default Post;
