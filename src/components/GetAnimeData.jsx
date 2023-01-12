import AnimeItem from "./AnimeItem"
import UseFetch from "./UseFetch" 



export const GetAnimeData = () =>{
  const data = UseFetch(`https://gogoanime.consumet.org/popular`);
return (
  <div className="animebox">
    <ul>
      {data &&
          data.map(({ animeId, animeTitle, animeImg, releasedDate, animeUrl }) => (
            <AnimeItem key={animeId} animeId={animeId} animeTitle={animeTitle} animeImg={animeImg} releasedDate={releasedDate} animeUrl={animeUrl}></AnimeItem>
          ))}
      </ul>
  </div>
);
}
export default GetAnimeData;