import * as React from "react";
import Posts from "../../components/Posts";
import s from "./Home.module.scss";
import FeedMenu from "../../components/FeedMenu";

const Home = () => {
  return (
    <div className={s.home}>
      <Posts />
      <div className={s.temp}></div>
    </div>
  );
};

export default Home;
