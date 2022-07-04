/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { EditPost } from "../hooks/EditPost";

interface Props  {
  handleClose: () => void;
}

export const EditPostForm = ({handleClose}: Props) => {
  const { onAddPost, errors } = EditPost(handleClose);

  return (
    <form
      onSubmit={onAddPost}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-top: 5px;
      `}
    >
      <TextField
        error={errors.title}
        name="title"
        label="title"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Edit
      </Button>
    </form>
  );
};
