import GetAnimeDataTop from '../components/GetAnimeDataTop';
import Navbar from '../components/Navbar'

function Top100() {
    return (
        <div className=''>
        <Navbar />
      <div className="app">
        <h1>Top 100</h1>
        <GetAnimeDataTop />
      </div>
    </div>
    )
}

export default Top100