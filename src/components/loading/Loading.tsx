import React, { FunctionComponent } from "react";
import SyncLoader from "react-spinners/SyncLoader";

interface LoadingProps {
  message?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-loading">
      {message && (
        <p className="mb-6 max-w-[50%] text-center text-xl text-whiteText">
          {message}
        </p>
      )}
      <SyncLoader size={30} />
    </div>
  );
};

export default Loading;
