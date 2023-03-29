import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import PostService from '../../API/PostService';
import { app } from '../../firebase';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/loader/Loader';
import { errorText, fetchErrorCode, setValuesError, validations } from '../../utils/formValidations';
import FormFields from '../FormFields';

const Register = (props) => {
    const auth = getAuth(app);

    const [values, setValues] = useState({
        email: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
        password: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
        confirmPassword: {
            value: '',
            required: true,
            error: false,
        },
        name: {
            value: '',
            required: true,
            error: false,
        },
        surname: {
            value: '',
            required: false,
            error: false,
        },
        telephone: {
            value: '',
            required: false,
            error: false,
        },
    });

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        await createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
            .then(async () => {
                await PostService.sendRegisterForm(formValues);
                props.setIsRegister(false);
            })
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
                email: values.email.value,
                name: values.name.value,
                password: values.password.value,
                surname: values.surname.value.trim(),
                telephone: values.telephone.value.trim(),
            }
            await fetchForm(formValues);
        }
    }

    return (
        <>
            <h1 className="title">Регистрация</h1>
            {
                formError &&
                <h4>Возникла ошибка! <br /> <i>{formError}</i></h4>
            }
            {
                isFormLoading
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
                            <FormFields
                                values={values}
                                item={'confirmPassword'}
                                title={'Повторите пароль'}
                                setValues={setValues}
                            /> 
                            <FormFields
                                values={values}
                                item={'name'}
                                title={'Имя'}
                                setValues={setValues}
                            /> 
                            <FormFields
                                values={values}
                                item={'surname'}
                                title={'Фамилия'}
                                setValues={setValues}
                            /> 
                            <FormFields
                                values={values}
                                item={'telephone'}
                                title={'Номер телефона'}
                                setValues={setValues}
                            /> 
                            <button
                                onClick={sendForm}
                                className="sendFormBtn"
                            >
                                Зарегистрироваться
                            </button>
                        </form>
                        <div className="sign-in-block">
                            <span onClick={() => props.setIsRegister(false)}>
                                Вход&nbsp;
                            </span>
                            |
                            <span onClick={() => {
                                props.setIsRegister(false)
                                props.setResetPassword(true)
                            }}> Забыли пароль?</span>
                        </div>
                    </div>
            }
        </>
    )
}

export default Register;