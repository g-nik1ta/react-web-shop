import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../../firebase';
import { useFetching } from '../../hooks/useFetching';
import { fetchErrorCode, validations } from '../../utils/formValidations';
import FormFields from '../FormFields';
import Loader from '../UI/loader/Loader';
import SuccessResetPassword from './SuccessResetPassword';

const ResetPassword = (props) => {
    const [successReset, setSuccessReset] = useState(false);
    const auth = getAuth(app);

    const [values, setValues] = useState({
        email: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
    });

    const [fetchForm, isFormLoading, formError] = useFetching(async (email) => {
        await sendPasswordResetEmail(auth, email.value.trim())
            .then(() => { setSuccessReset(true) })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                fetchErrorCode(`RESET_PASSWORD_${errorCode}`, values, setValues);
                console.log(errorMessage);
            })
    })

    const sendForm = async (e) => {
        e.preventDefault();
        const keyFound = validations(values);
        if (keyFound.length) {
            setValues({
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: ''
                }
            });
        } else {
            await fetchForm(values.email);
        }
    }

    return (
        <>
            {
                successReset
                    ?
                    <SuccessResetPassword setResetPassword={props.setResetPassword} />
                    :
                    <>
                        <h1 className="title">Вход</h1>
                        {
                            formError &&
                            <h4>Возникла ошибка! <br /> <i>{formError}</i></h4>
                        }
                        {
                            isFormLoading
                                ?
                                <Loader scale={.5} />
                                :
                                <div className="sign-in__wrapper">
                                    <p className='description'>Пожалуйста, укажите адрес электронной почты и мы вышлим Вам инструкцию, как изменить пароль на новый.</p>
                                    <form>
                                        <FormFields
                                            values={values}
                                            item={'email'}
                                            title={'Email'}
                                            setValues={setValues}
                                        />
                                        <button
                                            onClick={sendForm}
                                            className="sendFormBtn"
                                        >
                                            Отправить
                                        </button>
                                    </form>
                                    <div className="sign-in-block">
                                        <span onClick={() => props.setResetPassword(false)}>
                                            Вход&nbsp;
                                        </span>
                                        |
                                        <span onClick={() => {
                                            props.setResetPassword(false)
                                            props.setIsRegister(true)
                                        }}> Зарегистрироваться</span>
                                    </div>
                                </div>
                        }
                    </>
            }
        </>
    )
}

export default ResetPassword;