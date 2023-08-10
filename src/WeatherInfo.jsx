import { Link, useLocation } from "react-router-dom";
import clear from "./assets/Weather Icons/clear.svg";
import cloud from "./assets/Weather Icons/cloud.svg";
import haze from "./assets/Weather Icons/haze.svg";
import rain from "./assets/Weather Icons/rain.svg";
import snow from "./assets/Weather Icons/snow.svg";
import thunderstorm from "./assets/Weather Icons/storm.svg";

const WeatherInfo = () => {
  const { state: weatherData } = useLocation();
  console.log(weatherData);
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
  return (
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
          {/* <svg version="1.1" viewBox="0 0 64 64" className="w-40 h-40">
            <g id="Layer_x0020_1">
              <g id="_743750784">
                <path
                  className="fil0"
                  fill="#FFC106"
                  d="M41.27 18.66c6.89,1.84 10.98,8.92 9.13,15.81 -0.65,2.43 -1.95,4.51 -3.66,6.11 -1.51,-2.79 -4.45,-4.68 -7.84,-4.68 -0.55,0 -1.09,0.04 -1.61,0.14 -1.82,-4.8 -6.39,-8.25 -11.79,-8.42 1.92,-6.79 8.94,-10.79 15.77,-8.96z"
                />
                <path
                  className="fil1"
                  fill="#1AB5ED"
                  d="M12.29 53.71l-0.1 0c-3.85,0 -6.97,-3.11 -6.97,-6.96 0,-3.81 3.05,-6.9 6.85,-6.97 0.45,-6.8 6.1,-12.17 13.02,-12.17 5.58,0 10.34,3.5 12.2,8.43 0.52,-0.1 1.06,-0.14 1.61,-0.14 4.52,0 8.27,3.38 8.83,7.75 2.78,0 5.03,2.26 5.03,5.03 0,2.74 -2.19,4.97 -4.91,5.03l-0.12 0 -0.07 0 -8.67 0 -0.09 0 -0.12 0 -13.56 0 -0.13 0 -0.14 0 -12.66 0z"
                />
                <path
                  className="fil2"
                  fill="#FFC106"
                  d="M55.52 39.85c0.6,0.34 0.8,1.11 0.46,1.7 -0.34,0.6 -1.1,0.8 -1.7,0.46l-1.73 -1c-0.59,-0.34 -0.8,-1.1 -0.46,-1.7 0.35,-0.59 1.11,-0.8 1.7,-0.46l1.73 1zm-35.18 -17.44c-0.6,-0.34 -0.8,-1.1 -0.46,-1.7 0.34,-0.59 1.1,-0.8 1.7,-0.46l1.73 1c0.59,0.34 0.8,1.1 0.45,1.7 -0.34,0.6 -1.1,0.8 -1.69,0.46l-1.73 -1zm6.71 -7.63c-0.34,-0.6 -0.13,-1.36 0.46,-1.7 0.6,-0.34 1.36,-0.14 1.7,0.46l1 1.73c0.34,0.59 0.13,1.36 -0.46,1.7 -0.6,0.34 -1.36,0.13 -1.7,-0.46l-1 -1.73zm9.63 -3.25c0,-0.69 0.56,-1.25 1.25,-1.25 0.69,0 1.25,0.56 1.25,1.25l0 2c0,0.69 -0.56,1.25 -1.25,1.25 -0.69,0 -1.25,-0.56 -1.25,-1.25l0 -2zm9.97 2c0.35,-0.59 1.11,-0.79 1.7,-0.45 0.6,0.35 0.8,1.11 0.46,1.7l-1 1.73c-0.35,0.6 -1.11,0.8 -1.71,0.46 -0.59,-0.35 -0.79,-1.11 -0.45,-1.71l1 -1.73zm7.63 6.72c0.6,-0.34 1.36,-0.13 1.7,0.46 0.34,0.6 0.14,1.36 -0.46,1.7l-1.73 1c-0.59,0.34 -1.35,0.14 -1.7,-0.46 -0.34,-0.6 -0.13,-1.36 0.46,-1.7l1.73 -1zm3.25 9.63c0.69,0 1.25,0.56 1.25,1.25 0,0.69 -0.56,1.25 -1.25,1.25l-2 0c-0.69,0 -1.25,-0.56 -1.25,-1.25 0,-0.69 0.56,-1.25 1.25,-1.25l2 0z"
                />
              </g>
            </g>
          </svg> */}
          <img src={imgSrc} alt="weather-icon" className="w-40 my-4 " />
          <span className="temp font-bold text-6xl ">
            {Math.floor(weatherData?.main?.temp)}&deg;C{" "}
          </span>
          <span className="details mt-4 font-semibold">
            {weatherData?.weather?.[0]?.description}
          </span>
          <span className="location flex font-semibold items-center mt-4 gap-2">
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
  );
};

export default WeatherInfo;
