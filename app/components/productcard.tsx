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
type IngredientCardProps = {
  cardTitle: string | undefined;
  description: string | undefined;
  src: string;
} & React.ComponentProps<typeof Card>;
function IngredientCard({
  className,
  cardTitle,
  description,
  src,
  ...props
}: IngredientCardProps) {
  return (
    <Card
      className={cn("w-[380px] h-fit bg-muted/50 rounded-lg", className)}
      id={cardTitle}
    >
      <CardHeader className={cn("w-[380px] ", className)} {...props}>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Modalimg src={src}></Modalimg>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
}

export default IngredientCard;
