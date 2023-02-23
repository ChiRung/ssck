import Link from 'next/link'
import React, { useState } from 'react'
import 'styles/components/Header.css'
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleHeaderMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='headerContainer'>
            <Link className='headerLogo' href={"/"}>LOGO</Link>
            <button className='headerMenuBtn' onClick={toggleHeaderMenu}>버튼</button>
        </div>
    )
}
