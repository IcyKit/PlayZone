import * as React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import makeCreatedDate from "../../helpers/makeCreatedDate";
import { Button } from "@nextui-org/react";

import s from "./Post.module.scss";
import { useState } from "react";

interface IPostProps {
  id: string;
  avatar: string | null;
  username: string;
  title: string;
  body: string | null;
  attachment: string | null;
  authorId?: string;
  createdAt: Date;
  updatedAt?: Date;
}

const Post: React.FC<IPostProps> = ({
  // id,
  title,
  body,
  attachment,
  // authorId,
  avatar,
  username,
  createdAt,
}: IPostProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);

  return (
    <div className={s.post}>
      <div className={s.postContainer}>
        <div className={s.postHeader}>
          <div className={s.postHeaderLeft}>
            <img
              className={s.postHeaderAvatar}
              src={avatar ? avatar : ""}
              alt="Avatar"
            />
            <div className={s.postHeaderInfo}>
              <h3>{username}</h3>
              <p>{makeCreatedDate(createdAt)}</p>
            </div>
          </div>
          <Button radius={"sm"} size={"sm"} color={"default"}>
            Подписаться
          </Button>
        </div>
        <div className={s.postBody}>
          <h2 className={s.postBodyTitle}>{title}</h2>
          {body && <p className={s.postBodyText}>{body}</p>}
        </div>
      </div>
      {attachment && (
        <img className={s.postBodyImg} src={attachment} alt="Post Image" />
      )}
      <div className={s.postFooter}>
        <div className={s.postFooterLikes} onClick={() => setLiked(!liked)}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          <p>23</p>
        </div>
        <div className={s.postFooterComments}>
          <FaRegComment />
          <p>7</p>
        </div>
        <div
          className={s.postFooterBookmarks}
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
