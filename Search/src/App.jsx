import { useState } from "react";
import MovieCard from "./component/MovieCard";
import Navabar from "./component/Navabar";
import SearchBar from "./component/SearchBar";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const [loading, setLoading] = useState(false);
  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=f23645c3`
      );
      const data = await res.json();
      setAllMovieData(data.Search);
      console.log(data.Search);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navabar />
      <div className="bg ">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
