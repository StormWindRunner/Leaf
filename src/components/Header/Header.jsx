import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    console.log(1);
    return(
        <div className={classes.header}>
            <ul className={classes.navbarList}>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="#">Услуги</Link></li>
                <li><Link to="/about">О Нас</Link></li>
                <li><Link to="#">Отзывы клиентов</Link></li>
                <li><Link to="#">Напишите нам</Link></li>
                <li><Link to="#">Контакты</Link></li>
            </ul>
        </div>
    );
};

export default Header;