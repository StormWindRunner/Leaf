import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
// import { Nav, Dropdown } from 'bootstrap-4-react';
import { Nav, Dropdown } from 'bootstrap-4-react';




const Header = () => {
    console.log(1);
    return(
         <Nav pills flex="column sm-row">
         <Nav.ItemLink><Link to="/">Главная</Link></Nav.ItemLink>
         <Nav.Item dropdown>
           <Nav.Link href="#" dropdownToggle>Услуги</Nav.Link>
           <Dropdown.Menu>
             <Dropdown.Item href="#">Инвентаризация ЗВ. Проекты ПДВ</Dropdown.Item>
             <Dropdown.Item href="#">Паспорта на отходы</Dropdown.Item>
             <Dropdown.Item href="#">Постановка на учет ОНВОС</Dropdown.Item>
             <Dropdown.Item href="#">Подготовка отчетностей</Dropdown.Item>
             <Dropdown.Item href="#">Проекты санитарных зон</Dropdown.Item>
             <Dropdown.Item href="#">Производственный контроль</Dropdown.Item>
           </Dropdown.Menu>
         </Nav.Item>
         <Nav.ItemLink><Link to="/about">О Нас</Link></Nav.ItemLink>
         <Nav.ItemLink><Link to="/reviews">Отзывы</Link></Nav.ItemLink>
         <Nav.ItemLink><Link to="/write_us">Напишите Нам</Link></Nav.ItemLink>
         <Nav.ItemLink><Link to="/contacts">Контакты</Link></Nav.ItemLink>
       </Nav>
    );
};

export default Header;