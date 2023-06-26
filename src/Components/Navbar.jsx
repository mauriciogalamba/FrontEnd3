import styles from './Navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className={styles.bar}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <span>Home</span><span>Favoritos</span><span>Contacto</span>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar