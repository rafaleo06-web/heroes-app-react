import { heroes } from "../../assets/heroes-data";

export const onHeroesByQuery = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];
  return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(name));
};
