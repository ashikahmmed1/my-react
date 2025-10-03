import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)
    console.log(handleVisitedCountries)

    const handleVisited = () =>{
        // first 1
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // secund 2
        // setVisited(visited ? false : true);
        // tgol vesited 3
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited &&  'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} 
                {country.area.area > 300000  ?  "Big Country" : 'Small country'
                }</p>
                <button onClick={handleVisited}>
                    {visited ? 'Visited' : 'Not Visited' }
                </button>
                <button onClick={() =>{handleVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;

/**
 * 1. inline css (style object)
 * 
 * 
 */