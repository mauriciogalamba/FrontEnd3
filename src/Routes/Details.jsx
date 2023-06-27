import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Details.module.css'

function Details() {
  const params = useParams();
  const [odon, setOdon] = useState([]);

  async function getOdon() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const o = await res.json();
    setOdon(o);
  }

  useEffect(() => {
    getOdon();
  }, [params]);
  return (
    <div className={styles.cont}>
      <h3>Detalles del Odontologo</h3>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>Nombre</th>
          <th className={styles.th}>Usuario</th>
          <th className={styles.th}>email</th>
          <th className={styles.th}>telefono</th>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>{odon.name}</td>
          <td className={styles.td}>{odon.username}</td>
          <td className={styles.td}>{odon.email}</td>
          <td className={styles.td}>{odon.phone}</td>
        </tr>
      </table>
    </div>
  );
}

export default Details;
