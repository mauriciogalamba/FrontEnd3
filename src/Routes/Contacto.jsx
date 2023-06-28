import { useState } from "react";
import styles from "./Contacto.module.css";

function Contacto() {
  const [error, setError] = useState(false);
  const [nombre, setNombre] = useState("");
  const [msj, setMsj] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.nombre.value.trim();
    const mail = e.target.email.value.trim();

    /* Validaciones adicionales al Required*/
    const dominio = mail.split("@")[1];
    const reg =
      /^[a-z0-9]{2,61}\.([a-z0-9]{2,61}|[a-z0-9-]{2,30}\.[a-z]{2,})$/gi;

    if (name.length < 5) {
      setMsj("El nombre debe contener al menos 5 caracteres.");
      setError(true);
      return;
    }

    if (!reg.test(dominio)) {
      setMsj("El email tiene dominio no válido.");
      setError(true);
      return;
    }

    setNombre(name);
    setError(false);
  }

  function handelChange() {
    /* Para quitar los mensajes si se modifica alguno de los input*/
    setNombre("");
    setError(false);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          required
          id="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handelChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          required
          id="email"
          placeholder="Ingresa tu email"
          onChange={handelChange}
        />

        <button type="submit">Enviar</button>
      </form>

      {error && <div className={styles.error}>ERROR: {msj}</div>}
      {nombre && (
        <div>
          Gracias <i>{nombre}</i>
          nos pondremos en contato a la brevedad!
        </div>
      )}
    </div>
  );
}

export default Contacto;
