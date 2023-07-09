import './Header.css';

function Header(props) {

  return (
  <header className='Header-body'>
    <div className='container Header-container'>
      <h1 onClick={() => { window.location.href = "/";}}>API | Countries</h1>
      <button className='Header-btn' onClick={props.toggleTheme}>theme</button>
      <a href={'https://restcountries.com/'} target={'_blank'}>restcountries.com</a>
    </div>
  </header>
  );
}

export default Header;
  