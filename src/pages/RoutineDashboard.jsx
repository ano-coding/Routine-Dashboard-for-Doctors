import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const FILTERS = [
  {
    label: "All",
    icon: "all",
  },
  {
    label: "Created by You",
    icon: "game-icon",
  },

  {
    label: "Imported Templates",
    icon: "tree",
  },
  {
    label: "Based on products",
    icon: "tree",
  },
  {
    label: "Based on Activities",
    icon: "tree",
  },
  {
    label: "Based on Concerns",
    icon: "tree",
  },
  {
    label: "Most Popular",
    icon: "tree",
  },
];

const patients = [
  {
    name: "Andrea Lalema",
    avatar: "person1.png",
    gender: "female",
    date: "19 OCT, 2024",
    time: "04 : 10 PM",
    type: "Video Call",
    concerns: "Knee Pain",
    id: "1",
  },
  {
    name: "Smith Bruklin",
    avatar: "person2.png",
    gender: "male",
    date: "19 OCT, 2024",
    time: "05 : 10 PM",
    type: "Chat",
    concerns: "Headache",
    id: "2",
  },
  {
    name: "William Stephin",
    avatar: "person3.png",
    gender: "female",
    date: "18 OCT, 2024",
    time: "06 : 10 PM",
    type: "Offline",
    concerns: "Stomachache",
    id: "3",
  },
];

const ROUTINE = [
  {
    title: "Skin Care Routine",
    reminders: 5,
    image: "skin-care.jpg",
  },
  {
    title: "Focus & Work",
    reminders: 3,
    image: "focus-work.jpg",
  },
];

const RoutineDashboard = () => {
  const [filterName, setFilterName] = useState("All");
  return (
    <div
      className={` mx-auto mt-1 flex max-w-7xl flex-col  gap-[1.9rem]  px-5  `}
    >
      <span className="font-poppins text-[15px] font-medium leading-[22.5px] text-darkOliveGreen-dark">
        Routine
      </span>
      {/* Filters */}
      <div className="flex  select-none flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <div
            onClick={() => setFilterName(filter.label)}
            className={`group flex items-center justify-center gap-1 rounded-lg border-[1.8px] border-solid border-darkslategray-light px-4 py-2.5 hover:border-gray-300 hover:shadow-sm ${filterName === filter.label ? "bg-darkOliveGreen-dark" : ""}`}
            key={filter.label}
          >
            <img className=" h-3.5 w-full" src={`/${filter.icon}.svg`} />
            <span
              className={`whitespace-nowrap  font-dm-sans text-[14px] font-medium tracking-[-0.02em]   ${filterName === filter.label ? "text-white" : "text-darkslategray-200"}`}
            >
              {filter.label}
            </span>
          </div>
        ))}
      </div>
      {/* Featured Routine Cards */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {ROUTINE.map((routine) => (
          <div
            key={routine.title}
            className="flex max-w-lg justify-between gap-4 rounded-2xl bg-white px-5 py-[0.625rem] lg:max-w-full"
          >
            <img
              src={`/${routine.image}`}
              className=" h-[12.1rem] w-32 rounded-lg object-cover transition-all duration-500 hover:opacity-80 lg:w-[12.1rem]"
            />
            <div className="flex flex-1 flex-col  ">
              <div className="gap flex flex-1 flex-col gap-[0.875rem]">
                <h1 className="whitespace-nowrap font-nunito text-lg font-bold leading-[28px] tracking-[-0.01em] text-darkslategray-darkest xl:text-[24px]">
                  {routine.title}
                </h1>
                <div className="flex  items-center gap-[10px]">
                  <img src="/invoice.svg" />
                  <span className="flex-1 whitespace-nowrap font-nunito text-[14px] leading-[20px] text-dimgray ">
                    {`${routine.reminders} reminder items`}
                  </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <span className="font-nunito text-[14px] leading-[20px] tracking-[-0.01em] text-darkOliveGreen-dark">
                    Followed by
                  </span>
                  <div className="flex gap-2">
                    <div className="flex -space-x-1 overflow-hidden">
                      <img
                        className="h-5 w-5 rounded-full ring-2 ring-white hover:z-50"
                        src="/person1.png"
                        alt="person"
                      />
                      <img
                        className="h-5 w-5 rounded-full ring-2 ring-white hover:z-50"
                        src="/person2.png"
                        alt="person"
                      />
                      <img
                        className="h-5 w-5 rounded-full ring-2 ring-white hover:z-50"
                        src="/person3.png"
                        alt="person"
                      />
                    </div>
                    <span className="flex-1 whitespace-nowrap font-nunito text-[12px] leading-[20px] tracking-[-0.01em] text-dimgray">
                      and 49 others
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-3/4">
                <button className="w-full flex-1 whitespace-nowrap rounded-lg border-[1.5px] border-solid border-darkOliveGreen-dark  py-[12px] text-center font-nunito text-base font-semibold leading-[20px] tracking-[-0.01em] text-darkOliveGreen-800 shadow-sm  shadow-darkOliveGreen-200 duration-100  hover:bg-whitesmoke-100 active:scale-95">
                  Edit Routine
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Add New Routine Button */}
      <Link className="mx-auto" to={`add`}>
        <button className="box-border rounded-md bg-darkOliveGreen-dark px-6 py-2  text-center font-poppins text-[14px] leading-[21px] text-white shadow-sm shadow-neutral-500 duration-100 hover:bg-darkOliveGreen-800 active:scale-95 ">
          Add New Routine
        </button>
      </Link>
      {/* Next Section */}
      <div className="mb-5 flex flex-col gap-10 overflow-hidden rounded-xl bg-white p-5">
        <div className="flex items-center justify-between gap-7 pr-2">
          <div className="flex items-center gap-5">
            <span className="font-poppins text-[16px] font-semibold leading-[21.6px] text-black">
              Patients yet to assign a routine
            </span>
            <div className="hover:bg-darkslateblue-medium group hidden h-[37px] items-center  justify-start gap-2 rounded-xl bg-darkslateblue-light px-3 md:flex">
              <img src="/search-icon.svg" alt="Search Icon" />
              <input
                className="group-hover:bg-darkslateblue-medium w-64 border-none  bg-transparent px-2  py-1  font-poppins text-[14px] font-medium   leading-5 text-darkOliveGreen-dark placeholder-darkOliveGreen-200  focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0"
                placeholder="Search Here"
              />
            </div>
            <button className="group flex h-[37px] w-[37px]  items-center justify-center rounded-xl bg-darkslateblue-light transition-all duration-150 hover:bg-neutral-200 active:scale-90">
              <ReactSVG
                className="icon-hover-effect active:scale-95"
                src="/re-fresh.svg"
              />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="group flex h-[37px] w-[37px]  items-center justify-center rounded-xl bg-darkslateblue-light transition-all duration-150 hover:bg-neutral-200 active:scale-90">
              <ReactSVG
                className="icon-hover-effect active:scale-95"
                src="/sort.svg"
              />
            </button>

            <button className="group flex h-[37px] w-[37px]  items-center justify-center rounded-xl bg-darkslateblue-light transition-all duration-150 hover:bg-neutral-200 active:scale-90">
              <ReactSVG
                className="icon-hover-effect active:scale-95"
                src="/filter.svg"
              />
            </button>
          </div>
        </div>
        {/* Patients Table */}
        <div className="flex flex-col overflow-hidden">
          <div className="custom-scrollbar -my-3 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden ">
                <table className="min-w-full select-none ">
                  <thead>
                    <tr>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Checkbox</span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-poppins text-[13px] font-medium capitalize"
                      >
                        Concerns
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Link</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white">
                    {patients.map((patient) => (
                      <tr
                        key={patient.name}
                        className="group font-poppins transition-all duration-150 hover:bg-neutral-100"
                      >
                        <td className="pl-4">
                          <input
                            id="checkbox"
                            type="checkbox"
                            className="mb-3 h-4 w-4 rounded border-gray-400 checked:text-darkOliveGreen-dark
                            hover:text-darkOliveGreen-dark focus:ring-0  focus:ring-offset-0"
                          />
                        </td>
                        <td className="flex items-center gap-2 whitespace-nowrap px-6 py-3 text-xs  ">
                          <img
                            className="h-7 shrink-0 overflow-hidden rounded-[14px] object-cover"
                            src={`/${patient.avatar}`}
                          />
                          {patient.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-xs ">
                          {patient.gender}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-xs ">
                          {patient.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-xs ">
                          {patient.time}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-xs ">
                          {patient.type}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-xs ">
                          {patient.concerns}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium">
                          <Link
                            to={`/patient/${patient.id}`}
                            className="flex h-[37px] w-[37px] items-center  justify-center rounded-xl bg-darkslateblue-light transition-all duration-150 active:scale-90 group-hover:bg-neutral-300"
                          >
                            <img
                              src="/right-arrow.svg"
                              alt="Right Arrow Icon"
                            />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineDashboard;
