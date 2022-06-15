// rfce
import React from "react";
import'../Components/Post.css'
import { Avatar } from "@mui/material";

function post() {
  return (
    <div className="post">

      <Avatar></Avatar>

      <h3>Username</h3>
      {/* header--> avatar + username */}

      <img className="post__image" src="https://wallpaperaccess.com/full/203323.jpg" alt="logo" />
      {/* image */}

      <h4 className="post__text"><strong>Cleaverqazi: </strong> Wow day three of live session</h4>
      {/* username + caption */}
      
      {/* 23min5sec */}
    </div>
  );
}

export default post;
