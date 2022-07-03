/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks";

interface Props  {
  handleClose: () => void;
}

export const AddPostForm = ({handleClose}: Props) => {
  const { onAddPost, errors } = useAddPost(handleClose);

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
        error={errors.tags}
        name="tags"
        label="Tags"
        variant="outlined"
      />
      <TextField
        error={errors.title}
        name="title"
        label="title"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};
