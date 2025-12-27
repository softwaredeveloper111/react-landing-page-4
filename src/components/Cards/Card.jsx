import React from 'react'
import style from "./card.module.css";

const Card = ({bannerImage,title,season,duration}) => {
  console.log(title)
  console.log(season)
  console.log(season)
  console.log(duration)
  return (
    <div className={style.card}>
       <img src={bannerImage} alt="" />
       <div className={style.data}>

          <span className={style.title}>{title}</span>


          <div className={style.one}>
            <span>{season}</span>
            <span>{duration}</span>
          </div>

          <div className={style.completeBar}>
            <span></span>
          </div>
       </div>
    </div>
  )
}

export default Card           