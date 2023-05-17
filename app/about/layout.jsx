import Header from "../components/Header";
import Footer from "../components/Footer";


import React from 'react'

function layout({children}) {
  return (
    <div>
    <Header/>
      {children}
    <Footer/>
    </div>
  )
}

export default layout