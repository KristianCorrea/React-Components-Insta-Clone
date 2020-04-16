//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import Data from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        Data.map(function (postSelection){
          return <Post postData={postSelection} /> 
        })
      
      }

    </div>
  );
};

export default PostsPage;
