/* eslint-disable react/react-in-jsx-scope */

import React, { FC, InputHTMLAttributes } from "react";
import PropTypes from "prop-types";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?: boolean;
}

const CustomInput: FC<CustomInputProps> = React.forwardRef<
  HTMLInputElement,
  CustomInputProps
>((props, ref) => {
  const handleStyleInput = () => {
    if (props.hasError) {
      return "text-error placeholder:text-error  border-error border-solid border-2";
    }
    return "placeholder:text-inputPlaceholder focus:outline-solid focus:outline-2 focus:outline-inputPlaceholder  text-darkText";
  };
  return (
    <>
      <label>{props.label}</label>
      <input
        ref={ref}
        {...props}
        className={`bg-inputBg w-full rounded-xl px-5 py-3 focus:border-none focus:outline-none ${handleStyleInput()}`}
      />
    </>
  );
});

CustomInput.displayName = "CustomInput";
CustomInput.propTypes = {
  label: PropTypes.string,
  hasError: PropTypes.bool,
};

export default CustomInput;
