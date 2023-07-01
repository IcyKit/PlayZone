import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

import "./Post.scss";
import { useState } from "react";

const Post = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);

  return (
    <div className="post">
      <div className="post-container">
        <div className="post-header">
          <div className="post-header-left">
            <img
              className="post-header-avatar"
              src="https://ctv.by/sites/default/files/inarticle/kak_seychas_zhivyot_leonid_kuravlyov_4_15012021.jpg"
              alt="Avatar"
            />
            <div className="post-header-info">
              <h3>Жорж Милославский</h3>
              <p>08:29</p>
            </div>
          </div>
          <button className="post-header-btn">Подписаться</button>
        </div>
        <div className="post-body">
          <h2 className="post-body-title">Про сны</h2>
          <p className="post-body-text">
            Проснулся сегодня от сильного наития, что нужно открыть
            фотокарточки. Открываю, а там на первой же странице это! Приснится
            же такое...
          </p>
        </div>
      </div>
      <img
        className="post-body-img"
        src="https://s.ura.news/760/images/news/upload/news/461/233/1052461233/5d24594ca51c28151d5412829eed7eda_250x0_488.307.0.0.jpg"
        alt="Post Image"
      />
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
