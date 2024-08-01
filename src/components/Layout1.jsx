import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const Layout1 = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout1
