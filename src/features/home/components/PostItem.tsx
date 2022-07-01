/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}

export const PostItem = ({ post: { id, title, body, tags } }: Props) => (
  <div
    css={css`
      width: 250px;
      margin: 10px;
      justify-content: space-between;
      border: 1px solid gray;
      padding: 5px;
      h3 {
        cursor: pointer;
        text-decoration: underline;
      }
      p {
        max-height: 146px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
      }
    `}
  >
    <h3>
      <Link to={`/post/${id}`}>{title}</Link>
    </h3>
    <p>{body}</p>
    <p><b>Tags:</b> {tags}</p>
  </div>
);