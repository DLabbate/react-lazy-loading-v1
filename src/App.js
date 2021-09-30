import "./App.css";
import { useState, useEffect } from "react";
import Photo from "./components/Photo";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const photos = await response.json();
      console.log(photos);
      setData(photos);
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return <Photo thumbnailUrl={item.thumbnailUrl} key={item.id} />;
      })}
    </div>
  );
}

export default App;
