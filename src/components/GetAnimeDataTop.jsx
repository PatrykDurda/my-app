import AnimeItemTop from "./AnimeItemTop"
import UseFetch from "./UseFetch" 



export const GetAnimeDataTop = () =>{
  const data = UseFetch(`https://gogoanime.consumet.org/popular`);
return (
  <div className="animebox">
    <ul>
      {data &&
          data.map(({ animeId, animeNumber, animeTitle, animeImg, releasedDate, animeUrl }) => (
              <AnimeItemTop key={animeId} animeNumber={animeNumber} animeId={animeId} animeTitle={animeTitle} animeImg={animeImg} releasedDate={releasedDate} animeUrl={animeUrl}></AnimeItemTop>
          ))}
      </ul>
  </div>
);
}
export default GetAnimeDataTop;