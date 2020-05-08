import React, { useState, useEffect } from "react";
import api from "../src/services/api";
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get("/repositories").then((response) => {
      setRepositories(...repositories, response.data);
    });
  }, []);
  async function handleAddRepository() {
    const response = await api.post("/repositories", {
      title: `Novo Projeto ${Math.floor(Math.random() * 40)}`,
      url: "http://lucas.mota.com.br",
      techs: ["nodeJs", "Mongo"],
    });
    const newRepo = response.data;
    setRepositories([...repositories, newRepo]);
  }

  async function handleRemoveRepository(id) {
    try {
      const response = await api.delete(`/repositories/${id}`);
      if (response.status === 204) {
        setRepositories(repositories.filter((repo) => repo.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
