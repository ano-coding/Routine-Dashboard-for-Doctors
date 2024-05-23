import useSidebarToggle from "../hooks/useSidebarToggle";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    name: "Patients",
    icon: "patient",
    link: "/patients",
  },
  {
    name: "Doctor Schedule",
    icon: "schedule",
    link: "/schedule",
  },
  {
    name: "Appointments",
    icon: "appointment",
    link: "/appointments",
  },
  {
    name: "Chat",
    icon: "chat",
    link: "/chat",
  },
  {
    name: "Consultation",
    icon: "consultation",
    link: "/consultation",
  },
  {
    name: "Payment",
    icon: "payment",
    link: "/payment",
  },
  {
    name: "Routine",
    icon: "routine",
    link: "/routine",
  },
];

const SideBar = () => {
  const { isSidebarOpen } = useSidebarToggle();
  return (
    <aside
      className={` ${isSidebarOpen ? "" : "-ml-60"} flex  h-full w-60 flex-shrink-0 flex-col overflow-hidden rounded-tr-[3rem] bg-white pb-1 pr-[1px] transition-all duration-500 `}
    >
      <div className="custom-scrollbar mt-2  flex h-full flex-col  gap-6 overflow-auto  pl-5">
        <span className="font-poppins text-[15px] font-medium leading-[22.5px] text-darkslategray-dark">
          Main
        </span>
        <nav className="flex flex-col gap-[1.4rem] py-1">
          {sidebarItems.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center  justify-center rounded-lg bg-darkslateblue-light">
                <img
                  className="h-[21px]"
                  alt={item.name}
                  src={`/${item.icon}.svg`}
                />
              </div>
              <span className="font-poppins text-[15px] font-medium leading-[22.5px] text-darkslategray-medium">
                {item.name}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
