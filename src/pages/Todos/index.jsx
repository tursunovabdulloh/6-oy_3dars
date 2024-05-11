import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setData(result.slice(0, 20)));
  }, []);
  return (
    <main>
      <div className="container main-container">
        <button className="btn-link">
          <Link className="Link" to="/">
            Go to home
          </Link>
        </button>

        <ul className="todos-list">
          {data &&
            data.map((item) => {
              return (
                <li key={item.id} className="todo-item">
                  <div className="div">
                    <h1 className="h1">
                      <span>Id:</span>
                      {item.id}
                    </h1>
                    <p className="p">{item.title}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Todos;
