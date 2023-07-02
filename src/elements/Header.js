import './Header.css';

function Header() {

  return (
  <header className='Header-body'>
    <div className='container Header-container'>
      <h1 onClick={() => { window.location.href = "/";}}>API | Countries</h1>
      <a href={'https://restcountries.com/'} target={'_blank'}>restcountries.com</a>
    </div>
  </header>
  );
}

export default Header;
  