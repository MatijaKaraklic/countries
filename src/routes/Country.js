import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Country.css';

function Country() {
  const [data, setData] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => response.json()).then(json => {setData(json[0])});
  }, [])
  
  return (
    <div className='Country-body'>
      {(data === null) ? (
        (<p className='loading'>Loading...</p>)
      ) : (
        (<div className='container Country-container'>
          <h2 className='Country-name'>{data.name.common}</h2>
          <h3 className='Country-official-name'>{data.flag} {'\u00A0'} {data.name.official}</h3>
          <img className='Country-flag' src={data.flags.png} />
          <img className='Country-coatOfArms' src={data.coatOfArms.png} />
        </div>)
      )}
    </div>
  );
}

export default Country;
