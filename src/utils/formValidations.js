export const validations = (values) => {
    const keyFound = [];
    for (let key in values) {
        switch (key) {
            case 'password':
                if (values[key].value.length < 6) {
                    keyFound.push('password')
                }
                break;
            case 'confirmPassword':
                if (values.password.value !== values.confirmPassword.value) {
                    keyFound.push('confirmPassword')
                }
                break;
            case 'email':
                const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!(emailRegexp.test(values[key].value))) {
                    keyFound.push('email')
                }
            default:
                if (values[key].required && values[key].value.trim() === '') {
                    keyFound.push(key)
                }
                break;
        }
    }
    return keyFound;
}

export const setValuesError = (values, setValues, keyFound) => {
    for (let key in values) {
        setValues(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                error: false,
                errorMessage: ''
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
}

export const errorText = (values, field) => {
    switch (field) {
        case 'email':
            const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return values.email.errorMessage
                ?
                values.email.errorMessage
                :
                values.email.value.trim().length === 0
                    ?
                    'Пожалуйста, введите адрес электронной почты'
                    :
                    !(emailRegexp.test(values.email.value)) &&
                    'Пожалуйста, введите корректный адрес электронной почты'
        case 'password':
            return values.password.errorMessage
                ?
                values.password.errorMessage
                :
                values.password.value.length === 0
                    ?
                    'Пожалуйста, укажите ваш пароль'
                    :
                    values.password.value.length < 6 &&
                    'Пароль должен содержать не менее 6 символов'
        case 'confirmPassword':
            return values.confirmPassword.value !== values.password.value &&
                'Пароль и его подтверждение не совпадают'
        case 'name':
            return values.name.value.trim().length === 0 &&
                'Пожалуйста, введите ваше имя'
        case 'nameSurname':
            return values.nameSurname.value.trim().length === 0 &&
                'Пожалуйста, укажите ваше имя'
        case 'telephone':
            return values.telephone.value.trim().length === 0 &&
                'Пожалуйста, укажите ваш телефон'
    }
}

export const fetchErrorCode = (errorCode, values, setValues) => {
    switch (errorCode) {
        case 'auth/email-already-in-use':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Пользователь с введенным Вами адресом электронной почты уже существует'
                },
            })
            break;
        case 'auth/invalid-email':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Пожалуйста, укажите корректный адрес',
                },
                password: {
                    ...values.password,
                    error: false,
                },
            });
            break;
        case 'auth/user-not-found':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Пользователь не найден',
                },
                password: {
                    ...values.password,
                    error: false,
                },
            });
            break;
        case 'auth/wrong-password':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: false,
                },
                password: {
                    ...values.password,
                    error: true,
                    errorMessage: 'Пароль не верный'
                },
            });
            break;
        case 'RESET_PASSWORD_auth/user-not-found':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Пользователь не найден',
                },
            });
            break;
        case 'RESET_PASSWORD_auth/invalid-email':
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Пожалуйста, укажите корректный адрес',
                },
            });
            break;
        default:
            setValues({
                ...values,
                email: {
                    ...values.email,
                    error: true,
                    errorMessage: 'Не удалось войти в систему. Обратитесь в тех-поддержку'
                }
            });
            break;
    }
}