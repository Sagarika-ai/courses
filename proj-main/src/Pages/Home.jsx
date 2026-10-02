import React from 'react'
import Hero from '../Component/Hero'
import LatestCollecion from '../Component/LatestCollecion'
import BestSeller from '../Component/BestSeller'
import Policy from '../Component/Policy'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollecion/>
      <BestSeller />
      <Policy />
    </div>
  )
}

export default Home
