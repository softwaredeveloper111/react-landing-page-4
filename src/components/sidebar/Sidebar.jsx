import React from 'react'
import style from "./sidebar.module.css";
import { MdOutlineLiveTv } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import SidebarNavIconLInks from '../Sidebar Nav icon/SidebarNavIconLInks';
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { IoBookmark } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineAddToQueue } from "react-icons/md";
import { BiSolidCollection } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
 
  return (
    <div className={style.sidebar}>
      
      <div className={style.sidebarHeader}>
        <h3> <MdOutlineLiveTv color='#64b9e0' size={"1.5em"}/> Drameeo</h3>
        <span><MdOutlineMenuOpen size={"1.5em"}/></span>
      </div>
      
      <div className={style.navLinks}>
         <SidebarNavIconLInks data = "Home" Icon={<IoMdHome/>}/>
         <SidebarNavIconLInks data = "Explore" Icon = {<MdOutlineExplore />}/>
         <SidebarNavIconLInks data = "Generes" Icon = {<SiBookstack />}/>
         <SidebarNavIconLInks data = "Favourites" Icon = {<IoBookmark />}/>

      </div>
      

      <div className={style.divider}></div>

      <div className={style.navLinks}>
         <SidebarNavIconLInks data = "Continue Watching" Icon={<CiPlay1 />}/>
         <SidebarNavIconLInks data = "Recently Add" Icon = {<MdOutlineAddToQueue />}/>
         <SidebarNavIconLInks data = "My Collections" Icon = {<BiSolidCollection />}/>
         <SidebarNavIconLInks data = "Downloads" Icon = {<LuDownload />}/>

      </div>

      <div className={style.divider}></div>

      <div className={style.footer}>
             <SidebarNavIconLInks data = "Settings" Icon={<IoSettingsOutline />}/>
             <SidebarNavIconLInks data = "Logout" Icon={<MdOutlineLogout />}/>
      </div>
    
    </div>
  )
}

export default Sidebar