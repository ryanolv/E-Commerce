import React from "react";

interface InputErrorMessageProps {
  children: React.ReactNode;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ children }) => {
  return <p className="text-error mt-1 w-full text-sm">{children}</p>;
};

export default InputErrorMessage;
