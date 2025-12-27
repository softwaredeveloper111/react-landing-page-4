import React from 'react'
import style from "./maincard.module.css";
import { FaPlay } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";


const MainCard = () => {
  return (
    <div className={style.mainCard}> 
        <span className={style.trending}>🔥 New Trending</span>
        <div className={style.drama}>
          <span>Drama</span>
          <span>Fantacy</span>
        </div>
        <div className={style.heading}>
          <h1>Dimension Kids on  an Adventure</h1>
          <p>When two curious kids stumble into a hidden portait they travel across magical dimension  try to find their way home.</p>
        </div>

        <div className={style.iconContainer}>
          <div className={style.icon}>
           <button> <FaPlay /> Watch Now</button>
           <span>
            <LuDownload  size={"1.2em"}/>
           </span>
           <span>
            <HiDotsHorizontal size={"1.2em"} />
           </span>
          </div>

          <div className={style.carasoul}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default MainCard