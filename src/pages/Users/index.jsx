import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
                <li key={item.id} className="user-item">
                  <div className="divv">
                    <img
                      src="../public/images/user.png"
                      alt=""
                      className="user-img"
                    />
                    <h1 className="h1">
                      <span>Id:</span>
                      {item.id}
                    </h1>
                    <p className="p">{item.title}</p>
                    <p className="p">{item.name}</p>
                    <p className="p">{item.username}</p>
                    <p className="p">{item.email}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Users;
