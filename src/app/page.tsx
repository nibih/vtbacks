"use client";

import { useState } from "react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export default function Home() {
  // time at center
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <BackgroundGradientAnimation>
        {/* current time at center */}
        <div className="flex items-center justify-center h-full text-4xl font-bold text-white">
          {time}
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
