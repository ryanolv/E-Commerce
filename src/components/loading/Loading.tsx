import React, { FunctionComponent } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loading: FunctionComponent = () => {
  return (
    <div className="bg-loading fixed left-0 top-0 flex h-full w-full items-center justify-center">
      <SyncLoader size={30} />
    </div>
  );
};

export default Loading;
