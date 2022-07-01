import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { title, body, reactions, tags } = useDataPost();

  return (
    <div>
      <h1>{title}</h1>
      <p><b>Note:</b> {body}</p>
      <p><b>Reactions:</b> {reactions}</p>
      <p><b>Tags:</b> {tags}</p>
    </div> 
  );
};