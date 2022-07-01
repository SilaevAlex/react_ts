/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dataMenu from "./menu.json";
import { MenuNavItem } from "./MenuNavItem";

export const MenuNavigation = () => {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      {dataMenu.map((item) => (
        <MenuNavItem key={item.id} item={item} />
      ))}
    </ul>
  );
};