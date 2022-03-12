import { BasketItem } from "./BasketItem";

function BasketList(props){
    const{order=[], handleBasketShow,showPrice,deleteOrder,increment,decrement,clearBasket} = props
    return(
      <ul className="collection basket-list">
      <li  className="collection-item active">Basket  </li> 
      
      {
          order.length ? order.map( item => (
              <BasketItem 
              decrement={decrement}
              increment={increment}
               deleteOrder={deleteOrder}  
               showPrice={showPrice} 
               key={item.key} {...item}/>
          )):  <li  className="collection-item">Basket is empty</li>
      }
      <li  className="collection-item active">Price:{showPrice()}
      <a className="waves-effect waves-light clear-btn right white" onClick={()=> clearBasket()}>Clear All</a>
      </li>
 

      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
    )
}

export {BasketList}