const PatientProfile = () => {
  const PATIENT_DETAILS = {
    name: "Williams Stephin",
    avatar: "person3.png",
    gender: "Male",

    otherDetails: [
      {
        label: "Age",
        value: "34",
      },

      {
        label: "Height",
        value: "5’10 ft",
      },
      {
        label: "Weight",
        value: "74 kg",
      },
      {
        label: "Sleep Pattern",
        value: "Better not good",
      },
      {
        label: "General Concerns",
        value: "Back pain, Migraine",
      },
    ],
  };

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

  return (
    <section
      className={` mx-auto flex h-full max-w-7xl flex-col gap-[2.5rem]   rounded-xl  px-5  `}
    >
      <div className="-mb-5  flex w-full  gap-[10px]   font-poppins text-[15px] font-medium leading-[22.5px] text-darkOliveGreen-dark">
        <div className=" font-semibold leading-[22.5px]">My Video call</div>
      </div>
      <div className=" flex w-full  items-center justify-center rounded-t-xl bg-white py-10">
        <div className="mx-auto flex flex-col gap-[1.875rem] overflow-hidden px-2">
          {/* Profile Summary */}
          <div className="custom-scrollbar box-border flex w-full select-none items-center gap-[50px] overflow-auto rounded-2xl border-[0.5px] border-solid border-neutral-300  p-5">
            <div className="flex  items-center  gap-[10px]">
              <img
                className="h-10 w-10  rounded-[15px] object-cover"
                alt=""
                src={`/${PATIENT_DETAILS.avatar}`}
              />
              <div className="flex flex-col gap-[5px]">
                <div className="whitespace-nowrap font-poppins text-[14px] font-medium leading-[16.8px] text-black">
                  Williams Stephin
                </div>
                <div className="font-poppins text-[12px] font-medium leading-[18px]  text-neutral-400">
                  {PATIENT_DETAILS.gender}
                </div>
              </div>
            </div>
            {/* Other Details */}
            {PATIENT_DETAILS.otherDetails.map((detail, i) => (
              <div
                key={detail.label}
                className={`flex flex-col items-end  gap-[4px] ${PATIENT_DETAILS.otherDetails.length === i + 1 ? "" : `border-r-[0.5px] border-solid border-neutral-300 pr-5`}`}
              >
                <div className="whitespace-nowrap font-poppins text-[12px] font-medium leading-[18px] text-neutral-400">
                  {detail.label}
                </div>
                <div className="whitespace-nowrap font-poppins text-[12px] font-medium leading-[18px] text-black">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
          {/* Concerns & Explanations */}
          <div className="flex items-start justify-center gap-7">
            <div className="relative w-[200px] rounded-[10px] border-2 border-gray-300 px-3 py-2 shadow-sm ">
              <label
                htmlFor="concerns"
                className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 font-poppins text-[12px] font-medium leading-[18px] text-neutral-500"
              >
                Current Concerns
              </label>

              <input
                type="text"
                name="name"
                id="name"
                className="block  border-0 p-0 py-1  font-poppins text-[16px] leading-[21px] text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Knee Pain"
              />
            </div>

            <textarea
              rows={4}
              name="comment"
              className="custom-scrollbar h-16 w-[28.5rem] rounded-[10px] border-2 border-gray-300 font-poppins text-[12px] leading-[21px] shadow-sm placeholder:font-poppins focus:border-gray-300 focus:outline-none focus:ring-0 sm:text-sm"
              placeholder={`Explain “${PATIENT_DETAILS.name}” about the Concern`}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <div className="font-poppins text-[16px] leading-[21px] text-black">
          Assign a routine to Williams? Assign through your pre build Routines
        </div>
        {/* Featured Routine Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ROUTINE.map((routine) => (
            <div
              key={routine.title}
              className="flex max-w-lg justify-between gap-4 rounded-2xl bg-white px-5 py-[0.625rem] lg:max-w-full"
            >
              <img
                src={`/${routine.image}`}
                className=" h-[7.5rem] w-[5rem] rounded-lg object-cover lg:w-[7.25rem]"
              />
              <div className="flex flex-1 flex-col  ">
                <div className="gap flex flex-1 flex-col gap-[0.65rem]">
                  <h1 className="whitespace-nowrap font-nunito text-lg font-bold leading-[28px] tracking-[-0.01em] text-darkslategray-darkest xl:text-[24px]">
                    {routine.title}
                  </h1>
                  <div className="flex  items-center gap-[10px]">
                    <img src="/invoice.svg" />
                    <span className="flex-1 whitespace-nowrap font-nunito text-[14px] leading-[20px] text-dimgray ">
                      {`${routine.reminders} reminder items`}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <button className="w-full flex-1 whitespace-nowrap rounded-lg border-[1.5px] border-solid border-darkOliveGreen-dark  py-[9px] text-center font-nunito text-base font-semibold leading-[20px] tracking-[-0.01em] text-darkOliveGreen-dark shadow-sm shadow-darkOliveGreen-dark">
                    Assign Routine
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <div className="font-poppins text-[16px] leading-[21px] text-black">
          Unable to find a perfect routine for Williams?
        </div>
        <button className="box-border rounded-md bg-darkOliveGreen-dark px-6 py-2  text-center font-poppins text-[14px]  leading-[21px] text-white">
          Create a new routine
        </button>
        <div className="mt-2 text-center font-poppins text-[14px] font-medium leading-[21px] text-darkOliveGreen-dark">
          Learn more about routine
        </div>
      </div>
    </section>
  );
};

export default PatientProfile;
