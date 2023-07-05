import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Country.css';

function Country() {
  const [data, setData] = useState(null);

  const { cca3 } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`).then(response => response.json()).then(json => {setData(json[0])});
  }, []);

  const formatArray = (array) => {
    if(array === undefined) return '\u00A0';
    var text = '';
    array.map((item) => {
        text += item;
        text += ', ';
      });
    text = text.slice(0, -2);
    return text;
  }
  
  return (
    <div className='Country-body'>
      {(data === null) ? (
        (<p className='loading'>Loading...</p>)
      ) : (
        (data === undefined) ? (
          (<p className='error-404'>404</p>)
        ) : (
          (<div className='container Country-container'>
          <h2 className='Country-name'>{data.name.common}</h2>
          <h3 className='Country-official-name'>{data.flag} {'\u00A0'} {data.name.official}</h3>
          <img className='Country-flag' src={data.flags.png} alt={data.flags.alt}/>
          <div className='Country-block'>
            <div className='Country-informations'>
              <p><span className='Country-highlight'>Capital:</span> {formatArray(data.capital)}</p>
              <br />
              <p><span className='Country-highlight'>Region:</span> {data.region}</p>
              <p><span className='Country-highlight'>Subregion:</span> {data.subregion}</p>
            </div>
            <div className='Country-informations'>
              <p><span className='Country-highlight'>Continent:</span> {formatArray(data.continents)}</p>
              <br />
              <p><span className='Country-highlight'>Area:</span> {data.area.toLocaleString()} km²</p>
              <p><span className='Country-highlight'>Population:</span> {data.population.toLocaleString()}</p>
            </div>
          </div>
          <div className='Country-block'>
            <div className='Country-informations'>
              <p><span className='Country-highlight'>Independent:</span> {data.independent ? 'yes' : 'no'}</p>
              <p><span className='Country-highlight'>UN member:</span> {data.unMember ? 'yes' : 'no'}</p>
            </div>
            <div className='Country-informations'>
              <p><span className='Country-highlight'>Timezones:</span> {formatArray(data.timezones)}</p>
            </div>
          </div>
          <div className='Country-block'>
            <div className='Country-informations'>
              <p><span className='Country-highlight'>Start of week:</span> {data.startOfWeek}</p>
              <p><span className='Country-highlight'>Car side:</span> {data.car.side}</p>
            </div>
            <div className='Country-informations'>
              <span className='Country-highlight'>Border countries: </span>
              {(data.borders === undefined) ? '\u00A0' : (
              data.borders.map(country => {
                const link = '/country/' + country;
                return (<span className='Country-border-country-span'><a className='Country-border-country' href={link}>{country}</a>{'\u00A0'}</span>)
              }))}
            </div>
          </div>
        </div>)
        )
      )}
    </div>
  );
}

export default Country;
