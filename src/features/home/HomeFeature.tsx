import { DataPosts } from "./hooks";
import { PostList, PostsSkeleton } from "./components";
import { Pagination } from "./components/Pagination";
import {AddPostPopup}  from "./components/AddPostPopup"

export const HomeFeature = () => {
  const { posts, pagination, onChangePagination,  isLoading } = DataPosts();

  return (
    <div>
      <AddPostPopup  />
      {isLoading ? <PostsSkeleton /> : <PostList posts={posts} />}
      <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>
  );
};
