import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cls from './RoutePanel.module.css';

const RoutePanel = () => {
    const routeItems = useSelector(state => state.routePanelReducer.routeItems);

    return (
        <div className={cls.panel__wrapper}>
            <div className={`${cls.panel__content} row`}>
                {routeItems.map((item, i) =>
                    (i + 1) === routeItems.length
                        ?
                        <Link
                            to={item.path}
                            key={item.id}
                            className={
                                (i + 1) === routeItems.length
                                    ?
                                    cls.route + ' current'
                                    :
                                    cls.route
                            }
                        >
                            {item.body}
                        </Link>
                        :
                        i % 2 === 0
                            ?
                            <Link
                                to={item.path}
                                key={item.id}
                                className={
                                    (i + 1) === routeItems.length
                                        ?
                                        cls.route + ' current'
                                        :
                                        cls.route
                                }
                            >{item.body}</Link>
                            :
                            <span
                                key={item.id}
                                className={cls.separator}
                            >
                                {item.body}
                            </span>
                )}
            </div>
        </div>
    )
}

export default RoutePanel;