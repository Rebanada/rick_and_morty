import '../styles/layout/Header.scss';
import logoSerie from '../images/rick.jpg';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={logoSerie} alt='Logo' />
    </header>
  );
};

export default Header;
