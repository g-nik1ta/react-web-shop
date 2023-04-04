import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreUserInfo, loginEmailUserCreator, loginUserCreator } from '../../../store/authReducer';
import Loader from '../../UI/loader/Loader';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { openSidebar } from '../../../utils/toggleClass';
import { useFetching } from '../../../hooks/useFetching';
import PostService from '../../../API/PostService';

const Auth = () => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const auth = getAuth(app);

    const [fetchUser, isUserLoading, userError] = useFetching(async (email) => {
        const userData = await PostService.getLoginUser(email);
        userData && dispatch(addMoreUserInfo({
            name: userData.name,
            surname: userData.surname,
            telephone: userData.telephone,
        }));
    });

    const [userData, loading, error] = useAuthState(auth)
    useEffect(() => {
        if (userData) {
            userData.displayName
                ?
                dispatch(loginUserCreator({
                    id: userData.uid,
                    name: userData.displayName,
                    email: userData.email,
                    photoURL: userData.photoURL,
                }))
                :
                dispatch(loginEmailUserCreator({
                    id: userData.uid,
                    email: userData.email,
                }))
            fetchUser(userData.email);
        }
    }, [userData])

    if (error || userError) {
        return <h6>Произошла ошибка!</h6>
    }

    if (loading || isUserLoading) {
        return <Loader
            scale={0.4}
            style={{ width: '100px', height: '40px' }}
        />
    }

    return (
        <>
            {
                user.id
                    ?
                    <span
                        className="auth"
                        onClick={() => openSidebar('.sidebar-window.login')}
                    >
                        Здравствуйте, {
                            user.name
                                ?
                                user.name
                                :
                                user.email
                        }
                    </span>
                    :
                    <span
                        className="auth"
                        onClick={() => openSidebar('login')}
                    >
                        Войти
                    </span>
            }
        </>
    )
}

export default Auth;