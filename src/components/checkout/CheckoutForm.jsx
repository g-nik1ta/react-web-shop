import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { removeBasketCreator, removePromocodeCreator, setOrderCreator } from '../../store/basketReducer';
import { generateOrderHash, getFullDate, getStatus, getTotalDiscountPrice, getTotalPrice } from '../../utils/basket';
import { setValuesError, validations } from '../../utils/formValidations';
import FormFields from '../FormFields';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/loader/Loader';
import MySelect from '../UI/select/MySelect';

const CheckoutForm = ({ basket, user }) => {
    const dispatch = useDispatch();
    const isPromocode = useSelector(state => state.basketReducer.isPromocode);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: {
            value: user.id ? user.name : '',
            required: true,
            error: false,
            errorMessage: '',
        },
        surname: {
            value: '',
            required: true,
            error: false,
            errorMessage: '',
        },
        city: {
            value: '',
            required: true,
            error: false,
            errorMessage: '',
        },
        telephone: {
            value: user.id && user.telephone ? user.telephone : '',
            required: true,
            error: false,
            errorMessage: '',
        },
        email: {
            value: user.id ? user.email : '',
            required: true,
            error: false,
            errorMessage: '',
        },
        wishes: {
            value: '',
            required: false,
            error: false,
            errorMessage: '',
        },
        payment: {
            value: 'Полная оплата',
            required: true,
            error: false,
            errorMessage: '',
        },
        adress: {
            value: '',
            required: true,
            error: false,
            errorMessage: '',
        },
    }); 

    const sortOptions = [
        { value: 'full-payment', name: 'Полная оплата' },
        { value: 'C.O.D.', name: 'Наложный платеж' },
    ]

    const [fetchForm, isFormLoading, formError] = useFetching(async (formValues) => {
        await PostService.sendOrderForm(formValues);
        dispatch(setOrderCreator(formValues));
        dispatch(removeBasketCreator());
        dispatch(removePromocodeCreator());
        navigate(`/shop/complete/${formValues.orderNumber.slice(1)}`);
    })

    const sendForm = async (e) => {
        e.preventDefault();
        const keyFound = validations(values);
        if (keyFound.length) {
            setValuesError(values, setValues, keyFound);
        } else {
            const dateNow = getFullDate();
            const sum = isPromocode.isUsed ? `${getTotalDiscountPrice(basket, isPromocode.discount)} ₴` : `${getTotalPrice(basket)} ₴`
            const formValues = {
                id: Date.now(),
                nameSurname: `${values.name.value} ${values.surname.value}`,
                city: values.city.value,
                telephone: values.telephone.value,
                email: values.email.value,
                wishes: values.wishes.value,
                payment: values.payment.value,
                adress: values.adress.value,
                orderNumber: generateOrderHash(),
                date: dateNow,
                status: getStatus(dateNow.split(' ')[0]),
                sum,
                products: basket.map(item => {
                    const sub = item.mdfSub ? item.mdfSub : null;
                    const { count, id, productCharacteristics, price, productUrl_1, promotionalPrice, title, productName, vendorCode } = item;
                    return { count, id, productCharacteristics, sub, price, productUrl_1, promotionalPrice, title, productName, vendorCode };
                })
            }
            await fetchForm(formValues);
        }
    }

    useEffect(() => {
        if (!user.id) {
            setValues({
                ...values,
                name: {
                    ...values.name,
                    value: ''
                },
                telephone: {
                    ...values.telephone,
                    value: ''
                },
                email: {
                    ...values.email,
                    value: ''
                },
            })
        } else {
            setValues({
                ...values,
                name: {
                    ...values.name,
                    value: user.name ? user.name : ''
                },
                telephone: {
                    ...values.telephone,
                    value: user.telephone ? user.telephone : ''
                },
                email: {
                    ...values.email,
                    value: user.email ? user.email : ''
                },
            })
        }
    }, [user])

    return (
        <>
            {
                formError
                    ?
                    <h4>Возникла ошибка! <br /> <i>{formError.message}</i></h4>
                    :
                    isFormLoading
                        ?
                        <Loader scale={0.5} />
                        :
                        <form>
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
                                item={'city'}
                                title={'Город'}
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
                                inputBlock={!!user.id}
                            />
                            <FormFields
                                values={values}
                                item={'wishes'}
                                title={'Пожелания'}
                                setValues={setValues}
                            />
                            <h2 className='subtitle'>Доставка и способ оплаты</h2>
                            {
                                values.city.value.trim().length
                                    ?
                                    <>
                                        <div className="payment-field">
                                            <span>Способ оплаты</span>
                                            <MySelect
                                                value={(sortOptions.find(e => e.name === values.payment.value)).name}
                                                onChange={selectedSort => setValues({
                                                    ...values, payment: {
                                                        ...values.payment, value: selectedSort
                                                    }
                                                })}
                                                options={sortOptions}
                                                ruValue={true}
                                            />
                                        </div>
                                        <FormFields
                                            values={values}
                                            item={'adress'}
                                            title={'Отделение новой почты'}
                                            setValues={setValues}
                                        />
                                    </>
                                    :
                                    <div className="description-delivery">
                                        Для выбора доставки и способа оплаты укажите ваш город
                                    </div>
                            }
                            <MyButton
                                onClick={sendForm}
                            >
                                Оформить заказ
                            </MyButton>
                        </form>
            }
        </>
    )
}

export default CheckoutForm;