import { Link, useLocation } from "react-router-dom";
import clear from "./assets/Weather Icons/clear.svg";
import cloud from "./assets/Weather Icons/cloud.svg";
import haze from "./assets/Weather Icons/haze.svg";
import rain from "./assets/Weather Icons/rain.svg";
import snow from "./assets/Weather Icons/snow.svg";
import thunderstorm from "./assets/Weather Icons/storm.svg";

const WeatherInfo = () => {
  const { state: weatherData } = useLocation();
  // console.log(weatherData);
  let imgSrc = "";
  if (weatherData) {
    const id = weatherData.weather[0].id;
    if (id == 800) {
      imgSrc = clear;
    } else if (id >= 200 && id <= 232) {
      imgSrc = thunderstorm;
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      imgSrc = rain;
    } else if (id >= 600 && id <= 622) {
      imgSrc = snow;
    } else if (id >= 701 && id <= 781) {
      imgSrc = haze;
    } else if (id >= 801 && id <= 804) {
      imgSrc = cloud;
    }
  }
  return weatherData ? (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-400">
      <div className="card bg-white rounded-md w-96 ">
        <h1 className="text-blue-400 border-b border-black/20 p-4 font-semibold text-xl flex gap-4 items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 cursor-pointer hover:text-blue-600 "
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="currentColor"
                d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
          </Link>
          <span>Weather App</span>
        </h1>
        <div className="details-wrapper flex flex-col items-center">
          <img src={imgSrc} alt="weather-icon" className="w-40 my-4 " />
          <span className="temp font-bold text-6xl tracking-wider">
            {Math.floor(weatherData?.main?.temp)}&deg;C
          </span>
          <span className="details mt-4  text-xl font-medium tracking-wide">
            {weatherData?.weather?.[0]?.description}
          </span>
          <span className="location flex  items-center mt-4 gap-2 text-xl font-medium tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            <p>{`${weatherData?.name}, ${weatherData?.sys?.country}`}</p>
          </span>
        </div>
        <div className="extra-details flex border-t border-black/30 mt-6 justify-between">
          <div className="feels-like p-6 flex justify-center items-center border-r w-1/2 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10"
              viewBox="0 0 16 16"
            >
              <g className="fill-blue-400">
                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z" />
                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5a3 3 0 1 1 0 6a.5.5 0 0 1 0-1a2 2 0 0 0 0-4a.5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
              </g>
            </svg>
            <div className="font-semibold">
              <div className="text-lg">
                {Math.floor(weatherData?.main?.feels_like)}&deg;C
              </div>
              <div className="text-sm">Feels like</div>
            </div>
          </div>
          <div className="humidity p-6 flex justify-center items-center w-1/2 gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10"
              viewBox="0 0 32 32"
            >
              <path
                className="fill-blue-400"
                d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.043A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007ZM16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001Z"
              />
            </svg>
            <div className="font-semibold">
              <div className="text-lg">{weatherData?.main?.humidity}%</div>
              <div className="text-sm">Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-400">
      <div className="card bg-white rounded-md w-96 h-96 flex justify-center items-center">
        <Link to='/' className="w-full mx-10">
          <button className="rounded-md hover:bg-blue-700 duration-300 bg-blue-600 py-2 pl-20   text-white font-semibold w-full  text-lg flex  items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 cursor-pointer "
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="currentColor"
                d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
            <span>select city</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WeatherInfo;
