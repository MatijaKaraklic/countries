import { useState, useEffect } from 'react';

import Card from '../elements/Card';

import './Home.css';

function Home() {

  const [data, setData] = useState(null);

  // name, flags, capital, population, area
  // ToDo: add img download to await;
  // ?fields=name,flags,capital,population,area

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area,cca3').then(response => response.json()).then(json => {setData(json)});
  }, [])


  return (
    <div className='Home-body'>
      <div className='container Home-container'>
        {(data === null) ? (
          (<p className='loading'>Loading...</p>)
        ) : (
          data.map(country => {
            return (<Card data={{ country: country }} />);
          })
        )}
      </div>
    </div>
  );
}

export default Home;
