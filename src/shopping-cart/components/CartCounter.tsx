"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export function CartCounter({ value = 10 }: Props) {
  const [counter, setCounter] = useState(value);

  function handleClick(value: number) {
    setCounter((anterior) => anterior + value);
  }
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleClick(+1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleClick(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
}
