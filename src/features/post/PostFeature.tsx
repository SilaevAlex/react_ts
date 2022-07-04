/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPost } from "./hooks";
import { Link } from "react-router-dom";
import { EditPostPopup } from "./components";

export const PostFeature = () => {
  const { title, body, reactions, tags } = useDataPost();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <h1>{title}</h1>
      <p>
        <b>Note:</b> {body}
      </p>
      <EditPostPopup />
    </div>
  );
};
