import '../App.css';
// import './Date';
import dateFormat from 'dateformat';
import { useState } from 'react';
import {
  CityStyles,
  DateStyles,
  SearchField,
  SearchInput,
  TempStyles,
  Wrapper,
} from './Styles';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  // retrieve data
  const search = async (e) => {
    if (e.key === 'Enter') {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`,
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity('');
        });
    }
  };

  // retirve data for hourly forecast

  // get current time
  // const date = new Date();
  // const showTime =
  //   date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  // display input history

  // add data to local storage

  return (
    <SearchField>
      <SearchInput
        placeholder="Type a city name..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyDown={search}
      />
      {typeof weather.main !== 'undefined' ? (
        <div>
          <Wrapper>
            <TempStyles>{Math.round(weather.main.temp)}°</TempStyles>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              height="200px"
            />
          </Wrapper>
          <CityStyles>{weather.name}</CityStyles>
          <DateStyles>{dateFormat(new Date(), 'fullDate')}</DateStyles>
        </div>
      ) : (
        <p>Please type a city name in the search box</p>
      )}
    </SearchField>
  );
}
