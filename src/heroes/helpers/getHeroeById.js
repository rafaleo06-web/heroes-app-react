import { heroes } from "../../assets/heroes-data";

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
