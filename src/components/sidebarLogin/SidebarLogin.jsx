import React, { useState } from 'react';
import { closeSidebar } from '../../utils/toggleClass';
import Login from './Login';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import Register from './Register';
import ResetPassword from './ResetPassword';

const SidebarLogin = () => {
    const user = useSelector(state => state.authReducer.user);
    const [isRegister, setIsRegister] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);

    return (
        <div className='sidebar-window login'>
            <span
                className='close-window'
                onClick={() => closeSidebar('login')}
            >&#10006;</span>
            <div className="content">
                {
                    user.id
                        ?
                        <Profile user={user} />
                        :
                        isRegister
                            ?
                            <Register
                                setIsRegister={setIsRegister}
                                setResetPassword={setResetPassword}
                            />
                            :
                            resetPassword
                                ?
                                <ResetPassword
                                    setIsRegister={setIsRegister}
                                    setResetPassword={setResetPassword}
                                />
                                :
                                <Login
                                    setIsRegister={setIsRegister}
                                    setResetPassword={setResetPassword}
                                />
                }
            </div>
        </div>
    )
}

export default SidebarLogin;