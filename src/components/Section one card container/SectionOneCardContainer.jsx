import React from 'react'
import style from "./sectiononecardcontinaer.module.css";
import Card from '../Cards/Card';
import bannerOne from "../../assets/banner-1.png";
import bannerTwo from "../../assets/banner-2.png";
import bannerThree from "../../assets/banner-3.png";
import bannerFour from "../../assets/banner-4.png";
import bannerFive from "../../assets/banner-5.png";
import bannerSix from "../../assets/banner-6.png";

const SectionOneCardContainer = () => {
  return (
    <div className={style.cardContainer}>
      <Card bannerImage = {bannerOne } title="Midnight Mischief Squad" season="s1. Ep-3" duration="33Min 55Sec"/>
      <Card bannerImage = {bannerTwo } title="Legend of the Emerald Mist" season="s2. Ep-1" duration="36Min 15Sec"/>
      <Card bannerImage = { bannerThree } title="Rise of the Last Guardian" season="s2. Ep-1" duration="30Min 55Sec"/>
      <Card bannerImage = { bannerFour } title="The Witcher" season="s4. Ep-5" duration="50Min 55Sec"/>
      <Card bannerImage = { bannerFive } title="The Legends of Warrior" season="s4. Ep-5" duration="50Min 55Sec"/>
      <Card bannerImage = { bannerSix } title="The Synchronize" season="s4. Ep-5" duration="50Min 55Sec"/>

     
    </div>
  )
}

export default SectionOneCardContainer