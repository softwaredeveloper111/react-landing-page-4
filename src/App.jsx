import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Nav from './components/Nav bar/Nav'
import MainCard from './components/main card/MainCard'
import Heading from './components/heading of header/Heading'
import SectionOneCardContainer from './components/Section one card container/SectionOneCardContainer'
import SectionTwo from './components/section two card container/SectionTwo'
import MainFooter from "./components/Footer/MainFooter";

const App = () => {

  return (
    <div className='main'>

    <Sidebar/>
    <div className='app'>
       <Nav/>
       <MainCard />
       <Heading heading="Continue Watching" />
       <SectionOneCardContainer/>
       <Heading heading="You Might Like"/>
       <SectionTwo/>
       <MainFooter/>
   </div>

    </div>
  )
}

export default App