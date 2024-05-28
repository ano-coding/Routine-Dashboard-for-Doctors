import { Link } from "react-router-dom";

const AddConvenience = ({ title, subtitle, link }) => {
  return (
    <div className="flex gap-[10px]">
      <Link to={link}>
        <img className=" cursor-pointer" src="/add-icon-plus.svg" />
      </Link>
      <div className="flex flex-col justify-between gap-1">
        <Link to={link}>
          <span className="cursor-pointer font-poppins text-[14px] font-medium tracking-[-0.02em] text-darkOliveGreen-dark">
            {title}
          </span>
        </Link>
        <span className="font-poppins text-[12px] leading-[16px] text-neutral-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default AddConvenience;
