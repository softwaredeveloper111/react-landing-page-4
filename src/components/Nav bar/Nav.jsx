import React from 'react'
import style from "./nav.module.css";
import { CiSearch } from "react-icons/ci";
import bellIcon from "../../assets/bellIcon.png";
import crown from "../../assets/crown.png"

const Nav = () => {
  return (
    <div className={style.navbar}>
       <div className={style.inputDiv}>
        <span><CiSearch color='white' size={"1.3em"}/></span>
        <input type="text" placeholder='search for films,directors or actors..' />
        
       </div>

       <div className={style.navIcon}>
        <span>
          <img src={bellIcon} alt="" />
        </span>
        <span>
          <img className={style.bell} src="https://i.pinimg.com/1200x/21/16/79/21167985309ef9075d3226e44318aa1b.jpg" alt="" />
          <img className={style.crowns} src={crown} alt="" />
        </span>
       </div>
    </div>
  )
}

export default Nav