import './root.css';

import { BrowserRouter as Route, Routes } from 'react-router-dom';
import GetAnimeData from '../components/GetAnimeData';
import Navbar from '../components/Navbar'
import Top100 from '../routes/Top100'
import Favorites from './Favorites'
import Home from '../components/home';



export default function Root() {
  return (
    <router>
    <div className=''>
        <Navbar />
        <route exact path="/" component={Home} />
        <route path="/Top100" component={Top100} />
        <route path="/Favorites" component={Favorites} />
      <div className="app">
        <h1>Anime API</h1>
        <GetAnimeData />
      </div>
      </div>
    </router>
  )
}