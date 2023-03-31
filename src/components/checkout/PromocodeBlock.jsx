import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { setPromocodeCreator } from '../../store/basketReducer';
import Loader from '../UI/loader/Loader';

const PromocodeBlock = () => {
    const dispatch = useDispatch();
    const isPromocode = useSelector(state => state.basketReducer.isPromocode)
    const [values, setValues] = useState({
        promocode: {
            value: '',
            required: false,
            error: false,
            errorMessage: '',
        },
    })

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        const response = await PostService.getPromocode(formValues);
        if (response === 'already-used') {
            setValues({
                promocode: {
                    value: '',
                    required: false,
                    error: true,
                    errorMessage: 'Данный промокод уже был активирован',
                },
            })
        } else if (response === 'not-found') {
            setValues({
                promocode: {
                    value: '',
                    required: false,
                    error: true,
                    errorMessage: 'Данный промокод не существует или вы написали его не верно',
                },
            })
        } else {
            dispatch(setPromocodeCreator(response.discount));
            setValues({
                promocode: {
                    value: '',
                    required: false,
                    error: false,
                    errorMessage: '',
                },
            })
            await PostService.updatePromocode(formValues)
        }
    })

    const sendForm = async (e) => {
        e.preventDefault();
        setValues({
            promocode: {
                ...values.promocode,
                error: false,
                errorMessage: ''
            }
        })
        if (!values.promocode.value.trim().length) {
            setValues({
                promocode: {
                    ...values.promocode,
                    error: true,
                    errorMessage: 'Введите промокод'
                }
            })
        } else if (isPromocode.isUsed) {
            setValues({
                promocode: {
                    ...values.promocode,
                    error: true,
                    errorMessage: `Вы уже использовали промокод и получили -${isPromocode.discount}% скидки`
                }
            })
        } else await fetchForm(values.promocode.value);
    }

    return (
        <>
            <div className="promocode-block">
                <span>Введите промокод</span>
                {
                    formError
                        ?
                        <h4>Возникла ошибка! <br /> <i>{formError.message}</i></h4>
                        :
                        isFormLoading
                            ?
                            <Loader scale={0.2} style={{ height: '40px' }} />
                            :
                            <>
                                <input
                                    value={values.promocode.value}
                                    onChange={e => setValues({
                                        promocode: {
                                            ...values.promocode, value: e.target.value
                                        }
                                    })}
                                    placeholder='Промокод'
                                    type="text"
                                    maxLength={30}
                                />
                                <button onClick={sendForm}>
                                    OK
                                </button>
                            </>
                }
            </div>
            {
                isFormLoading
                    ?
                    null
                    :
                    <>
                        {
                            values.promocode.error &&
                            <span className='promocode-error'>
                                {values.promocode.errorMessage}
                            </span>
                        }
                        {
                            isPromocode.isUsed && !values.promocode.error &&
                            <span className='promocode-success'>
                                Промокод активирован. Вы получили скидку -{isPromocode.discount}%!
                            </span>
                        }
                    </>
            }
        </>
    )
}

export default PromocodeBlock;