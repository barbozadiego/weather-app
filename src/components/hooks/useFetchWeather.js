import { useState, useEffect } from "react";

const useFetchWeather = () => {
  const APIKEY = import.meta.env.VITE_APP_WEATHER_APIKEY;
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();
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

  return [query, setQuery, weather, loading, error];
};
export default useFetchWeather;
