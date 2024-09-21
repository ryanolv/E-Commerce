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
      className="mb-3 flex w-full items-center justify-center rounded-lg bg-bgWhite px-4 py-2 font-semibold text-darkText transition-all hover:cursor-pointer hover:bg-bgDark hover:text-white"
    >
      {startIcon && (
        <div className="mr-2 flex h-full items-center">{startIcon}</div>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
