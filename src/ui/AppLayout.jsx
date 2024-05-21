import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen  w-full   flex-col bg-background-main">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
