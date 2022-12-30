import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from './Order';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));

    const hundleToggleCart = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className='header'>
            <div>
                <span className='logo'>Snikers shop</span>
                <ul className='nav'>
                    <li>Про компанию</li>
                    <li>Новости</li>
                    <li>Вопросы/Ответы</li>
                    <li>Контакты</li>
                    <li>Подарочные сертификаты</li>
                </ul>
                <AiOutlineShoppingCart onClick={hundleToggleCart} className={`shoppingCartButton ${isOpen && 'active'}`} />
                {isOpen && (
                    <div className='cart'>
                    {props.orders.length > 0 ? (<div>
                {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
                <p className='summa'>Общая сумма покупок: {new Intl.NumberFormat().format(summa)}$</p>
            </div>) : (<div className='empty'>
                <h2>Корзина пуста</h2>
            </div>)}
                    </div>
                )}
            </div>
            <div className='present'></div>
        </header>
  )
}

export default Header