import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SidebarToggleProvider from "../context/SidebarToggleContext";
import { useRef } from "react";

const AppLayout = () => {
  const ref = useRef();

  const height = ref.current?.getBoundingClientRect().height || "80dvh";

  return (
    <SidebarToggleProvider>
      <div className="flex h-screen w-full flex-col bg-background-main">
        <div ref={ref}>
          <NavBar />
        </div>
        <main
          className="mt-5 flex flex-grow overflow-hidden"
          style={{
            height: `calc(100vh - ${height}px)`,
          }}
        >
          <SideBar />
          <div className="h-full flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarToggleProvider>
  );
};

export default AppLayout;
