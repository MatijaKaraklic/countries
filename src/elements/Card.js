import './Card.css';

function Header(props) {

    const data = JSON.parse(props.data);

    return (
        <div className='Card-body'>
            {data.name.common}
        </div>
    );
}
  
export default Header;
  