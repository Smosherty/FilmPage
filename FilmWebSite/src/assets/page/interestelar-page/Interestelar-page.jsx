import React from 'react'
import Header from '../../components/Header/header'
import InterestelarHeaderImg from '../../components/components2/interestelar-header-img/InterestelarHeaderImg'
import InterestelarLookNow from '../../components/components2/Interestelar-look-now/InterestelarLookNow'
import Relevant from '../../components/components2/relevance/Relevant'

function InterestelarPage() {
  return (
    <>
      <Header/>
      <InterestelarHeaderImg/>
      <InterestelarLookNow/>
      <Relevant/>
    </>
  )
}

export default InterestelarPage