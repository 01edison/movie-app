import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const HomeCategory = ({ categoryName, type }) => {
  const { VITE_OMDB_KEY } = import.meta.env;
  const [movies, setMovies] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);

  window.addEventListener("resize", () => {
    setScreenWidth(window.screen.width);
  });
  const getMovies = async () => {
    try {
      const {
        data: { Search },
      } = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          apiKey: VITE_OMDB_KEY,
          s: "man",
          type,
        },
      });
      console.log(Search);
      setMovies(Search);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
    setScreenWidth(window.screen.width);
  }, [window.screen.width]);
  return (
    <>
      <h3 className="category-name">{categoryName}</h3>
      {/* <div className="home-category">
        {movies.map((movie, i) => (
          <Movie key={i} title={movie.Title} poster={movie.Poster} />
        ))}
      </div> */}
      <Swiper
        slidesPerView={
          screenWidth > 320 ? (screenWidth > 834 ? 4.5 : 2.5) : 1
        }
        spaceBetween={13}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {movies?.map((movie, i) => (
          <SwiperSlide>{movie.Title}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCategory;
