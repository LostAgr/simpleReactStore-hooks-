import Footer from './component/Footer';
import Header from './component/Header';
import './index.css';
import React, { useState } from 'react';
import Card from './component/Card';
import Categories from './component/Categories';
import ShowFullItem from './component/ShowFullItem';

function App() {
  const [items] = useState([
    {
      id:1,
      title:'Чернобелые кросы',
      img: 'black-white-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'MJ',
      price: '100.00'
    },
    {
      id:2,
      title:'Космо кросы',
      img: 'cosmo-snikets.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Nike',
      price: '150.00'
    },
    {
      id:3,
      title:'Филды',
      img: 'fild-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Fild',
      price: '99.00'
    },
    {
      id:4,
      title:'Фреши',
      img: 'fresh-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Nike',
      price: '250.00'
    },
    {
      id:5,
      title:'Красные найки',
      img: 'nike-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Nike',
      price: '200.00'
    },
    {
      id:6,
      title:'Ретро',
      img: 'old-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Star',
      price: '70.00'
    },
    {
      id:7,
      title:'Красные кросы',
      img: 'red-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Adidas',
      price: '150.00'
    },
    {
      id:8,
      title:'Спортивные',
      img: 'sport-snikets.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Jordan',
      price: '200.00'
    },
    {
      id:9,
      title:'Рванье',
      img: 'white-purple-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Jordan',
      price: '120.00'
    },
    {
      id:10,
      title:'Желтые спортивки',
      img: 'yellow-sniket.jpg',
      desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
      category: 'Adidas',
      price: '90.00'
    }
  ]);
  const [orders, setOrders] = useState([]);
  const [fullItem, setFullItem] = useState({});
  const [showFullItem, setShowFullItem] = useState(false);
  const [currentItem, setCurrentItem] = useState(items);

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id))
  };

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  };

  const addToOrders = (item) => {
    let isInArray = false
    orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
      })
      if(!isInArray) {
      setOrders([...orders, item])
    }
  };

  const chooseCategory = (category) => {
    if(category === 'all') {
      setCurrentItem(items)
        return
      } 
      setCurrentItem(items.filter(el => el.category === category))
      };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Card onShowItem={onShowItem} items={currentItem} onAdd={addToOrders} />
      {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrders} item={fullItem} />}
      <Footer />
    </div>
  );
};

export default App;