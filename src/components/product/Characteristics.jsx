import React from 'react';
import { getCamelCase } from '../../utils/products';

const Characteristics = ({product, productCharacteristics, ...props}) => {
    return (
        <div className="characteristics-block">
            <div className="subtitle">
                Характеристики
            </div>
            <div className="characteristic">
                <div className="title">Цвет:</div>
                <div className="body">{getCamelCase(productCharacteristics.color)}</div>
            </div>
            {
                product.mdfSub && <div className="characteristic">
                    <div className="title">{product.mdfSub}:</div>
                    <div className="body">{getCamelCase(productCharacteristics.mdf)}</div>
                </div>
            }
            {
                product.characteristics &&
                product.characteristics.map(item =>
                    <div className="characteristic" key={item.title}>
                        <div className="title">{item.title}:</div>
                        <div className="body">{item.body}</div>
                    </div>
                )
            }
            <div className="characteristic">
                <div className="title">Производитель:</div>
                <div className="body">{getCamelCase(product.manufacturer)}</div>
            </div>
        </div>
    )
}

export default Characteristics;