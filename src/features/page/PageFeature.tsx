/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      max-width: 1200px;
      margin: 0 auto;
      border: 1px solid #fdfbfb;
      box-shadow: -1px 3px 11px 6px #cdc4c4;
      padding: 15px;
      margin-top: 15px;
    `}
  >
    {children}
  </div>
);