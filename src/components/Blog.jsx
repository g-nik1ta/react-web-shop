import React, { useState } from 'react';

const Blog = () => {
    const [blogInfo, setBlogInfo] = useState([
        {
            id: 0,
            img: 'modern-camera',
            name: 'Современная камера',
            description: 'Делайте невероятные фото с обновленной камерой на 12 МП',
        },
        {
            id: 1,
            img: 'online-music',
            name: 'Сервис онлайн музыки',
            description: 'Слушайте музыку где вам удобно в новом приложении',
        },
        {
            id: 2,
            img: 'health-monitoring',
            name: 'Следите за вашим здоровьем',
            description: 'На прогулке, на работе, всегда на контроле вашего состояния',
        }
    ])

    return (
        <section className='blog row'>
            <h1 className="title">Блог</h1>
            <div className="card__wrapper">
                {blogInfo.map(element =>
                    <div className="card-blog" key={element.id}>
                        <img src={require(`../assets/blog/cards/${element.img}.jpg`)} alt="img" />
                        <h3 className='card-name'>
                            {element.name}
                        </h3>
                        <p className='card-description'>
                            {element.description}
                        </p>
                        <div className='btn-block'>
                            Подробнее
                            <span>→</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Blog;