import { useState } from "react";

interface fields {
  tags: string[];
  title: string;
}

export const initialErr = {
  tags: false,
  title: false,
};

export const useAddPost = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErr);

  const resetErr = () => setErrors(initialErr);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErr();

    const newErr = { ...initialErr };

    if (fields.tags.length < 3) {
      newErr.tags = true;
      isValid = false;
    }
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
      tags: event.target.tags.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
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
