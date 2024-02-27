import { ListCarts } from "../components/ListCarts";

export const MarvelPage = () => {
  const publisher = "Marvel Comics";

  return (
    <>
      <h1>Marvel Screen</h1>
      <hr />
      <ListCarts publisher={publisher} />
    </>
  );
};
