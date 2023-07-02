import {useState, useEffect} from 'react';

import './Card.css';

import areaLogo from '../imgs/area.png';
import capitalLogo from '../imgs/capital.png';
import populationLogo from '../imgs/population.png';

function Card(props) {

  const data = props.data.country;

  const getAllCapitals = (capitals) => {
    var text = '';
    capitals.map((capital) => {
        text += capital;
        text += ', ';
      });
    text = text.slice(0, -2);
    if(text === '') text = '\u00A0';
    return text;
  }

  return (
    <div className='Card-body'>
      <div className='Card-img-container'>
        <img src={data.flags.png}/>
      </div>
      <div className='Card-content'>
        <h4>{data.name.common}</h4>
        <p className='Card-capital'>{getAllCapitals(data.capital)}</p>
        <p className='Card-area'>Area: {data.area.toLocaleString()} km²</p>
        <p className='Card-population'>Population: {data.population.toLocaleString()}</p>
      </div>
    </div>
  );
}
  
export default Card;
  