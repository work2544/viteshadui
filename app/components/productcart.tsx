import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "~/context/cartcontext";
function ProductCart() {
  const {
    state: { cart },
  } = useCart();
  return (
    <Sheet>
      <SheetTrigger className="relative flex">
        <FaShoppingCart className="text-3xl mr-2" />
        <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
          {cart.reduce((acc, item) => acc + item.qty, 0)}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {cart.map((item) => (
            <React.Fragment key={item.title}>
              <SheetTitle>{item.title}</SheetTitle>
              <SheetDescription>
                {item.price}x{item.qty}
              </SheetDescription>
            </React.Fragment>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ProductCart;
