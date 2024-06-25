import "./App.css";
import Weather from "./components";
import "./components/style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const key = "c409b955e5959a993ececa13d911317c";
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`
      );
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
    }
  };

  const handleClick = () => {
    setQuery(search);
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="App">
      <div className="info">
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Şehir Giriniz"
        />
        <button className="btn" onClick={handleClick}>
          Göster
        </button>
      </div>
      <div className="results">{city && <Weather weather={city} />}</div>
    </div>
  );
}

export default App;
