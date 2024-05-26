import CardWeather from "../components/CardWeather";
import useFetchWeather from "../components/hooks/useFetchWeather";

const HomeView = () => {
  const [query, setQuery, weather, loading, error] = useFetchWeather();

  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));
  // }, [APIKEY, query]);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="overflow-hidden relative h-[100vh]">
      <div className="clouds"></div>
      <div
        className="w-full h-[100vh] text-white flex justify-center items-center relative"
        // style={{ backgroundImage: 'url("/images/bg-clouds-4.jpg")' }}
      >
        <div className="bg-[rgba(0,0,0,.4)] p-10 rounded-md shadow-2xl shadow-white/20 hover:shadow-white/50">
          <h1 className="text-3xl font-bold text-center mb-3">Weather App</h1>
          <h2 className="mb-4">Introduzca el nombre de la ciudad que desea consultar</h2>

          <input
            id="city"
            type="search"
            onChange={handleOnChange}
            defaultValue={query}
            placeholder="Ingresa la ciudad"
            className="w-full text-white border border-gray-200 bg-transparent mb-8 rounded-md p-3 outline-none placeholder:text-gray-300"
          />

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {weather && (
            <CardWeather
              current={weather.current}
              location={weather.location}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeView;
