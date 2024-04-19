import React from 'react'
import Header from '../components/Header/header'
import Title from '../components/Title/Title'
import Carrusel from '../components/Carrusel/Carrusel'
import Search from '../components/searchBar/Search'
import Categories from '../components/categories/Categories'
import Interestelar from '../components/interestelar/Interestelar'
import Subs from '../components/subs/Subs'
import Fee from '../components/fee/Fee'

function Home() {
  return (
    <>
      <Header/>
      <Title/>
      <Carrusel/>
      <Search/>
      <Categories/>
      <Interestelar/>
      <Subs/>
      <Fee/>
    </>
  )
}

export default Home