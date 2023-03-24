import React from 'react';
import { errorText } from '../utils/formValidations';

const FormFields = ({ values, item, title, setValues }) => {
    return (
        <div className='field'>
            <label
                htmlFor={item}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <input
                type={item === 'password' ? 'password' : 'text'}
                id={item}
                value={values[item].value}
                onChange={e => setValues({
                    ...values, [item]: {
                        ...values[item], value: e.target.value
                    }
                })}
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