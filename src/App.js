// src/App.js
import { useState } from "react";
import countriesData from '../countries.json';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
        <div>
          <Routes>
            <Route exact path={"/:countryId"} element={ <CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;
