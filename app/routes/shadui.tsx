import React from "react";
import { menu } from "~/components/data/menu";
import IngredientCard from "~/components/productcard";

function ShadUi() {
  return (
    <div className="flex flex-1 flex-col gap-13 p-4">
      {menu.map((group, idx) => (
        <div className="flex flex-col " key={idx} id={group.type}>
          <h1 className="text-xl font-semibold italic pb-3">{group.type}</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            {group.items.map((ingredient, idx) => (
              <IngredientCard
                key={idx}
                cardTitle={ingredient.cardTitle}
                description={ingredient.description}
                src={ingredient.src}
              ></IngredientCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShadUi;
