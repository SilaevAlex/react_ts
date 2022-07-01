/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Skeleton } from "@mui/material";

export const PostsSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div css={css`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  `}>
      {data.map((key) => (
        <div key={key}>
        <Skeleton  variant="text"  />
        <Skeleton  variant="text" width={210} height={118} />
        <Skeleton  variant="text"  />
        </div>
      ))}
    </div>
  );
};
