import React from "react";

import IngredientCard from "~/components/productcard";
import { useCart } from "~/context/cartcontext";

function ShadUi() {
  const {
    state: { product },
  } = useCart();

  return (
    <div className="flex flex-1 flex-col gap-13 p-4">
      {product.map((group, idx) => (
        <div className="flex flex-col " key={idx} id={group.type}>
          <h1 className="text-xl font-semibold italic pb-3">{group.type}</h1>
          <div className="flex flex-row flex-1 flex-wrap gap-8 lg:place-content-start md:place-content-center">
            {group.items.map((dish, idx) => (
              <IngredientCard key={idx} dish={dish}></IngredientCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShadUi;
