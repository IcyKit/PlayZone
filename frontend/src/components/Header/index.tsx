import { useState } from "react";
import Logo from "../Logo";

import "./Header.scss";

const Header = () => {
  const [logged, setLogged] = useState(true);

  return (
    <div className="header">
      <div className="container header-container">
        <Logo />
        <input className="header-input" type="text" placeholder="Поиск" />
        {logged ? (
          <div className="header-avatar">
            <img
              className="header-img"
              src="https://sun9-29.userapi.com/impg/_yq28Yg6Oczo_wqZ4-acZxkkr9AQ9pUDVkm-lw/IoOXEyNoDUc.jpg?size=1915x1915&quality=95&sign=6e7b3e91751219d849a38fd2ebeb18f5&type=album"
            />
            <svg fill="#fff" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml: space="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
          </div>
        ) : (
          <button className="header-login">Войти</button>
        )}
      </div>
    </div>
  );
};

export default Header;
