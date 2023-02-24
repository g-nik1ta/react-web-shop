import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserCreator, signOutUserCreator } from '../../../store/authReducer';
import Search from '../search/Search';
import cls from './Header.module.css';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const auth = getAuth(app)

    const loginUser = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
    }
    const signOutUser = async () => {
        await auth.signOut()
        dispatch(signOutUserCreator());
    }

    const [userData] = useAuthState(auth)
    useEffect(() => {
        // console.log('Auth: ', !!userData);
        userData && dispatch(loginUserCreator({
            id: userData.uid,
            accessToken: userData.accessToken,
            name: userData.displayName,
            email: userData.email
        }));
        // console.log(userData);
    }, [userData])

    return (
        <header className={cls.header__wrapepr}>
            <div className={`${cls.header__content} row`}>
                <a href='' className={cls.logo}>
                    <strong>Tech </strong>
                    world
                </a>
                <Search />
                {
                    userData
                        ?
                        <span
                            className={cls.auth}
                            onClick={signOutUser}
                        >Выйти</span>
                        :
                        <span
                            className={cls.auth}
                            onClick={loginUser}
                        >Войти</span>
                }
            </div>
        </header>
    )
}

export default Header;