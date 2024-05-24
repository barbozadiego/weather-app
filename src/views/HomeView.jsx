import { useState } from "react";
import { useEffect } from "react";
import CardWeather from "../components/CardWeather";

const HomeView = () => {
  const APIKEY = import.meta.env.VITE_APP_APIKEY;
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}`
      );

      if (res.ok) {
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      }
    };

    if (query) {
      fetchWeather();
    }
  }, [APIKEY, query]);

  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));
  // }, [APIKEY, query]);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
    // const value = e.target.value.replace(/\s/g, ""); // Remover espacios
    // setQuery(value);
  };

  // const handleOnKeyDown = (e) => {
  //   if (e.key === " ") {
  //     e.preventDefault();
  //   }
  // };

  return (
    <div
      className="w-full h-[100vh] text-white flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/images/bg-clouds-4.jpg")' }}
    >
      <div>
        <input
          type="search"
          onChange={handleOnChange}
          // onKeyDown={handleOnKeyDown}
          id="city"
          defaultValue={query}
          // value={query}
          placeholder="Escribe el nombre de una ciudad"
          className="w-full bg-gray-700 mb-8 rounded-md p-3 outline-none"
        />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <CardWeather current={weather.current} location={weather.location} />
        )}
      </div>
    </div>
  );
};
export default HomeView;
