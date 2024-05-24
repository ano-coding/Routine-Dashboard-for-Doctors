import { useRef, useState } from "react";
import SimpleDropDownComponent from "../components/DropDownComponent";

const THUMBNAILS = [
  "hair-care-1.jpg",
  "hair-care-2.jpg",
  "hair-care-3.jpg",
  "hair-care-4.jpg",
  "hair-care-5.jpg",
];

const CreateRoutine = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState();

  // Add Bullet point on Tab key press
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setValue(value + "\n•   "); // Add bullet point and new line
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section
      className={` mx-auto flex h-full max-w-7xl flex-col gap-[1.9rem]   rounded-xl  px-5  `}
    >
      <div className="flex  w-full  gap-[10px]   font-poppins text-[15px] font-medium leading-[22.5px] text-darkOliveGreen-dark">
        <div className="font-medium  leading-[22.5px] text-neutral-500">
          Routine
        </div>
        <div className=" text-[20px] font-medium leading-[22.5px]">{`<`}</div>
        <div className=" font-semibold leading-[22.5px]">
          Create New Routine
        </div>
      </div>
      <div className="mb-2 flex w-full flex-col gap-10 rounded-xl bg-white px-5 py-4 lg:pr-16">
        <div className="font-poppins text-[22px] text-black">
          Create Routine
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative rounded-[16px]  border-[1.5px] border-blue-ice px-3 py-2 shadow-sm md:w-[400px]">
            <label
              htmlFor="concerns"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 font-poppins text-[12px]  leading-[16px] text-neutral-400"
            >
              Routine Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 py-1.5 font-poppins text-[16px] leading-[24px] text-black placeholder-neutral-400 focus:ring-0"
              placeholder="Hair Care Routine"
            />
          </div>
          <div className="w-full pl-3 font-poppins text-[12px] leading-[16px] text-neutral-400">
            This will be displayed as your Routine name.
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="h-[210px] w-[210px]  shrink-0 rounded-2xl bg-[url('/uploader.svg')] bg-center  bg-no-repeat">
              <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] font-poppins text-[14px] text-black">
                <img
                  className="h-[52px] w-[52px] shrink-0 overflow-hidden"
                  alt="Photo Frame"
                  src="/photo-frame.svg"
                />
                <div className="">Upload Image</div>
              </div>
            </div>
            <div className=" flex items-center gap-[8px]  font-dm-sans  text-[14px] sm:flex-col">
              <div className="h-[0.8px] w-[71px] bg-darkOliveGreen-200 sm:h-[71px] sm:w-[0.8px]" />
              <div className="font-medium leading-[24px] tracking-[-0.01em] text-neutral-500">
                OR
              </div>
              <div className="h-[0.8px] w-[71px] bg-darkOliveGreen-200 sm:h-[71px] sm:w-[0.8px]" />
            </div>
            <div className="flex flex-col  gap-[14px]">
              <div className=" whitespace-nowrap font-poppins text-[14px] leading-[12px] text-neutral-700">
                Select from our picks
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-[15px]">
                {THUMBNAILS.map((thumbnail) => (
                  <span
                    key={thumbnail}
                    onClick={() => setSelectedThumbnail(thumbnail)}
                    className={`relative z-10 box-border shrink-0  cursor-pointer rounded-lg border-[0.14rem] border-solid ${selectedThumbnail === thumbnail ? ` border-darkOliveGreen-dark` : "border-transparent"}`}
                  >
                    <img
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                      alt=""
                      src={`/${thumbnail}`}
                    />
                    {selectedThumbnail === thumbnail && (
                      <span className="absolute right-0 top-0 z-50 block h-[14px] w-[14px] -translate-y-1/2 translate-x-1/2 transform bg-[url(/checked.svg)] " />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 w-full pl-3 font-poppins text-[12px] leading-[16px] text-neutral-400 sm:mt-0">
            This will be displayed as your Routine thumbnail.
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex w-[400px] flex-col gap-8">
            <div className="flex flex-col gap-1">
              <SimpleDropDownComponent
                list={[
                  "Lifestyle",
                  "Fitness",
                  "Health",
                  "Beauty",
                  "Meditation",
                ]}
                label="Category"
                mdWidth={"w-[400px]"}
                placeholder={"Example: Lifestyle, Fitness, etc."}
              />
              <div className="w-full pl-3 font-poppins text-[12px] leading-[16px] text-neutral-400">
                Please select the category of your Routine.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <SimpleDropDownComponent
                label={`Duration`}
                list={Array.from({ length: 7 }, (_, i) => i + 1)}
                placeholder={"1"}
              />
              <SimpleDropDownComponent
                label={`Unit`}
                list={["Days", "Weeks", "Months"]}
                placeholder={"Weeks"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="relative w-[400px]  rounded-[16px] border-[1.5px] border-blue-ice px-3 py-2 shadow-sm">
              <label
                htmlFor="description"
                className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 font-poppins text-[12px]  leading-[16px] text-neutral-400"
              >
                Description
              </label>

              <textarea
                // ref={textareaRef}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onBeforeInput={() => {
                  if (value === "") setValue("•   ");
                }}
                value={value}
                rows={6}
                type="text"
                name="description"
                id="description"
                className="custom-scrollbar block w-full border-0  p-0 py-1.5 pl-1 font-poppins text-[14px] leading-[24px] text-black placeholder-neutral-400  placeholder:text-sm focus:ring-0"
              />
            </div>
            <div className="w-full pl-3 font-poppins text-[12px] leading-[16px] text-neutral-400">
              Please add at least 3 pointers about the Routine.
            </div>
          </div>
        </div>
        <div className="h-96"></div>
      </div>
    </section>
  );
};

export default CreateRoutine;
