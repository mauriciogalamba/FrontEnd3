import { useState } from "react";
import Card from "../Components/Card";

function Favoritos() {
  const [odon, setOdon] = useState(JSON.parse(localStorage.getItem("fav")))

  return (
      (odon?.length > 1)? (
        <div className="list">
          {odon.map((o) => (
            <Card name={o.name} username={o.username} id={o.id} key={o.id} />
          ))}
        </div>
        ):
        (<div className="fav">
          No se ha agregado ningun odontólogo en su lista de favoritos
        </div>)
  );
}

export default Favoritos;
