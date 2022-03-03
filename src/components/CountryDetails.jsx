import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

const CountryDetails = ({ countries, ...rest }) => {
  const { id: countryId } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.alpha3Code === countryId
    );

    setCountry(foundCountry);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]);

  const countryBorders = countries
    .filter(
      (oneCountry) =>
        country.borders && country.borders.includes(oneCountry.alpha3Code)
    )
    .map((country) => ({
      code: country.alpha3Code,
      name: country.name.common,
    }));

  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    <p>This country has no neighbouring countries.</p>
                  ) : (
                    <ul>
                      {countryBorders.map((c) => {
                        return (
                          <li key={c.code}>
                            <Link to={c.code}>{c.name}</Link>;
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
