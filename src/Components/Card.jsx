import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ name, username, id }) => {
  const [isFav, SetIsFav] = useState(
    JSON.parse(localStorage.getItem("fav"))
    ?.filter(f => f.id == id).length>0)
  
  
  function addFav(){
    if(!isFav){
      const old = JSON.parse(localStorage.getItem("fav")) ||[]
      const new_value = [...old, {id:id, name: name, username: username} ]
      localStorage.setItem("fav", JSON.stringify(new_value))
      
      SetIsFav(true)
      
    }else{
      const new_value = JSON.parse(localStorage.getItem("fav"))
                        .filter(f => f.id != id)
      
      localStorage.setItem("fav", JSON.stringify(new_value))
        
      SetIsFav(false)
    }

    // Aqui iria la logica para agregar la Card en el localStorage
  }

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
        <button onClick={addFav} className="favButton">
          {isFav?"Quitar de favoritos":"Agregar a favoritos"}
        </button>
      </div>
    </>
  );
};

export default Card;
