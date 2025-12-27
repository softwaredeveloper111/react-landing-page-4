import React from 'react'
import style from "./sidebarnaviconlinks.module.css";
import { IoMdHome } from "react-icons/io";

const SidebarNavIconLInks = ({data,Icon}) => {
  
  return (
    <div className={style.navICon}>
      <span>{Icon}</span>
      <span>{data}</span>
    </div>
  )
}

export default SidebarNavIconLInks