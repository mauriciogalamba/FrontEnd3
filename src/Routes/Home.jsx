import { useEffect, useState } from "react";
import Card from "../Components/Card";

function List() {
  const [odon, setOdon] = useState([]);

  async function getOdon() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const o = await res.json();
    setOdon(o);
  }

  useEffect(() => {
    getOdon();
  }, []);

  return (
    <>
      <div className="list">
        {odon.map((o) => (
          <Card name={o.name} username={o.username} id={o.id} key={o.id} />
        ))}
      </div>
    </>
  );
}

export default List;
