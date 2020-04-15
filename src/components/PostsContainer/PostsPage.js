//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import Data from '../../dummy-data';
// import data 

const PostsPage = () => {
  // set up state for your data
  const dummyData = Data;
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        dummyData.map(function (post1){
          return <Post post={post1} /> 
        })
      
      }

    </div>
  );
};

export default PostsPage;
