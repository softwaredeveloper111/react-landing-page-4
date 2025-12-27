import React from 'react'
import style from "./moviecard.module.css";

const MovieCard = ({item}) => {
  let {title,poster,year,genre} = item
  return (
    <div className={style.card}>
      <div className={style.movieBanner}>
             <img src={poster} alt="" />
      </div>
      <div className={style.cardData}>
        <span>{title}</span>
        <span>{genre}</span>
        <span>{year}</span>
      </div>
    </div>
  )
}

export default MovieCard