import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroePage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const heroe = getHeroeById(id);

  const onReturnHeroes = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to="/" />;
  }

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="img-thumbnail img-fluid " src={`/heroes/${heroe.id}.jpg`} alt={heroe.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>

              <p className="card-text">
                <b>Alter Ego:</b> {heroe.alter_ego}
              </p>
              <hr />
              <p className="card-text">
                <b>Publisher: </b>
                {heroe.publisher}
              </p>
              <hr />
              <p className="card-text">
                <b>First Appearance: </b>
                {heroe.first_appearance}
              </p>
              {heroe.alter_ego !== heroe.characters && (
                <p>
                  <b>Characters:</b> {heroe.characters}
                </p>
              )}
              <button className="btn btn-primary" onClick={onReturnHeroes}>
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
