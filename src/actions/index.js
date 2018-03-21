const API_KEY = '93ce2b122b5f57eabbb564fc8a4f7249';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER
  };
}
