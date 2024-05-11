import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Photos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
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
                <li key={item.id} className="ptodo-item">
                  <div className="pdiv">
                    <img src={item.url} alt="" className="images" />
                    <p className="pp">{item.title}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Photos;
