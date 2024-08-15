import React from "react";
import Post from "../components/Post/Post";
import { IPost } from "./interfaces";

export const postDataHandle = (posts: IPost[]) => {
  return posts.map(
    ({
      id = 1,
      author = " ",
      date = " ",
      imgAuthor = " ",
      imgPost = " ",
      title = " ",
      text = " ",
    }: IPost) => {
      const imgAuthorPath = require(`../assets/img/${imgAuthor}`);
      const imgPostPath = require(`../assets/img/${imgPost}`);

      return React.createElement(Post, {
        key: id,
        author,
        date,
        imgAuthor: imgAuthorPath,
        imgPost: imgPostPath,
        title,
        text,
      });
    }
  );
};

export const defaultFunc = () => {
  const message = "Ooops, I know there smth going wrong!";

  console.log(message);

  return message;
};
