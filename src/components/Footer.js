import { Link } from 'react-router-dom';

const backgroundImageStyle = {
  backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.DfsGWUClWpJOP8827aNaQQHaEo&pid=Api&P=0&h=180")',
  backgroundSize: 'cover',
  padding: '50px 0' // Optional: Adds some padding to the top and bottom
};

function Footer() {
  return (
    <div style={backgroundImageStyle}>
    <div className="container-fluid"  > 
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
    </div>
  );
}

export default Footer;



