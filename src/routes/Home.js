import {useState, useEffect} from 'react';

import Card from '../elements/Card';

import './Home.css';

function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then(response => response.json()).then(json => {setData(json)});
  }, [])


  return (
    <div className='Home-body'>
      <div className='container Home-container'>
        {(data === null) ? (
          'Loading...'
        ) : (
          data.map(county => {
            let data = JSON.stringify(county);
            return (<Card data={data} />);
          })
        )}
      </div>
    </div>
  );
}

export default Home;
