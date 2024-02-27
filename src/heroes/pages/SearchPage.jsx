import { Cart } from "../components/Cart";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; //Convierte una string de consulta (por ejemplo, ?foo=bar&baz=qux) en un objeto JavaScript {foo: 'bar', baz: 'qux'}
import { onHeroesByQuery } from "../helpers/onHeroesByQuery";

export const SearchPage = () => {
  const navigate = useNavigate();

  const { search } = useLocation();

  const { q = "" } = queryString.parse(search); //http://localhost:5173/search, en este caso q es undefined, entonces q=''

  const { searchText, onInputChange } = useForm({ searchText: q });

  const heroes = onHeroesByQuery(q);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length < 1) {
      navigate("/search");
      return;
    }
    navigate(`?q=${searchText.toLowerCase()}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-1">Search</button>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q ? (
            // Si q es true (indicando que la consulta de búsqueda no está vacía)
            // pero no se ha encontrado ningún héroe, muestra un mensaje de búsqueda.
            heroes.length === 0 ? (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            ) : (
              // Si q es true y hay al menos un héroe, muestra la lista de héroes.
              <div className="Card">
                {heroes.map((heroe, index) => (
                  <Cart heroe={heroe} key={index}></Cart>
                ))}
              </div>
            )
          ) : (
            // Si q es false o undefined, muestra un mensaje de búsqueda inicial.
            <div className="alert alert-primary">
              Search a <b>Heroe</b>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
