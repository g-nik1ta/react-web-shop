import React, { useEffect, useState } from 'react';
import MyButton from './UI/button/MyButton';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from './UI/loader/Loader';
import { setValuesError, validations } from '../utils/formValidations';
import FormFields from './FormFields';
import { useSelector } from 'react-redux';

const FeedbackForm = () => {
    const user = useSelector(state => state.authReducer.user);

    const [values, setValues] = useState({
        nameFeedback: {
            value: '',
            required: true,
            error: false,
        },
        telephoneFeedback: {
            value: '',
            required: false,
            error: false,
        },
        emailFeedback: {
            value: '',
            required: true,
            error: false,
        },
        messageFeedback: {
            value: '',
            required: false,
            error: false,
        },
    })

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        await PostService.sendFeedbackForm(formValues);
    });

    const sendForm = (e) => {
        e.preventDefault();
        const keyFound = validations(values);
        if (keyFound.length) {
            setValuesError(values, setValues, keyFound);
        } else {
            const formValues = {
                name: values.nameFeedback.value,
                telephone: values.telephoneFeedback.value,
                email: values.emailFeedback.value,
                message: values.messageFeedback.value,
                id: Date.now(),
            }
            fetchForm(formValues);
            setValues({
                nameFeedback: {
                    ...values.nameFeedback,
                    value: '',
                    error: false,
                },
                telephoneFeedback: {
                    ...values.telephoneFeedback,
                    value: '',
                    error: false,
                },
                emailFeedback: {
                    ...values.emailFeedback,
                    value: '',
                    error: false,
                },
                messageFeedback: {
                    ...values.messageFeedback,
                    value: '',
                    error: false,
                },
            })
        }
    }

    useEffect(() => {
        if (user.id) {
            setValues({
                ...values,
                nameFeedback: {
                    ...values.nameFeedback,
                    value: user.name
                },
                telephoneFeedback: {
                    ...values.telephoneFeedback,
                    value: user.telephone ? user.telephone : ''
                },
                emailFeedback: {
                    ...values.emailFeedback,
                    value: user.email
                },
            })
        }
    }, [])

    return (
        <form>
            <FormFields
                values={values}
                item={'nameFeedback'}
                title={'Имя&nbsp;<span className="required">*</span>'}
                setValues={setValues}
            />
            <FormFields
                values={values}
                item={'telephoneFeedback'}
                title={'Телефон'}
                setValues={setValues}
            />
            <FormFields
                values={values}
                item={'emailFeedback'}
                title={'Email&nbsp;<span className="required">*</span>'}
                setValues={setValues}
            />
            <div className='field'>
                <label htmlFor="messageFeedback">Сообщение</label>
                <textarea
                    id="messageFeedback"
                    value={values.messageFeedback.value}
                    onChange={e => setValues({
                        ...values, messageFeedback: {
                            ...values.messageFeedback, value: e.target.value
                        }
                    })}
                    rows="3"
                />
            </div>
            {
                formError &&
                <h4>Возникла ошибка! <br /> <i>{formError}</i></h4>
            }
            {
                isFormLoading
                    ?
                    <Loader scale={.5} />
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

export default FeedbackForm;