import React from 'react';
import { closeSidebar } from '../utils/toggleClass';
import Sidebar from './sidebar/Sidebar';

const SidebarFilter = () => {
    return (
        <div className='sidebar-window filter'>
            <span
                className='close-window'
                onClick={() => closeSidebar('.sidebar-window.filter')}
            >&#10006;</span>
            {/* <Sidebar /> */}
        </div>
    )
}

export default SidebarFilter;