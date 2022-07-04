import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from '@mui/icons-material/Edit';
import  { EditPostForm }  from "./EditPostForm";

interface Props {}

export const EditPostPopup = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Edit Post
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit post</DialogTitle>
        <DialogContent>
          <EditPostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
