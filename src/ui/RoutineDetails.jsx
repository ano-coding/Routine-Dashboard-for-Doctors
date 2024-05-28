import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const ROUTINE = {
  name: "Skin Care Routine",
  import: 753,
  description:
    "200 words description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur libero autem, necessitatibus dolorem eos ullam ab, voluptates iusto enim animi, in culpa magni hic. Aut neque necessitatibus ipsam In.",
  summary: [
    {
      label: "Weeks",
      icon: "calendar.svg",
      value: "12",
    },

    {
      label: "Type",
      icon: "group.svg",
      value: "Beauty",
    },

    {
      label: "Created",
      icon: "bulb.svg",
      value: "Amrutam",
    },
  ],
  reminders: [
    {
      title: "Amrutam Nari Sondarya Malt",
      tag: "Consumable",
      days: ["Monday", "Wednesday", "Friday"],
      time: ["10 AM", "3 PM", "9 PM"],
    },

    {
      title: "Amrutam Nari Sondarya Malt",
      tag: "Consumable",
      days: ["Monday", "Wednesday", "Friday"],
      time: ["10 AM", "3 PM", "9 PM"],
    },
  ],
};

const ReminderCard = ({ reminder }) => {
  const { title, tag, days, time } = reminder;

  return (
    <div className="flex w-96 items-center rounded-[20px] border px-5 py-4">
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="font-dm-sans text-[16px] font-medium tracking-[-0.02em] text-black">
          {title}
        </h2>
        <span className=" w-fit rounded-[64px] bg-darkOliveGreen-175 p-[10px] py-2 font-dm-sans text-[14px] tracking-[-0.02em] text-darkslategray-100">
          {tag}
        </span>
        <div className="flex items-center gap-[12px]">
          <img className="h-[15.4px]" src="/calendar.svg" alt="calendar" />
          {days.map((day, i) => (
            <div
              key={day}
              className={`flex items-center font-dm-sans text-[12px] font-medium tracking-[-0.02em] text-darkslategray-100`}
            >
              <span>{day}</span>
              <span
                className={`${days.length >= i + 2 && `border-spacing-6 border-r border-neutral-300 pr-3`} inline-block h-[13px]`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[12px]">
          <img className="h-[15.4px]" src="/clock.svg" alt="clock" />
          {time.map((t, i) => (
            <div
              key={t}
              className={`flex items-center font-dm-sans text-[12px] font-medium tracking-[-0.02em] text-darkslategray-100`}
            >
              <span>{t}</span>
              <span
                className={`${time.length >= i + 2 && `border-spacing-6 border-r border-neutral-300 pr-3`} inline-block h-[13px]`}
              />
            </div>
          ))}
        </div>
      </div>
      <img src="/right-arrow-spread.svg" alt="Right Arrow" />
    </div>
  );
};

const RoutineDetails = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <section
      className={`mx-auto mb-5 flex min-h-full max-w-7xl flex-col  items-center gap-[1.9rem] rounded-xl  px-5`}
    >
      <Breadcrumb list={["Routine", "Routine Details"]} />
      <div className="flex w-full flex-col gap-8 rounded-xl bg-white px-5 py-4 lg:pr-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <img
            className="aspect-square h-[22.315rem] shrink-0 rounded-[20.88px] object-cover"
            src="/routine-thumbnail.jpg"
          />
          <div className="mt-3 flex flex-col gap-4">
            <span className="-mb-2 font-poppins text-[18px] font-semibold tracking-[-0.02em]">
              {ROUTINE.name}
            </span>
            <div className="flex flex-row gap-4 md:flex-col lg:flex-row lg:items-center">
              <div className="flex items-center gap-2 border-r border-solid border-darkslategray-100 pr-2 md:border-0 lg:border-r">
                <img className="h-[18px]" src="/heart.svg" alt="Heart" />
                <div className="flex gap-2">
                  <div className="flex -space-x-0.5 overflow-hidden">
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src="/person1.png"
                      alt="person"
                    />
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src="/person2.png"
                      alt="person"
                    />
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src="/person3.png"
                      alt="person"
                    />
                  </div>
                  <span className="whitespace-nowrap font-dm-sans text-[14px] leading-[20px] tracking-[-0.01em] text-darkslategray-100">
                    and liked by 49 others
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[17px]" src="/import.svg" alt="Imports" />
                <span className="whitespace-nowrap font-dm-sans text-[14px] leading-[20px] tracking-[-0.01em] text-darkslategray-100">
                  {`${ROUTINE.import || 0} Imports`}
                </span>
              </div>
            </div>
            <div className="flex justify-between rounded-[20px] border-[1px] border-solid border-neutral-200 px-3 py-4 shadow-sm lg:w-[500px]">
              {ROUTINE.summary.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex gap-[6px] ${ROUTINE.summary.length >= i + 2 ? `border-r border-solid border-neutral-200 pr-6 lg:pr-[58px]` : ""}`}
                >
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%]  bg-darkOliveGreen-175">
                    <img src={`/${item.icon}`} alt={item.label} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-dm-sans text-[12px] tracking-[-0.02em] text-darkslategray-100">
                      {item.label}
                    </div>
                    <div className="font-dm-sans text-[12px] font-semibold tracking-[-0.02em] text-neutral-800">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 font-dm-sans text-[16px] font-medium tracking-[-0.02em] text-neutral-800">
              Description
            </div>
            <div className="cursor-pointer font-dm-sans text-[15px] text-darkslategray-100 lg:w-[555px]">
              <span>
                {isReadMore
                  ? ROUTINE.description
                  : ROUTINE.description.split(" ").slice(0, 35).join(" ") +
                    "..."}
              </span>
              <span
                onClick={() => setIsReadMore((prev) => !prev)}
                className="pl-3 font-bold text-darkOliveGreen-dark"
              >
                {isReadMore ? " Read Less" : " Read More"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:mr-10">
          <div className="flex gap-4">
            <div className=" flex-1 font-dm-sans text-[20px] font-medium tracking-[-0.02em]">
              List of Reminders
            </div>
            <div className="font-dm-sans text-[16px] font-semibold tracking-[-0.02em] text-darkOliveGreen-dark">
              See all
            </div>
          </div>
          <div className="flex flex-wrap gap-10">
            {ROUTINE.reminders.map((reminder, i) => (
              <ReminderCard key={i} reminder={reminder} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:mr-10">
          <div className="flex gap-4">
            <div className=" flex-1 font-dm-sans text-[20px] font-medium tracking-[-0.02em]">
              Weekly Benefits
            </div>
            <div className="font-dm-sans text-[16px] font-semibold tracking-[-0.02em] text-darkOliveGreen-dark">
              See all
            </div>
          </div>
          <div className="font-dm-sans text-[16px] font-medium tracking-[-0.02em]">
            Week 1
          </div>
          <div className="relative grid grid-cols-1  justify-between rounded-[20px]  border border-solid px-[5px] py-[20px] font-nunito text-[13px] leading-[21px] text-black md:ml-9 md:grid-cols-2 lg:ml-20">
            <div className="absolute inset-0 m-auto hidden h-[60%] w-px bg-neutral-300 md:block" />
            <ul className="mb-5 list-outside list-disc pl-10 text-inherit   md:w-[318px]">
              <li>
                <span className="pr-2 font-nunito font-semibold">
                  Improved Hydration:
                </span>
                <span>
                  Your body will be better hydrated, which can lead to increased
                  energy levels.
                </span>
              </li>
            </ul>
            <ul className="list-outside list-disc pl-10 text-inherit md:w-[318px]">
              <li>
                <span className="pr-2 font-nunito font-semibold">
                  Improved Hydration:
                </span>
                <span>
                  Your body will be better hydrated, which can lead to increased
                  energy levels.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="mx-auto my-10 box-border rounded-xl border-[1.5px] border-solid  border-darkOliveGreen-dark px-16  py-[17px]  text-center text-base font-semibold text-darkOliveGreen-dark shadow-md duration-100 hover:bg-whitesmoke-100 active:scale-95 md:w-[23.4rem]
"
        >
          Edit Template
        </button>
      </div>
    </section>
  );
};

export default RoutineDetails;
