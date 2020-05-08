import React from "react";

import "./styles.css";

const projects = [
  { title: "1", descricao: "dasdas" },
  { title: "1", descricao: "dasdas" },
];

function App() {
  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {projects.map((project) => (
          <li>
            {project.title}
            <button onClick={() => handleRemoveRepository(1)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
