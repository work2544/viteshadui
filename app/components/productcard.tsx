import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import Modalimg from "./ui/imgdailog";
import { Button } from "./ui/button";
import { useCart } from "~/context/cartcontext";
import { type MenuItem, CountActionKind } from "./types/Types";

type IngredientCardProps = {
  dish: MenuItem;
} & React.ComponentProps<typeof Card>;

function IngredientCard({ className, dish, ...props }: IngredientCardProps) {
  const {
    state: { cart },
    dispatch,
  } = useCart();
  const qty = cart.find((item) => item.id == dish.id)?.qty;
  return (
    <Card
      className={cn("h-[400px] bg-muted/50 rounded-lg lg:w-[380px] md:w-[350px] sm:w-[300px]", className)}
      id={dish.id}
      {...props}
    >
      <CardHeader className={cn("lg:w-[380px] sm:w-[300px]", className)} >
        <CardTitle className="text-lg">{dish.title}</CardTitle>
        <CardDescription>{dish.description}</CardDescription>
      </CardHeader>
      <CardContent className="max-w-90 max-h-50">
        <Modalimg src={dish.src}></Modalimg>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardTitle>{dish.price} ฿</CardTitle>
        <div className="flex gap-x-4 justify-center items-center">
          <Button
            variant="outline"
            onClick={() =>
              dispatch({
                type: CountActionKind.REMOVE_FROM_CART,
                payload: dish,
              })
            }
          >
            -
          </Button>
          {qty ? qty : 0}
          <Button
            variant="outline"
            size={"sm"}
            onClick={() =>
              dispatch({ type: CountActionKind.ADD_TO_CART, payload: dish })
            }
          >
            +
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default IngredientCard;
