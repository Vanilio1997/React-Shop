import React , {useState ,useEffect} from 'react';
import {API_KEY,API_URL} from '../config';
import { Preloader } from './Preloader';
import { StoreList } from './StoreList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import {Alert} from './Alert';



function Shop(){
    const [store ,setStore] = useState('');
    const [loading,setLoading] = useState(true);
    const [order,setOrder] = useState([]);
    const [isBasketShow,setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('')

const showPrice = () =>{
  let price = 0;
  order.map(item =>(
    price = price + (item.price * item.quantity)
  ))
  return price
}

const deleteOrder = (id) =>{
 setOrder(() => order.filter(item => item.id !== id ))
}

    const addToBasket = (name,price,id) => {
  
    let copy = Object.assign([] , order)
    let count = 0
      if (copy.length < 1 ){
        copy.push({name,price,id,quantity:1})
      } else {
        copy.map((item) =>{
            if(item.id !== id){
          count++
            } else if(item.id === id){
            item.quantity = item.quantity + 1;}
        })
        if(copy.length === count){
          copy.push({name,price,id,quantity:1})
        }
      }
      setAlertName(name)
   setOrder(copy)
    };

  const handleBasketShow = () =>{
  setIsBasketShow(!isBasketShow);
}

const increment = (id) =>{
  let newOrder = order.map((item) =>{
    if(item.id ===id){
       let newQuantity = item.quantity + 1 
      return{
        ...item,
        quantity: newQuantity 
    }}
      else {
        return item
      }
    })
    setOrder(newOrder)
}

const decrement = (id) =>{
  let newOrder = order.map((item) =>{
    if(item.id ===id){
       let newQuantity = item.quantity - 1 
      return{
        ...item,
        quantity: newQuantity >=0 ?newQuantity:0
    }}
      else {
        return item
      }
    })
    setOrder(newOrder)
}

const closeAlert = () =>{
  setAlertName('')
}
const clearBasket = () => setOrder([]);

    useEffect( function getGoods(){
      fetch(API_URL ,{
          headers:{
            'Authorization':API_KEY,
          }
      }).then(response => response.json())
      .then((data) => {
        setStore(data.shop)
        setLoading(false);
        })
        },[])

    return (
        <main className="container content">
          <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
        loading?<Preloader />: <StoreList store={store} addToBasket={addToBasket} />
        }
        {
          isBasketShow?<BasketList order={order} 
          handleBasketShow={handleBasketShow} 
          showPrice={showPrice} 
          deleteOrder={deleteOrder} 
          increment={increment}
          decrement={decrement}
          clearBasket={clearBasket}
          /> : null
        }
        {
          alertName&& <Alert name={alertName} closeAlert={closeAlert}/>
        }
        </main>
    )
}

export {Shop}