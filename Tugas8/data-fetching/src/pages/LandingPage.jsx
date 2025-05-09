import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function LandingPage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://nonskuy-backend.vercel.app/api/movie/trending")
      .then((res) => {
        setTrendingMovies(res.data.data.movies);
      })
      .catch((err) => {
        console.error("Gagal mengambil data film trending:", err);
      });
  }, []);

  return (
    <>
      {/* Minion Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-20 "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://image.tmdb.org/t/p/original/15IZl405E664QDVxpFJBl7TtLmw.jpg")`,
        }}
      >
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-5xl font-bold">Minions</h1>
          <p className="text-gray-300">📅 Year: 2015</p>
          <p className="text-gray-200">
            The Minions are small, yellow creatures who have existed since the
            beginning of time, evolving from single-celled organisms into beings
            who exist only to serve history's most despicable masters.
          </p>
          <Link to="/movies/minions">
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
              See Detail
            </button>
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-blue-900 text-white px-20 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Trending Movies</h2>
        {trendingMovies.length === 0 ? (
          <p>Loading trending movies...</p>
        ) : (
          <div className="grid grid-cols-6 gap-4">
            {trendingMovies.map((movie, index) => (
              <Link key={index} to={`/movies/${movie._id}`}>
                <MovieCard data={movie} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
