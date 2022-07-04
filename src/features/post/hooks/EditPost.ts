import { useState } from "react";

interface fields {
  title: string;
}

export const initialErr = {
  title: false,
};

export const EditPost = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErr);

  const resetErr = () => setErrors(initialErr);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErr();

    const newErr = { ...initialErr };

    if (fields.title.length < 5) {
      newErr.title = true;
      isValid = false;
    }
    if (fields.title.length > 20) {
      newErr.title = true;
      isValid = false;
    }

    setErrors(newErr);

    return isValid;
  };

  const onAddPost = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I think I should shift to the moon",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
      });
  };

  return {
    onAddPost,
    errors,
  };
};
