import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container-fluid" >
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="foot-item">
            <Link className="nav-link " to="/" exact>Home</Link>
          </li>
          <li className="foot-item">
            <Link className="nav-link " to="/about">About</Link>
          </li>
          <li className="foot-item">
            <Link className="nav-link " to="/list">List</Link>
          </li>
        </ul>
        <div data-testid="footer-content">
          <p className="text-center">© 2024 APPSTORE</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



