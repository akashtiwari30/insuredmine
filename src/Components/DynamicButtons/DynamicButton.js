// components/DynamicButton.js
import React from "react";

const DynamicButton = ({
  label = "",
  color = "",
  size = "xs",
  onClick = () => {},
  className = "",
  disabled = false,
  icon = null,
  ...rest
}) => {
  const sizeClass = {
    xs: "py-1 px-3 fs-6",
    sm: "py-1 px-3 fs-5",
    md: "py-2 px-4 fs-4",
    lg: "py-3 px-5 fs-3",
    xl: "py-3 px-5 fs-2",
    xxl: "py-3 px-5 fs-1",
  }[size];

  //   const colorClass = {
  //     primary: "bg-blue-600 hover:bg-blue-700 text-white",
  //     danger: "bg-red-600 hover:bg-red-700 text-white",
  //     success: "bg-green-600 hover:bg-green-700 text-white",
  //     warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
  //     default: "bg-gray-300 hover:bg-gray-400 text-black",
  //   }[color];

  return (
    <>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg ${sizeClass} ${className} ${color} transition duration-200 flex items-center gap-2`}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>


{/* example */}
    {/* <DynamicButton
      label="Customize"
      icon={<i class="fa-solid fa-wrench me-2"></i>}
      className="border-0 bg-hover-green rounded-2 dropdown-toggle py-2"
      type="button"
      id="customizecampaign"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    /> */}

    </>
  );
};

export default DynamicButton;
