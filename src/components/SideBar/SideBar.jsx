import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col items-start absolute -left-2 w-30 h-screen min-h-screen top-0 z-10 sidebardiv">
        <Link className="block mt-5 logo" to="/">
          <span className="text-3xl ml-5">🐼</span>
        </Link>
        <nav className="pt-8">
          <ul className="flex flex-col gap-y-24">
            <li className="transform -rotate-90">
              <NavLink exact to="/" activeclassname="active-link">
                Home
              </NavLink>
            </li>
            <li className="transform -rotate-90">
              <NavLink to="/Lebao" activeclassname="active-link">
                Lebao
              </NavLink>
            </li>
            <li className="transform -rotate-90">
              <NavLink to="/Aibao" activeclassname="active-link">
                Aibao
              </NavLink>
            </li>
            <li className="transform -rotate-90">
              <NavLink to="/Fubao" activeclassname="active-link">
                Fubao
              </NavLink>
            </li>
            <li className="transform -rotate-90">
              <NavLink to="/Twins" activeclassname="active-link">
                Bao twins
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-screen min-h-screen border-l border-black absolute top-0 left-14 z-10"></div>
    </>
  );
};

export default SideBar;
