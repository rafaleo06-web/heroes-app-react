import { Link } from "react-router-dom";

export const Cart = ({ heroe }) => {
  return (
    <div className="col ">
      <div className="card ">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img className="img-thumbnail img-fluid " src={`/heroes/${heroe.id}.jpg`} alt={heroe.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">Alter Ego: {heroe.alter_ego}</p>
              {heroe.alter_ego !== heroe.characters && <p>{heroe.characters}</p>}
              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>

              <Link to={`/heroe/${heroe.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
