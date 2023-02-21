import React, { useEffect, useState } from "react";
import '../../styles/Backoffice.css'
import Nav from "./Nav";

const Backoffice = () => {
  const [users, setUsers] = useState(['0']);

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
        <p>{users}</p>
      </div>
    </div>
  );
};

export default Backoffice;