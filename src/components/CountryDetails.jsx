import { useParams } from "react-router-dom";

export default function CountryDetails(props){
    let {countryId} = useParams();

    const country = props.countries.find((country)=>country.alpha3Code === countryId)

    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`} alt="country flag"/>
            <h1>{country.name}</h1>
            <div>
                <h3>Capital</h3>
                <p>{country.capital}</p>
            </div>
            <div>
                <h3>Area</h3>
                <p>{country.area}</p>
            </div>
            <div>
                <h3>Borders</h3>
                <ul>
                    {country.borders.map((border)=>{
                        return (<li>{border}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}