import { useState } from "react";
import CardWeather from "../components/CardWeather";
import useFetchWeather from "../components/hooks/useFetchWeather";

const HomeView = () => {
  const [query, setQuery, weather, loading, error] = useFetchWeather();

  const [currentCity, setCurrentCity] = useState();

  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));
  // }, [APIKEY, query]);

  const handleOnChange = (e) => {
    // setQuery(e.target.value);
    setCurrentCity(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQuery(currentCity);
  };


  return (
    <div className="h-[100vh]">
      <div
        className="clouds w-full h-full absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/images/bg-clouds-1.jpg")' }}
      ></div>
      <div className="w-full h-[100vh] text-white flex justify-center items-center relative">
        {weather ? (
          <CardWeather current={weather.current} location={weather.location} />
        ) : (
          <div className="bg-gray-800 p-10 rounded-md max-w-[30em]">
            <h1 className="text-3xl font-bold text-center mb-5">WeatherApp</h1>
            <h2 className="text-center mb-6">
              Pequeña aplicación web que te proporciona el clima actual de
              cualquier ciudad al instante. Solo ingresa el nombre de la ciudad
              y obtén detalles meteorológicos rápidamente.
            </h2>

            <form
              onSubmit={handleOnSubmit}
              className="grid grid-cols-[7fr,3fr] gap-4 rounded-md"
            >
              <input
                id="city"
                type="text"
                onChange={handleOnChange}
                // defaultValue={query}
                placeholder="Ingresa la ciudad"
                className="border border-gray-200 bg-transparent p-3 rounded-sm outline-none placeholder:text-gray-300"
                required
              />
              <input
                type="submit"
                value="Consultar"
                className="border border-blue-600 px-6 rounded-sm cursor-pointer bg-blue-600 font-semibold"
              />
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeView;
