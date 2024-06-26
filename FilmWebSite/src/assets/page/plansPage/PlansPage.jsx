import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/footer/Footer'
import VoidDiv from '../../components/components3/void/VoidDiv'
import Profile from '../../components/components4/profile/Profile'
import ProfileIcons from '../../components/components4/profileIcons/ProfileIcons'
import PlanTitle from '../../components/components4/planTitle/PlanTitle'
import Plans from '../../components/components4/plans/Plans'

function PlansPage() {
  return (
    <>
      <Header/>
      <VoidDiv/>
      <Profile/>
      <ProfileIcons/>
      <PlanTitle/>
      <Plans/>
      <Footer/>
    </>
  )
}

export default PlansPage