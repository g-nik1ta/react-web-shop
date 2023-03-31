import React from 'react';
import { generateOrderHash } from '../utils/basket';
import { errorText } from '../utils/formValidations';

const FormFields = ({ values, item, title, setValues, inputBlock = false }) => {
    const hash = generateOrderHash();
    const getType = (item) => {
        switch (item) {
            case 'password':
                return 'password'
            case 'confirmPassword':
                return 'password'
            case 'adress':
                return 'number'
            default:
                return 'text'
        }
    }

    return (
        <div className='field'>
            <label
                htmlFor={`${item}_${hash}`}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <input
                type={getType(item)}
                id={`${item}_${hash}`}
                value={values[item].value}
                onChange={e => setValues({
                    ...values, [item]: {
                        ...values[item], value: e.target.value
                    }
                })}
                disabled={inputBlock}
                className={inputBlock ? 'blocked' : null}
            />
            {
                values[item].error &&
                <span className='field-error'>
                    {errorText(values, item)}
                </span>
            }
        </div>
    )
}

export default FormFields;