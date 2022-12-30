import React from 'react'

function ShowFullItem(props) {
  return (
    <div className='showItem'>
        <div>
            <img onClick={() => props.onShowItem(props.item)} src={"./img/" + props.item.img} alt={'Товары'} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className='butttonAdd' onClick={() => props.onAdd(props.item)}>+</div>
        </div>
      </div>
  )
}

export default ShowFullItem