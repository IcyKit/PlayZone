import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
