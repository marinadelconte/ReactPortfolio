import { Link, useLocation } from 'react-router-dom';
import Header from '/src/components/Header';
import '../styles/styles.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <Header/>
    <ul className="nav nav-pills mb-3 nav-justified">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link ' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link ' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link ' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resumé"
          className={currentPage === '/Resumé' ? 'nav-link ' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link ' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
    );
}

export default NavTabs;
