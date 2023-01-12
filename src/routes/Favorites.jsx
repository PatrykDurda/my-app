import GetAnimeData from '../components/GetAnimeData';
import Navbar from '../components/Navbar'

function Favorites() {
    return ( 
        <div className=''>
        <Navbar />
      <div className="app">
        <h1>Favorites</h1>
        <GetAnimeData />
      </div>
    </div>
    )
}


export default Favorites