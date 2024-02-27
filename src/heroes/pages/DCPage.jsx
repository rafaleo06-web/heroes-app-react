import { ListCarts } from "../components/ListCarts";

export const DCPage = () => {
  const publisher = "DC Comics";
  return (
    <>
      <h1>DC Screen</h1>
      <hr />

      <ListCarts publisher={publisher} />
    </>
  );
};
