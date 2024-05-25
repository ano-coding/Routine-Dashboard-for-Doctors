const AddMoreButton = ({ label = "Add More" }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <img className="h-[26px]" src="/add-icon-plus.svg" />
      <div className="font-dm-sans text-[14px] font-medium tracking-[-0.02em] text-darkOliveGreen-dark">
        {label}
      </div>
    </div>
  );
};

export default AddMoreButton;
