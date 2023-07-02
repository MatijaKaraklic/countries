import { useParams } from 'react-router-dom';

import './Country.css';

function Country() {
  const { name } = useParams();
  
  return (
    <div className='Country-body'>
      {name}
    </div>
  );
}

export default Country;
