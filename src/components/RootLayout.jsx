import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <footer>

            </footer>
        </>

    )
}

export default RootLayout