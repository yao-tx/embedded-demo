"use client"

import { useEffect } from "react";

export const FastSpringCheckout = () => {
  useEffect(() => {
    window.fastspring?.builder?.add("one-time-product-1");
  }, []);

  return (
    <>
      <div id="fsc-embedded-checkout-container"></div>
    </>
  );
}