import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching'; 
import { generateOrderHash, getFullDate, getStatus, getTotalPrice } from '../../utils/basket';
import { setValuesError, validations } from '../../utils/formValidations';
import { closeSidebar } from '../../utils/toggleClass';
import FormFields from '../FormFields';
import Loader from '../UI/loader/Loader';

const ExpressCheckout = (props) => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basketReducer.basket);

    const [values, setValues] = useState({
        nameSurname: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
        telephone: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
        email: {
            value: '',
            required: true,
            error: false,
            errorMessage: ''
        },
        wishes: {
            value: '',
            required: false,
            error: false,
            errorMessage: ''
        },
    });

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        await PostService.sendOrderForm(formValues);
        closeSidebar('basket');
    })

    const sendForm = async (e) => {
        e.preventDefault();
        const keyFound = validations(values);
        if (keyFound.length) {
            setValuesError(values, setValues, keyFound);
        } else {
            const dateNow = getFullDate();
            const formValues = {
                id: Date.now(),
                nameSurname: values.nameSurname.value,
                city: 'Не указано',
                telephone: values.telephone.value,
                email: values.email.value,
                wishes: values.wishes.value,
                payment: 'Не указано',
                adress: 'Не указано',
                orderNumber: generateOrderHash(),
                date: dateNow,
                status: getStatus(dateNow.split(' ')[0]),
                sum: `${getTotalPrice(basket)} ₴`,
                products: basket.map(item => {
                    const { count, id, productCharacteristics, price, productUrl_1, promotionalPrice, title, vendorCode } = item;
                    return { count, id, productCharacteristics, price, productUrl_1, promotionalPrice, title, vendorCode };
                })
            }
            await fetchForm(formValues);
            props.setExpressCheckout(false);
        }
    }

    return (
        <>
            <h1 className="title">Оформить в 1 клик</h1>
            {
                formError
                ?
                <h4>Возникла ошибка! <br /> <i>{formError.message}</i></h4>
                :
                isFormLoading
                    ?
                    <Loader scale={.5} />
                    :
                    <div className="content">
                        <p className='description'>Пожалуйста, укажите ваши данные, после чего наш менеджер свяжется с Вами.</p>
                        <form>
                            <FormFields
                                values={values}
                                item={'nameSurname'}
                                title={'Имя, фамилия'}
                                setValues={setValues}
                            />
                            <FormFields
                                values={values}
                                item={'telephone'}
                                title={'Телефон'}
                                setValues={setValues}
                            />
                            <FormFields
                                values={values}
                                item={'email'}
                                title={'Email'}
                                setValues={setValues}
                            />
                            <FormFields
                                values={values}
                                item={'wishes'}
                                title={'Пожелания'}
                                setValues={setValues}
                            />
                            <button
                                onClick={sendForm}
                                className="sendFormBtn"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
            }
        </>
    )
}

export default ExpressCheckout;