"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { FastSpringCheckout } from "@/components/fastspring-checkout";

export const Checkout = () => {
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const hasFscNext = searchParams.has("fscNext");

  return (
    showCheckout || hasFscNext ? (
      <FastSpringCheckout />
    ): (
      <button
        onClick={() => setShowCheckout(true)}
        className="py-5 px-12 w-full rounded-lg text-white bg-neutral-800 hover:opacity-90 hover:cursor-pointer transition-all"
      >
        Proceed with Payment
      </button>
    )
  );
}