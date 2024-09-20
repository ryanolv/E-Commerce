/* eslint-disable react/react-in-jsx-scope */

import { FC, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({ label, hasError, ...rest }) => {
  const handleStyleInput = () => {
    if (hasError) {
      return "text-error placeholder:text-error  border-error border-solid border-2";
    }
    return "placeholder:text-inputPlaceholder focus:outline-solid focus:outline-2 focus:outline-inputPlaceholder  text-darkText";
  };

  return (
    <>
      <label>{label}</label>
      <input
        {...rest}
        className={`bg-inputBg w-full rounded-xl px-5 py-3 focus:border-none focus:outline-none ${handleStyleInput()}`}
      />
    </>
  );
};

export default CustomInput;
