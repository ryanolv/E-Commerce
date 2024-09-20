import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className="bg-color-bgDark shadow-outiline-dark flex w-full items-center justify-center rounded-lg border-none bg-[#000] px-4 py-2 font-semibold text-white transition-all hover:cursor-pointer"
    >
      {startIcon && (
        <div className="mr-2 flex h-full items-center">{startIcon}</div>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
