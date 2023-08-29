import React, { useState } from "react";
import s from "./FeedMenu.module.scss";
import { AiOutlineFire, AiOutlineCheck } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface IFeedMenu {
  title: string;
  icon: React.JSX.Element;
  link: string;
  isActive: boolean;
}

const FeedMenu = () => {
  const [feedMenu, setFeedMenu] = useState<IFeedMenu[]>([
    {
      title: "Популярное",
      icon: <AiOutlineFire />,
      link: "/",
      isActive: true,
    },
    {
      title: "Подписки",
      icon: <AiOutlineCheck />,
      link: "/feed/subs",
      isActive: false,
    },
    {
      title: "Закладки",
      icon: <BsBookmarkCheck />,
      link: "/feed/bookmarks",
      isActive: false,
    },
  ]);

  const itemClickHandle = (idx: number) => {
    const newMenu = feedMenu.map((i) => {
      return {
        ...i,
        isActive: false,
      };
    });
    newMenu[idx].isActive = true;
    setFeedMenu(newMenu);
  };

  return (
    <div className={s.menu}>
      <div className={s.items}>
        {feedMenu.map((i: IFeedMenu, idx) => (
          <Link to={i.link}>
            <div
              className={`${s.item} ${i.isActive ? s.active : ""}`}
              onClick={() => itemClickHandle(idx)}
              key={idx}
            >
              {i.icon}
              <h2>{i.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Button className={"w-full h-[44px]"}>Новая запись</Button>
    </div>
  );
};

export default FeedMenu;
