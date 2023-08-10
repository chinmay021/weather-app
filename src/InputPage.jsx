import { useEffect, useState } from "react";
import { API_SUGGESTIONS_URL, API_WEATHER_URL } from "../constants";
import useDebounce from "./hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  // const [city, setCity] = useState("");
  const [location, setLocation] = useState({
    lat: undefined,
    long: undefined,
  });
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const delay = 200;
  const debounceSearchTerm = useDebounce(searchTerm, delay);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const showError = (err) => {
    console.error("An error has occured while retrieving location", err);
    setError(err.message);
    setLoading(false);
  };

  const showPosition = (position) => {
    // console.log("called");
    setLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation API not supported");
    }
  };

  const getWeather = async (url) => {
    const res = await fetch(url);
    // console.log(res);
    if (res.status !== 200) {
      setLoading(false);
      const data = await res.json();
      setError(data.message);
      console.log("Error fetching city weather");
      return;
    }
    const data = await res.json();
    setWeatherData(data);
    setLoading(false);
    // console.log(data);
  };

  const handleSubmit = () => {
    // console.log("sumbit");
    setLoading(true);
    const URL_CITY = `${API_WEATHER_URL}q=${searchTerm}&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    if (searchTerm.trim() === "") return;
    getWeather(URL_CITY);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setError(false);
  };

  const getSuggestions = async (text) => {
    if (text.trim() === "") {
      setSuggestions([]);
      return;
    }
    const res = await fetch(
      `${API_SUGGESTIONS_URL}q=${text}&appid=${
        import.meta.env.VITE_API_KEY
      }&limit=5`
    );
    const data = await res.json();
    // let arr = data.map(
    //   (item) => `${item.name}, ${item.state}, ${item.country}`
    // );
    setSuggestions(data);
    // console.log(data, text);
  };

  const handleSuggestion = (suggestion) => {
    // setSearchTerm(suggestion);
    // console.log(suggestion, suggestion.lat, suggestion.lon);
    setLocation({
      lat: suggestion.lat,
      long: suggestion.lon,
    });
  };

  useEffect(() => {
    if (weatherData === null) return;
    navigate("/weather", { state: weatherData });
  }, [weatherData, navigate]);

  useEffect(() => {
    const URL_LOCATION = `${API_WEATHER_URL}lat=${location.lat}&lon=${
      location.long
    }&appid=${import.meta.env.VITE_API_KEY}`;

    if (location.lat !== undefined && location.long !== undefined) {
      // console.log("here");
      getWeather(URL_LOCATION);
    }
  }, [location]);

  useEffect(() => {
    getSuggestions(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-400 ">
      <div className="input-card relative w-80 bg-white  rounded-md  flex flex-col">
        <h1 className="text-blue-400 text-xl font-bold border-b-2 p-4">
          Weather App
        </h1>

        <div
          className={`error font-semibold text-red-800/70 bg-red-200 text-center  p-2 mx-4 rounded mt-4 ${
            error ? "" : "hidden"
          }`}
        >
          {error ? error : ""}
        </div>
        <div
          className={`loading font-semibold text-green-800/70 bg-green-600/30 text-center  p-2 mx-4 rounded mt-4 ${
            loading ? "" : "hidden"
          }`}
        >
          Getting weather details...
        </div>
        <button
          className="rounded-md hover:bg-blue-600 duration-300 bg-blue-500 p-2 mx-4  mb-6 mt-2 text-white font-semibold  "
          onClick={getLocation}
        >
          Get Device Location
        </button>

        <div className="relative mx-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border" />
          </div>
          <div className="relative flex justify-center ">
            <span className="bg-white px-4 font-semibold text-gray-400">
              or
            </span>
          </div>
        </div>
        <input
          className="input   box-border focus:outline-none p-2 border-2 text-center mx-4  mt-4 mb-2 rounded-md placeholder-gray-400 focus:border-blue-400"
          type="text"
          placeholder="enter city name"
          value={searchTerm}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={handleKeyDown}
        />
        {suggestions.length > 0 && (
          <ul className="dropdown absolute bottom-0  w-full  h-fit bg-white top-[97%] rounded ">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestion(suggestion)}
                className="py-2 border-b pl-8 hover:bg-zinc-300 cursor-pointer flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 32 32"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="16" cy="11" r="4" />
                    <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13Z" />
                  </g>
                </svg>
                <button>{`${suggestion.name}, ${suggestion.state}, ${suggestion.country}`}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputPage;
