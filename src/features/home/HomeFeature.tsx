import { DataPosts } from "./hooks";
import { PostList, PostsSkeleton } from "./components";
import { Pagination } from "./components/Pagination";


export const HomeFeature = () => {
  const { posts, pagination, onChangePagination,  isLoading } = DataPosts();

  return (
    <div>
      {isLoading ? <PostsSkeleton /> : <PostList posts={posts} />}
      <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>
  );
};
