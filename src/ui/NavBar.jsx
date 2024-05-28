import { ReactSVG } from "react-svg";
import useSidebarToggle from "../hooks/useSidebarToggle";

export default function NavBar() {
  const { handleSidebarToggle } = useSidebarToggle();
  return (
    <>
      <nav className="mx-auto  w-full  bg-white px-2  lg:px-5">
        <div className="flex h-[4.4rem] items-center justify-between">
          {/* Left Side of Navbar */}
          <div className="flex flex-shrink-0 items-center gap-5 lg:gap-10">
            {/* Main Logo */}
            <img
              className=" h-4 w-auto lg:h-6 "
              src="/amrutam-text-logo.png"
              alt="Amrutam Logo"
            />
            {/* Toggle Button for Sidebar */}
            <ReactSVG
              onClick={handleSidebarToggle}
              className="icon-hover-effect h-6 w-5 duration-100 active:scale-90"
              src="/bar-icon.svg"
              alt="Toggle Sidebar"
            />
            {/* Search Bar */}
            <div className="group hidden h-11 items-center justify-start  gap-2 rounded-xl bg-darkOliveGreen-100 px-3 hover:bg-darkOliveGreen-150 md:flex">
              <img src="/search-icon.svg" alt="Search Icon" />
              <input
                className=" w-52 border-none bg-transparent  px-2 py-1  font-poppins text-[13px] font-medium leading-5 text-darkOliveGreen-dark placeholder-darkOliveGreen-200 focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 group-hover:bg-darkOliveGreen-150"
                placeholder="Search Here"
              />
            </div>
          </div>
          {/* Right Side of Navbar */}
          <div className="flex h-[2.5rem] flex-shrink-0 items-center gap-3 lg:gap-6">
            {/* Inbox */}
            <ReactSVG
              src="/inbox-icon.svg"
              className="icon-hover-effect h-[1.7rem] duration-100 active:scale-90"
            />
            {/* Notification */}
            <ReactSVG
              src="/notification-icon.svg"
              className="icon-hover-effect h-[1.7rem] duration-100 active:scale-90"
            />
            {/* Profile */}
            <div className="hidden items-center justify-between gap-2 lg:flex">
              <div className="flex flex-col justify-between">
                <h2 className="text-right font-poppins text-[1rem] font-semibold leading-[19.2px] text-darkOliveGreen-dark">
                  Dr. Liam Michael
                </h2>
                <span className="text-right  font-poppins text-xs font-medium leading-[20px] text-darkOliveGreen-200">
                  Doctor
                </span>
              </div>
              <img
                src="/profile-icon.png"
                className="h-[2.5rem] w-[2.5rem] rounded-[14px]  bg-cover"
              />
            </div>
            {/* Settings */}
            <ReactSVG
              src="/settings-icon.svg"
              className="icon-hover-effect hidden h-[1.7rem] duration-100 active:scale-90 lg:block"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
