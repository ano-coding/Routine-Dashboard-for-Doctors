import { Fragment, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Checkbox } from "@headlessui/react";
import SimpleDropDownComponent from "../components/DropDownComponent";
import SingleLineInput from "../components/SingleLineInput";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import AddMoreButton from "../components/AddMoreButton";
import { Link } from "react-router-dom";

const CustomCheckbox = ({ id }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="reminderType"
      control={control}
      render={({ field }) => (
        <Checkbox
          checked={field.value === id || false}
          onChange={(checked) => field.onChange(checked ? id : "")}
          className="group absolute left-4 top-[41px] size-6 rounded-full border border-solid border-neutral-500 bg-white   p-1  data-[checked]:bg-darkOliveGreen-dark"
        >
          <img
            src="/check-icon.svg"
            className="hidden size-4 group-data-[checked]:block"
          />
        </Checkbox>
      )}
    />
  );
};

const NavigationButtons = ({ step, setStep }) => {
  console.log(step);

  return (
    <div className="mx-auto flex gap-5">
      {step > 1 && (
        <button
          onClick={() =>
            setStep((step) => {
              if (step > 1) return step - 1;
            })
          }
          className={`my-10 box-border rounded-xl border-2 border-darkOliveGreen-dark px-5 py-[17px]  text-center  text-base font-semibold text-darkOliveGreen-dark  shadow-sm duration-100 hover:bg-whitesmoke-100 active:scale-95 md:w-[23.4rem]
          `}
        >
          Back
        </button>
      )}
      <button
        onClick={() => {
          if (step < 3) return setStep((step) => step + 1);
        }}
        className={`my-10 box-border rounded-xl
        bg-darkOliveGreen-dark px-16 py-[17px] text-center text-base   font-semibold  text-white shadow-[0px_4px_14px_rgba(58,_100,_59,_0.25)] duration-100 hover:bg-darkOliveGreen-800 active:scale-95 md:w-[23.4rem] `}
      >
        {`Next (${step}/3)`}
      </button>
    </div>
  );
};

const AddReminder = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  const [step, setStep] = useState(1);
  console.log(step);

  return (
    <section
      className={`mx-auto flex min-h-full max-w-7xl flex-col gap-[1.9rem]   rounded-xl  px-5`}
    >
      <Breadcrumb list={["Routine", "Add New Routine", "Add Reminder"]} />
      <div className="mb-5 flex min-h-[500px]  w-full flex-col rounded-xl bg-white px-5 py-4 lg:pr-16">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex max-w-5xl flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="font-poppins text-[22px] text-black">
                  Add Reminder Items
                </div>
                <ProgressBar step={step} />
              </div>
              {step === 1 && <FirstStage />}

              {step === 2 && methods.watch("reminderType") === "activity" && (
                <ActivityDetails />
              )}
              {step === 3 && methods.watch("reminderType") === "activity" && (
                <TimeSlot />
              )}
              {step === 2 && methods.watch("reminderType") === "product" && (
                <ProductDetails />
              )}
              {step === 3 && methods.watch("reminderType") === "product" && (
                <ProductTimeSlot />
              )}
              <NavigationButtons step={step} setStep={setStep} />
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default AddReminder;

const ProgressBar = ({ step }) => {
  return (
    <div className="flex w-full items-center gap-[17px]">
      <div
        className={`h-[5px] w-[295.3px] rounded ${step >= 1 ? "bg-darkOliveGreen-dark" : `bg-[#D9D9D9]`}`}
      />
      <div
        className={`h-[5px] w-[295.3px] rounded ${step >= 2 ? "bg-darkOliveGreen-dark" : `bg-[#D9D9D9]`}`}
      />
      <div
        className={`h-[5px] w-[295.3px] rounded ${step >= 3 ? "bg-darkOliveGreen-dark" : `bg-[#D9D9D9]`}`}
      />{" "}
    </div>
  );
};

const FirstStage = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        <div className="font-dm-sans text-[14px] leading-[16px] text-neutral-800">
          Select Reminder Type
        </div>
        <div className="flex max-w-5xl flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="relative">
            <CustomCheckbox id="product" />
            <img className="w-[342px]" src="/product-based.png" />
          </div>
          <div className=" flex items-center gap-[8px]  font-dm-sans  text-[14px] lg:flex-col">
            <div className="h-[0.8px] w-[40px] bg-darkOliveGreen-200 lg:h-[40px] lg:w-[0.8px]" />
            <div className="font-medium leading-[24px] tracking-[-0.01em] text-neutral-500">
              OR
            </div>
            <div className="h-[0.8px] w-[40px] bg-darkOliveGreen-200 lg:h-[40px] lg:w-[0.8px]" />
          </div>
          <div className="relative">
            <CustomCheckbox id="activity" />
            <img className="w-[342px]" src="/activity-based.png" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const ActivityDetails = () => {
  const { watch } = useFormContext();
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="font-dm-sans text-[14px] leading-[16px] text-neutral-800">
        Enter Activity Details
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center  justify-between gap-5 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col gap-1 md:w-fit">
          <SimpleDropDownComponent
            label="Activity Name"
            list={[
              "Drinking Water",
              "Walking",
              "Running",
              "Exercise",
              "Medication",
              "Yoga",
            ]}
            mdWidth="w-[400px]"
            placeholder="Select Activity"
          />
          <div className="ml-5 font-poppins text-[12px] font-medium leading-[16px] text-darkOliveGreen-dark">
            Unable to find activity? Add your Activity
          </div>
        </div>
        <SimpleDropDownComponent
          label="Activity Type"
          list={["Physical", "Spiritual"]}
          mdWidth="w-[400px]"
          placeholder="Select Activity Type"
          className={`w-full`}
        />
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center  justify-between gap-5 lg:flex-row lg:items-start">
        <div className="grid w-full grid-cols-2 gap-10 md:w-[400px]">
          <SingleLineInput label="Quantity" />
          <SingleLineInput label="Unit" />
        </div>
        <div className="flex w-full flex-col gap-[30px] md:w-[400px]  lg:items-end">
          <div className="flex w-[400px]  gap-12 pl-3">
            <CustomRadioButton
              name="activity-frequency"
              id="daily"
              label="Daily"
            />
            <CustomRadioButton
              name="activity-frequency"
              id="custom-days"
              label="Custom Days"
            />
          </div>
          <div className="w-full">
            {watch("activity-frequency") === "custom-days" && <SelectDays />}
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductDetails = () => {
  const { watch } = useFormContext();
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="font-dm-sans text-[14px] leading-[16px] text-neutral-800">
        Enter Product Details
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center  justify-between gap-5 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col gap-1 md:w-fit">
          <SimpleDropDownComponent
            label="Product Name"
            list={[
              "Amrutam Skinkey Malt",
              "Amrutam Skinkey Body Oil",
              "Amrutam Skinkey Face Clean",
              "Amrutam Nari Sondarya Malt",
            ]}
            mdWidth="w-[400px]"
            placeholder="Select Product"
          />
          <Link to="product-details">
            <div className="ml-5 font-poppins text-[12px] font-medium leading-[16px] text-darkOliveGreen-dark">
              Unable to find product? Add your Product
            </div>
          </Link>
        </div>
        <SimpleDropDownComponent
          label="Product Type"
          list={["Consumable", "Non-Consumable"]}
          mdWidth="w-[400px]"
          placeholder="Select Product Type"
          className={`w-full`}
        />
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center  justify-between gap-5 lg:flex-row lg:items-start">
        <div className="grid w-full grid-cols-2 gap-10 md:w-[400px]">
          <SingleLineInput label="Quantity" />
          <SingleLineInput label="Unit" />
        </div>
        <div className="flex w-full flex-col gap-[30px] md:w-[400px]  lg:items-end">
          <div className="flex w-[400px]  gap-12 pl-3">
            <CustomRadioButton
              name="product-frequency"
              id="daily"
              label="Daily"
            />
            <CustomRadioButton
              name="product-frequency"
              id="custom-days"
              label="Custom Days"
            />
          </div>
          <div className="w-full">
            {watch("product-frequency") === "custom-days" && <SelectDays />}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomRadioButton = ({ id, label, name }) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center">
      <input
        {...register(name)}
        id={id}
        value={id}
        name={name}
        type="radio"
        className="h-[20px] w-[20px] border-2 border-neutral-500      text-darkOliveGreen-dark checked:border-darkOliveGreen-dark  checked:ring-0 hover:ring-0 hover:ring-darkOliveGreen-dark focus-visible:bg-red-500 active:ring-0 "
      />
      <label
        htmlFor={id}
        className="ml-3 font-dm-sans text-[14px] leading-[16px]"
      >
        {label}
      </label>
    </div>
  );
};

const SelectDays = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const { setValue } = useFormContext();
  const [selectedDays, setSelectedDays] = useState([]);
  function handleDayClick(day) {
    const dayIndex = selectedDays.indexOf(day);

    if (dayIndex !== -1) {
      const newDays = [...selectedDays];
      newDays.splice(dayIndex, 1);

      setSelectedDays(newDays);
    } else {
      const newDays = [...selectedDays];
      newDays.push(day);

      setSelectedDays(newDays);
    }
  }

  const getDaysFromIndex = (daysArray, indicesArray) => {
    const sortedIndices = indicesArray.slice().sort((a, b) => a - b);

    return sortedIndices.map((index) => daysArray[index]);
  };

  return (
    <div className="flex w-fit  gap-[6px] rounded-2xl bg-[#E9F1E0] p-2 sm:gap-2">
      {days.map((day, index) => {
        const selected = selectedDays.includes(index);

        return (
          <Fragment key={day}>
            <label
              htmlFor={day}
              onClick={() => handleDayClick(index)}
              className={`w-[35px] text-[11px] sm:w-[41px] sm:text-[12px] ${
                selected ? "text-white" : "text-[#A0A0A0]"
              } ${
                selected && "bg-[#3A643B]"
              } font-dm cursor-pointer rounded-[8px] px-1 py-[10px] text-center sm:px-2`}
            >
              {day}
            </label>
            <input
              type="checkbox"
              onClick={() =>
                setValue("custom-days", getDaysFromIndex(days, selectedDays))
              }
              value={day}
              id={day}
              className="hidden"
            />
          </Fragment>
        );
      })}
    </div>
  );
};

const TimeSlot = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="font-dm-sans text-[14px] leading-[16px] text-neutral-800">
        Add Time Slot
      </div>
      <div className="flex w-fit max-w-5xl items-center gap-2 sm:gap-5 lg:items-start">
        <SimpleDropDownComponent
          label="Hours"
          list={[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ]}
          className="w-[105px] sm:w-[150px]"
          placeholder="Hours"
        />

        <SingleLineInput
          label="Minutes"
          className={`w-[105px] sm:w-[150px]`}
          placeholder="Minutes"
        />
        <SimpleDropDownComponent
          label="Unit"
          list={["AM", "PM"]}
          className="w-[105px] sm:w-[150px]"
          placeholder="Unit"
        />
      </div>
      <div className="flex w-full flex-col gap-[30px] md:w-[400px]  lg:items-end">
        <div className="flex w-[400px]  gap-12">
          <CustomRadioButton
            name="moment"
            id="before-meal"
            label="Before Meal"
          />
          <CustomRadioButton name="moment" id="after-meal" label="After Meal" />
        </div>
      </div>
      <div className="mt-5">
        <AddMoreButton label="Add More Slots" />
      </div>
    </div>
  );
};
const ProductTimeSlot = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="font-dm-sans text-[14px] leading-[16px] text-neutral-800">
        Add Time Slot
      </div>
      <div className="my-2 w-full">
        <SimpleDropDownComponent
          label="Meal"
          list={["Breakfast", "Lunch", "Dinner"]}
          mdWidth={"w-[400px]"}
        />
      </div>
      <div className="flex w-fit max-w-5xl items-center gap-2 sm:gap-5 lg:items-start">
        <SimpleDropDownComponent
          label="Hours"
          list={[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ]}
          className="w-[105px] sm:w-[150px]"
          placeholder="Hours"
        />

        <SingleLineInput
          label="Minutes"
          className={`w-[105px] sm:w-[150px]`}
          placeholder="Minutes"
        />
        <SimpleDropDownComponent
          label="Unit"
          list={["AM", "PM"]}
          className="w-[105px] sm:w-[150px]"
          placeholder="Unit"
        />
      </div>
      <div className="flex w-full flex-col gap-[30px] md:w-[400px]  lg:items-end">
        <div className="flex w-[400px]  gap-12">
          <CustomRadioButton
            name="moment"
            id="before-meal"
            label="Before Meal"
          />
          <CustomRadioButton name="moment" id="after-meal" label="After Meal" />
        </div>
      </div>
      <div className="mt-5">
        <AddMoreButton label="Add More Slots" />
      </div>
    </div>
  );
};
