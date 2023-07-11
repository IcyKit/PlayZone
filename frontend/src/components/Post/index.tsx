import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import makeCreatedDate from "../../helpers/makeCreatedDate";

import "./Post.scss";
import { useState } from "react";

interface IPostProps {
  id: string;
  avatar: string;
  username: string;
  title: string;
  body: string;
  attachment: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Post = ({
  id,
  title,
  body,
  attachment,
  authorId,
  avatar,
  username,
  createdAt,
}: IPostProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);

  return (
    <div className="post">
      <div className="post-container">
        <div className="post-header">
          <div className="post-header-left">
            <img className="post-header-avatar" src={avatar} alt="Avatar" />
            <div className="post-header-info">
              <h3>{username}</h3>
              <p>{makeCreatedDate(createdAt)}</p>
            </div>
          </div>
          <button className="post-header-btn">Подписаться</button>
        </div>
        <div className="post-body">
          <h2 className="post-body-title">{title}</h2>
          {body && <p className="post-body-text">{body}</p>}
        </div>
      </div>
      {attachment && (
        <img className="post-body-img" src={attachment} alt="Post Image" />
      )}
      <div className="post-footer">
        <div className="post-footer-likes" onClick={() => setLiked(!liked)}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          <p>23</p>
        </div>
        <div className="post-footer-comments">
          <FaRegComment />
          <p>7</p>
        </div>
        <div
          className="post-footer-bookmarks"
          onClick={() => setBooked(!booked)}
        >
          {booked ? <BsBookmarkFill /> : <BsBookmark />}
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
