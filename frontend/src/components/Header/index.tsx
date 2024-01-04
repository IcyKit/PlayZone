import * as React from "react";
import { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import Dropdown from "../Dropdown";
import { IDropdownList } from "../../types/DropdownList";

const Header: React.FC = observer(() => {
  const [logged, setLogged] = useState(true);

  const DropdownList: IDropdownList[] = [
    { title: "Профиль", link: "/profile" },
    { title: "Настройки", link: "/settings" },
    {
      title: "Выйти",
      link: "/",
      color: "danger",
      className: "text-danger",
    },
  ];

  return (
    <div className={s.header}>
      <div className={`${s.container} ${s.headerContainer}`}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <input className={s.input} type="text" placeholder="Поиск" />
        {logged ? (
          <div className={s.avatar}>
            <img className={s.img} src={UserStore.user.avatar} />
            <Dropdown DropdownList={DropdownList} />
          </div>
        ) : (
          <div className={s.auth}>
            <Link to={"login"}>
              <button className={s.login}>Войти</button>
            </Link>
            <Link to={"register"}>
              <button className={s.register}>Регистрация</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default Header;
