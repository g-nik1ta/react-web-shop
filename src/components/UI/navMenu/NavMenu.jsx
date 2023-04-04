import React, { useRef } from 'react';
import { toggleSidebar } from '../../../utils/toggleClass';
import './NavMenu.css';

const NavMenu = () => {
    const navMenuRef = useRef();
    const toggleActive = () => {
        navMenuRef.current.classList.toggle("active");
        toggleSidebar('.sidebar-nav');
        toggleSidebar('body');
        toggleSidebar('.app');
    }

    return (
        <div
            className='navMenu'
            onClick={toggleActive}
            ref={navMenuRef}
        >
            <span></span>
        </div>
    )
}

export default NavMenu;