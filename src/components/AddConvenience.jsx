const AddConvenience = ({ title, subtitle }) => {
  return (
    <div className="flex gap-[10px]">
      <img src="/add-icon-plus.svg" />
      <div className="flex flex-col justify-between gap-1">
        <span className="font-poppins text-[14px] font-medium tracking-[-0.02em] text-darkOliveGreen-dark">
          {title}
        </span>
        <span className="font-poppins text-[12px] leading-[16px] text-neutral-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default AddConvenience;
