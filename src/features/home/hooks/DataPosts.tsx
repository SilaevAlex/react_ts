import { paginationClasses } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { PostInterface } from "../interfaces";

export const DataPosts = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const isTotal = useRef(false);

  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });

  const onChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPagination({ ...pagination, page: value });
  };

  useEffect(() => {
    const { page, limit } = pagination;

    const skip = page === 1 ? 0 : (page - 1) * limit;

    fetch(`https://dummyjson.com/posts?limit=${pagination.limit}&&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setIsLoading(false);

        if (!isTotal.current) {
          setPagination({ ...pagination, 
            total: Math.round(data.total / pagination.total)});
          isTotal.current = true;
        }
      });
  }, [pagination.page]);

  return {
    posts,
    page,
    setPage,
    onChangePagination,
    isLoading,
    pagination,
  };
};
