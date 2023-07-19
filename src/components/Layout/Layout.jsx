import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
