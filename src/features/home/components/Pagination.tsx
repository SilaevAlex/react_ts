/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PaginationMUI from "@mui/material/Pagination";
import {PaginationInterface} from "../interfaces"


interface Props {
  pagination: PaginationInterface;
  onChange: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({ onChange, pagination:{ total, page } }: Props) => {
  return (
    <div
      css={css`
  display: flex;
  align-items: center;
  justify-content: center;
  }
`}
    >
      <PaginationMUI
        onChange={onChange}
        page={page}
        count={total}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};
