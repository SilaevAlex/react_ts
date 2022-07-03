/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import  { MenuNavigation }  from "./components";

export const HeaderFeature = () => {
  return (
    <header
      css={css`
        background-color: black;
      `}
    >
      <div
        css={css`
          min-width: 1200px;
          margin: auto;
          padding: 5px;
          
        `}
      >
        <MenuNavigation />
      </div>
    </header>
  );
};