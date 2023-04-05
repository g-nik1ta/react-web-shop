import React from 'react';
import { closeSidebar } from '../utils/toggleClass';
import Sidebar from './sidebar/Sidebar';

const SidebarFilter = () => {
    return (
        <div className='sidebar-window filter'>
            <div className='close-window_wrapper'>
                <span
                    className='close-window'
                    onClick={() => closeSidebar('.sidebar-window.filter')}
                >&#10006;</span>
            </div>
            <Sidebar />
        </div>
    )
}

export default SidebarFilter;