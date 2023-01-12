import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='logo'>Anime Logo</div>
      <div>ANIME TOPS</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Top100">Top 100</Link>
      </div>
      <div>
        <Link to="/Favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;