import * as React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import s from "./App.module.scss";
import FeedMenu from "./components/FeedMenu";

function App() {
  return (
    <div>
      <Header />
      <div className={`${s.container} ${s.mainApp}`}>
        <FeedMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
