import { Link } from "react-router-dom";

const AddRoutine = () => {
  return (
    <section
      className={` mx-auto flex h-full max-w-7xl flex-col gap-[1.9rem]   rounded-xl  px-5  `}
    >
      <div className="flex  w-full  gap-[10px]   font-poppins text-[15px] font-medium leading-[22.5px] text-darkOliveGreen-dark">
        <div className="font-medium  leading-[22.5px] text-neutral-500">
          Routine
        </div>
        <div className=" text-[20px] font-medium leading-[22.5px]">{`<`}</div>
        <div className=" font-semibold leading-[22.5px]">Add New Routine</div>
      </div>
      <div className=" mt-1 flex h-3/4 w-full items-center justify-center rounded-xl bg-white">
        <div className="flex w-72 flex-col gap-4">
          <Link
            to={`/routine/create`}
            className="hover:bg-darkOliveGreen-800 whitespace-nowrap rounded-xl bg-darkOliveGreen-dark px-4 py-[10px] text-center font-poppins text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-white duration-100 active:scale-95"
          >
            Create New Routine
          </Link>
          <ul className="ml-2 list-inside list-disc whitespace-nowrap font-poppins text-[15px] leading-[24px] tracking-[-0.01em] text-neutral-500">
            <li>New Personalized templates</li>
            <li>Add upto 7 reminders</li>
          </ul>
          <div className="flex items-center justify-center gap-6">
            <div className="h-0.5 w-[70px] bg-darkOliveGreen-200" />
            <span className="px-1 font-nunito text-[16px] font-semibold leading-[24px] tracking-[-0.01em] text-neutral-500">
              OR
            </span>
            <div className="h-0.5 w-[70px] bg-darkOliveGreen-200" />
          </div>
          <button
            className="hover:bg-whitesmoke-100 whitespace-nowrap rounded-xl border-[1.5px] border-darkOliveGreen-dark px-4 py-[10px] font-poppins text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-darkOliveGreen-dark duration-100 active:scale-95
"
          >
            Duplicate And Edit
          </button>
          <ul className="ml-2 list-inside list-disc whitespace-nowrap font-poppins text-[15px] leading-[24px] tracking-[-0.01em] text-neutral-500">
            <li>Duplicate and edit existing template</li>
            <li>Customize according to your need</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AddRoutine;
