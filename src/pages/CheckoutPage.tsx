import React, { FunctionComponent } from "react";

import Header from "../components/header/HeaderComponent";
import Checkout from "../components/Checkout";

const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
