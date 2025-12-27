import React from 'react'
import style from "./footer.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineLiveTv } from "react-icons/md";



const MainFooter = () => {


 const footerLinks = [
  {
    title: "FAQ",
    links: [
      "Investor Relations",
      "Ways to Watch",
      "Corporate Information",
      "Legal Notices"
    ]
  },
  {
    title: "Help Centre",
    links: [
      "Jobs",
      "Terms of Use",
      "Contact Us",
      "Only on Netflix"
    ]
  },
  {
    title: "Account",
    links: [
      "Redeem gift cards",
      "Privacy",
      "Speed Test",
      "Advert choices"
    ]
  },
  {
    title: "Media Centre",
    links: [
      "Buy gift cards",
      "Cookie Preferences",
      "Legal Guarantee"
    ]
  }
];


  return (
    <div className={style.footer}>
      <span className={style.un}>Customize ? Contact Us.</span>
      <div className={style.mainSec}>

         {footerLinks.map((item,index)=>(

          <div key={index} className={style.section}>
            <h4>{item.title}</h4>
            {item.links.map((item,index)=>(
                   <span key={index}>{item}</span>
            ))}
           
           
            
        </div>
             
         ))}

        
      </div>
      <span className={style.language}>English <IoMdArrowDropright size={"1.6em"}/></span>
      <span className={style.origin}>Drameeeo India <MdOutlineLiveTv size={"1.3em"} color='rgb(255, 0, 128)'/></span>
    </div>
  )
}

export default MainFooter