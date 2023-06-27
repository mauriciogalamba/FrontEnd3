import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return <>{odon.name}</>;
}

export default Details;
