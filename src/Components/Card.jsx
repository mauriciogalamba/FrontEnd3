import styles from './Card.module.css'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={styles.card} key={id}>
        <img className={styles.img} src="/img/doctor.jpg" alt="Doctor image" />
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name}</h3>
        <h5>{username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav()} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;