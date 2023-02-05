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
                    <Link
                        to={item.path}
                        key={item.id}
                        className={
                            i % 2 === 0 
                            ?
                                (i + 1) === routeItems.length
                                ?
                                    cls.route + ' current'
                                :
                                cls.route
                            :
                                cls.separator
                        }
                    >{item.body}</Link>
                )}
            </div>
        </div>
    )
}

export default RoutePanel;