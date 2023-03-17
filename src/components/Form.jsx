import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from './UI/loader/Loader';

const Form = () => {
    const [values, setValues] = useState({
        name: {
            value: '',
            required: true,
            error: false,
        },
        telephone: {
            value: '',
            required: false,
            error: false,
        },
        email: {
            value: '',
            required: true,
            error: false,
        },
        message: {
            value: '',
            required: false,
            error: false,
        },
    })

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        await PostService.sendForm(formValues);
    });

    const sendForm = (e) => {
        e.preventDefault();
        const keyFound = [];
        for (let key in values) {
            if (values[key].required && values[key].value === '') {
                keyFound.push(key)
            }
        }
        if (keyFound.length) {
            for (let key in values) {
                setValues(prevState => ({
                    ...prevState,
                    [key]: {
                        ...prevState[key],
                        error: false
                    }
                }));
            }
            keyFound.forEach(item => {
                setValues(prevState => ({
                    ...prevState,
                    [item]: {
                        ...prevState[item],
                        error: true
                    }
                }));
            })
        } else {
            const formValues = {
                name: values.name.value,
                telephone: values.telephone.value,
                email: values.email.value,
                message: values.message.value,
                id: Date.now(),
            }
            fetchForm(formValues);
            setValues({
                name: {
                    ...values.name,
                    value: '',
                    error: false,
                },
                telephone: {
                    ...values.telephone,
                    value: '',
                    error: false,
                },
                email: {
                    ...values.email,
                    value: '',
                    error: false,
                },
                message: {
                    ...values.message,
                    value: '',
                    error: false,
                },
            })
        }
    }

    return (
        <form>
            <div className='field'>
                <label htmlFor="name">Имя&nbsp;
                    {
                        values.name.required && <span className='required'>*</span>
                    }
                </label>
                <input
                    type="text"
                    id='name'
                    value={values.name.value}
                    onChange={e => setValues({
                        ...values, name: {
                            ...values.name, value: e.target.value
                        }
                    })}
                />
                {
                    values.name.error &&
                    <span className='field-error'>
                        Пожалуйста укажите ваше имя
                    </span>
                }
            </div>
            <div className='field'>
                <label htmlFor="telephone">Телефон&nbsp;
                    {
                        values.telephone.required && <span className='required'>*</span>
                    }
                </label>
                <input
                    type="text"
                    id='telephone'
                    value={values.telephone.value}
                    onChange={e => setValues({
                        ...values, telephone: {
                            ...values.telephone, value: e.target.value
                        }
                    })}
                />
            </div>
            <div className='field'>
                <label htmlFor="email">Email&nbsp;
                    {
                        values.email.required && <span className='required'>*</span>
                    }
                </label>
                <input
                    type="  "
                    id='email'
                    value={values.email.value}
                    onChange={e => setValues({
                        ...values, email: {
                            ...values.email, value: e.target.value
                        }
                    })}
                />
                {
                    values.email.error &&
                    <span className='field-error'>
                        Пожалуйста укажите ваш email
                    </span>
                }
            </div>
            <div className='field'>
                <label htmlFor="message">Сообщение&nbsp;
                    {
                        values.message.required && <span className='required'>*</span>
                    }
                </label>
                <textarea
                    id="message"
                    value={values.message.value}
                    onChange={e => setValues({
                        ...values, message: {
                            ...values.message, value: e.target.value
                        }
                    })}
                    rows="3"
                />
            </div>
            {
                formError &&
                <h4>Возникла ошибка! <br/> <i>{formError}</i></h4>
            }
            {
                isFormLoading
                ?
                <Loader scale={.5}/>
                :
                <div className="sendFormBtn">
                    <MyButton onClick={sendForm}>
                        Отправить
                    </MyButton>
                </div>
            }
        </form>
    )
}

export default Form;