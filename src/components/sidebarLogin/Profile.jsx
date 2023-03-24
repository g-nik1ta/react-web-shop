import React from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase';
import { signOutUserCreator } from '../../store/authReducer';
import { useDispatch } from 'react-redux';

const Profile = ({ user }) => {
    const auth = getAuth(app);
    const dispatch = useDispatch();

    const signOutUser = async () => {
        await auth.signOut()
        dispatch(signOutUserCreator());
    }

    return (
        <>
            <div className="userData">
                {
                    user.photoURL
                        ?
                        <img
                            src={user.photoURL}
                            alt="avatar"
                            className='avatar'
                        />
                        :
                        <div className='default-avatar'></div>
                }
                <div className='name'>
                    {user.name}
                    <span>{user.email}</span>
                </div>
            </div>
            <div className="profile-links">
                <div className="item">
                    <span className='profile'>Профиль</span>
                </div>
                <div className="item">
                    <span className='favorites'>Избранное</span>
                </div>
                <div className="item">
                    <span className='comparison'>Сравнение товаров</span>
                </div>
                <div className="item">
                    <span className='orders'>Мои заказы</span>
                </div>
            </div>
            <div className='sign-out'>
                <button
                    onClick={signOutUser}
                    className="sign-out-btn"
                >
                    Выйти
                </button>
            </div>
        </>
    )
}

export default Profile;