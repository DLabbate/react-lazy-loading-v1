import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const movies = await response.json();
      setData(movies);
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div className="card">
            <img
              className="card__image"
              alt="placeholder"
              src={item.thumbnailUrl}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
