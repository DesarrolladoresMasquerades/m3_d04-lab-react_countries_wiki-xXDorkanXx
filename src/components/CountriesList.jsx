import { Link } from "react-router-dom";

export default function CountriesList(props){
    return (
        <div>
            {props.countries.map((country)=>{
                return(
                    <Link exact to={"/" + country.alpha3Code} countries={props.countries}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`} alt="country flag"/>
                        <p>{country.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}