import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const Backoffice = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((data) => setUsers(data["hydra:member"]));
    }, []);
  return (
    <div>
      <Nav />
      <div className="dalle">
        <h1>Nombres d'inscrit</h1>
      </div>
    </div>
  );
};

export default Backoffice;