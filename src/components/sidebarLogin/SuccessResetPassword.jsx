import React from 'react';

const SuccessResetPassword = (props) => {
    return (
        <>
            <h1 className="title">Проверьте почту</h1>
            <div className="sign-in__wrapper">
                <p className='description'>Инструкция о том, как изменить пароль была выслана на указанный вами на адрес электронной почты.</p>
                <button
                    onClick={() => props.setResetPassword(false)}
                    className="sendFormBtn"
                >
                    Закрыть
                </button>
            </div>
        </>
    )
}

export default SuccessResetPassword;