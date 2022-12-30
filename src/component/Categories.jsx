import React, { useState } from 'react'

function Categories(props) {
  const [category] = useState([
    {
      key: 'all',
      name: 'Все'
    },
    {
      key: 'MJ',
      name: 'MJ'
    },
    {
      key: 'Nike',
      name: 'Найк'
    },
    {
      key: 'Fild',
      name: 'Филд'
    },
    {
      key: 'Star',
      name: 'Звезда'
    },
    {
      key: 'Adidas',
      name: 'Адидас'
    },
    {
      key: 'Jordan',
      name: 'Джордан'
    }
 ]);
  return (
    <div className='categories'>
        {category.map(el => (
          <div onClick={() => props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
    </div>
  )
}

export default Categories