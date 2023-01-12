const AnimeItem = ({animeId, animeTitle, animeImg, releasedDate, animeUrl}) => {
    return (
        <li className="item" key={animeId}>
        <h3>{animeTitle}</h3>
        <img className="image" alt="Anime logo" src={animeImg}></img>
        <h4>{releasedDate}</h4>
        <a className="link" href={animeUrl}>Link to anime</a>
        </li>
    )
}

export default AnimeItem