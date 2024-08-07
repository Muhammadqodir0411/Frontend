import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import News from '../news/News'

function Layout() {
  return (
    <Fragment>
        <Header />
        
        <Outlet />
        <News />
        <Footer />
    </Fragment>
  )
}

export default Layout