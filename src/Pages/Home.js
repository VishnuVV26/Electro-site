import React from 'react'
import Banner from '../Components/Banner/Banner'
import LatestMobiles from '../Components/Mobiles/LatestMobiles'
import LatestLap from '../Components/Laptops/LatestLap'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestMobiles/>
      <LatestLap/>
    </div>
  )
}

export default Home