import React from 'react'
import Header from '../../components/Header/header'
import InterestelarHeaderImg from '../../components/components2/interestelar-header-img/InterestelarHeaderImg'
import InterestelarLookNow from '../../components/components2/Interestelar-look-now/InterestelarLookNow'
import Relevant from '../../components/components2/relevance/Relevant'
import Casting from '../../components/components2/casting/Casting'
import Moments from '../../components/components2/moments/Moments'
import CarruselSimilar from '../../components/components2/carruselSimilar/CarruselSimilar'
import Footer from '../../components/footer/Footer'

function InterestelarPage() {
  return (
    <>
      <Header/>
      <InterestelarHeaderImg/>
      <InterestelarLookNow/>
      <Relevant/>
      <Casting/>
      <Moments/>
      <CarruselSimilar/>
      <Footer/>
    </>
  )
}

export default InterestelarPage