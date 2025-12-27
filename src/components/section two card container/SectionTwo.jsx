import React from 'react'
import style from "./sectiontwo.module.css";
import MovieCard from '../movie card/MovieCard';
import data from "../../data";

const SectionTwo = () => {
  return (
    <div className={style.container}>
        {data.map((item,index)=><MovieCard key={index} item={item}/>)}
    </div>
  )
}

export default SectionTwo