import "./App.css";
import { useState, useEffect } from "react";
import Photo from "./components/Photo";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://picsum.photos/v2/list");
      const photos = await response.json();
      console.log(photos);
      setData(photos.slice(0, 100));
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return <Photo url={item.download_url} key={item.id} />;
      })}
    </div>
  );
}

export default App;
