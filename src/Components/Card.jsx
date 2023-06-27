import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <>
      <div className={styles.card} key={id}>
        <Link to={`/details/${id}`} style={{ display: "contents" }}>
          <div>
            <img
              className={styles.img}
              src="/img/doctor.jpg"
              alt="Doctor image"
            />

            <h4>{name}</h4>
            <h5>{username}</h5>
          </div>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav()} className="favButton">
          Add fav
        </button>
      </div>
    </>
  );
};

export default Card;
