import type { Metadata } from "next";

import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Counter",
  description: "Usando estados en los componentes",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={25} />
    </div>
  );
}
