import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import PostsStore from "../../store/PostsStore";
import Post from "../Post";
import { IPost } from "../../types/Post";
import s from "./Posts.module.scss";
import PostSkeleton from "../PostSkeleton";

const Posts: React.FC = observer(() => {
  useEffect(() => {
    PostsStore.fetchPosts();
  }, []);

  return (
    <div className={s.posts}>
      {PostsStore.isLoading
        ? new Array(5).fill(<PostSkeleton />)
        : PostsStore.posts.map((post: IPost) => (
            <Post
              id={post.id}
              avatar={post.user.avatar}
              username={post.user.username}
              title={post.title}
              body={post.body}
              attachment={post.attachment}
              createdAt={new Date(post.createdAt)}
            />
          ))}
    </div>
  );
});
export default Posts;
