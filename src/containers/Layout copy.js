import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Content from '../components/Content'

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Layout
