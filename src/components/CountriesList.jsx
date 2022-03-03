import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries && countries.length === 0 && <p>Loading data...</p>}
            {countries &&
              countries.map((country) => (
                <Link
                  key={country.alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={country.alpha3Code}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                    alt=""
                    width="100px"
                    height="auto"
                  />
                  <p>{country.name.official}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
