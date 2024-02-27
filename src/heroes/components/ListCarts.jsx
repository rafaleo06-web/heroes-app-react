import { Cart } from "./Cart";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { useMemo } from "react";

export const ListCarts = ({ publisher }) => {
  const heroesByCategory = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroesByCategory.map((heroe, index) => (
        <Cart heroe={heroe} key={index} />
      ))}
    </div>
  );
};
