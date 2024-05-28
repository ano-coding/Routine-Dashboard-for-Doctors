import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useRef } from "react";
import useSidebarToggle from "../hooks/useSidebarToggle";
import useWindowSize from "../hooks/useWindowSize";

const AppLayout = () => {
  const ref = useRef();
  const size = useWindowSize();

  const isMobile = size.width <= 768;

  const { isSidebarOpen } = useSidebarToggle();

  const height = ref.current?.getBoundingClientRect().height || "80dvh";

  return (
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
        <div
          className={`h-full w-full overflow-auto ${isSidebarOpen && isMobile ? " opacity-0 transition-all duration-150" : ""}`}
          style={{ scrollbarWidth: "thin" }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
