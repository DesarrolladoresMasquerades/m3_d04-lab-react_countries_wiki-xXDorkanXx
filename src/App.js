import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router';

import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

// import countryDB from './countries.json';
import axios from 'axios';

function App() {
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const { data } = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        const sortedData = data.sort((a, b) =>
          a.name.official.localeCompare(b.name.official)
        );
        setCountryInfo(sortedData);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <CountriesList countries={countryInfo} />
          </div>

          <div className="col">
            <Route path="/:id" exact>
              <CountryDetails countries={countryInfo} />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// render={(props) => (
//   <CountryDetails {...props} countries={countryInfo} />
// )}
// />
