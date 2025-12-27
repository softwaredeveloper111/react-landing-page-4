import React from 'react'
import style from "./heading.module.css";

const Heading = ({heading}) => {
  return (
    <div className={style.heading}>
       <span>{heading}</span>
       <span>See All</span>
    </div>
  )
}

export default Heading