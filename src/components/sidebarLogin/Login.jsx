import React, { useState } from 'react';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/loader/Loader';
import { fetchErrorCode, setValuesError, validations } from '../../utils/formValidations';
import FormFields from '../FormFields';

const Login = (props) => {
    const auth = getAuth(app);
    const [values, setValues] = useState({
        email: {
            value: '',
            required: true,
            error: false,
            errorMessage: '',
        },
        password: {
            value: '',
            required: true,
            error: false,
            errorMessage: '',
        },
        remember: {
            value: false,
            required: false,
            error: false,
            errorMessage: '',
        },
    });

    const googleLoginUser = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }
    const facebookLoginUser = async () => {
        const provider = new FacebookAuthProvider();
        await signInWithPopup(auth, provider);
    }

    const [fetchLogin, isLoginLoading, loginError] = useFetching(async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                fetchErrorCode(errorCode, values, setValues);
                console.log(errorMessage);
            })
    });

    const sendForm = async (e) => {
        e.preventDefault();
        const keyFound = validations(values);
        if (keyFound.length) {
            setValuesError(values, setValues, keyFound);
        } else {
            const formValues = {
                id: Date.now(),
                email: values.email.value.trim(),
                password: values.password.value,
                remember: values.remember.value,
            }
            fetchLogin(formValues.email, formValues.password)
        }
    }

    return (
        <>
            <h1 className="title">Вход</h1>
            {
                loginError &&
                <h4>Возникла ошибка! <br /> <i>{loginError}</i></h4>
            }
            {
                isLoginLoading
                    ?
                    <Loader scale={.5} />
                    :
                    <div className="content">
                        <form>
                            <FormFields 
                                values={values}
                                item={'email'}
                                title={'Email'}
                                setValues={setValues}
                            />
                            <FormFields 
                                values={values}
                                item={'password'}
                                title={'Пароль'}
                                setValues={setValues}
                            />
                            <div className='add-fields'>
                                <div className="remember">
                                    <input
                                        type="checkbox"
                                        id='remeberMe'
                                        checked={values.remember.value}
                                        onChange={() => setValues({
                                            ...values, remember: {
                                                ...values.remember, value: !values.remember.value
                                            }
                                        })}
                                    />
                                    <label htmlFor="remeberMe">Запомнить меня?</label>
                                </div>
                                <span
                                    className="forgot-password"
                                    onClick={() => props.setResetPassword(true)}
                                >Забыли пароль?</span>
                            </div>
                            <div className="login-with">
                                <span>Войти через</span>
                            </div>
                            <div className="logins-methods">
                                <div
                                    className='facebook-btn'
                                    onClick={facebookLoginUser}
                                >
                                    Facebook
                                </div>
                                <div
                                    className='google-btn'
                                    onClick={googleLoginUser}
                                >
                                    Google
                                </div>
                            </div>
                            <button
                                onClick={sendForm}
                                className="sendFormBtn"
                            >
                                Вход
                            </button>
                        </form>
                        <div className="sign-in-block">
                            Нет учетной записи?&nbsp;
                            <span onClick={() => props.setIsRegister(true)}>
                                Зарегестрироваться
                            </span>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login;