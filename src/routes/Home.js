import { useState, useEffect } from 'react';

import Card from '../elements/Card';

import './Home.css';

function Home() {

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('');

  // name, flags, capital, population, area
  // ToDo: add img download to await;
  // ?fields=name,flags,capital,population,area

  useEffect(() => {
    console.log("PaPa");
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area,cca3').then(response => response.json()).then(json => {setData(json)});
  }, []);

  useEffect(() => {
    if(data === null) {
      setLoaded(false);
    }
    else setLoaded(true);
  }, [data]);

  const changeSearch = (e) => {
    setSearch(e.target.value);
  }

  const renderCards = (data, search) => {
    
    const cards = data.map(country => {
      const card = (<Card data={{ country: country }} />);

      if(search === '') return card;

      const name = country.name.common.replace(/\s+/g, '').toLowerCase();
      const searchQuery = search.replace(/\s+/g, '').toLowerCase();

      if(name.includes(searchQuery)) return card;
    });

    return cards;
  }
  

  return (
    <div className='Home-body'>
      {(data === null) ? (null) : (<input type='text' id='search-country' placeholder='Search country:' className='Home-input' onChange={changeSearch}/>)}
      <div className='container Home-container'>
        {(data === null) ? (
          (<p className='loading'>Loading...</p>)
        ) : (renderCards(data, search))}
      </div>
    </div>
  );
}

export default Home;
