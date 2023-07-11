import { observer } from "mobx-react-lite";
import PostsStore from "../../store/PostsStore";
import Post from "../Post";
import { IPost } from "../../types/Post";
import { useEffect } from "react";

const Posts: any = observer(() => {
  useEffect(() => {
    PostsStore.fetchPosts();
  }, []);

  return (
    <>
      {PostsStore.posts.map((post: IPost) => (
        <Post
          id={post.id}
          avatar={post.user.avatar}
          username={post.user.username}
          title={post.title}
          body={post.body}
          attachment={post.attachment}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
});
export default Posts;
