// rfce
import React from "react";
import "../Components/Post.css";
import { Avatar } from "@mui/material";

function post(props) {
  return (
    <div className="post">

      <div className="post__header">
      <Avatar
        className="post__avatar"
        alt={props.username}
        src="/static/images/avatar/1.jpg"
      />
      <h3>{props.username}</h3>
      </div>
      {/* header--> avatar + username */}

      <img
        className="post__image"
        src={props.imageUrl}
        alt="logo"
      />
      {/* image */}

      <h4 className="post__text">
        <strong className="post__text__me">{props.username}</strong>{props.caption}</h4>
      {/* username + caption */}

      {/* */}
    </div>
  );
}

export default post;
