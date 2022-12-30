import React from 'react'
import { FaTrash } from 'react-icons/fa'

function Order(props) {
  return (
    <div>
        <div className='item'>
        <img src={"./img/" + props.item.img} alt={'Товары'} />
        <h2>{props.item.title}</h2>
        <b>{props.item.price}$</b>
        <FaTrash className='delItem' onClick={() => props.onDelete(props.item.id)} />
      </div>
    </div>
  )
}

export default Order