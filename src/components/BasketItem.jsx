function BasketItem(props){
  const{
      id,
      name,
      price,
      quantity,
      deleteOrder,
      increment,
      decrement
  }= props
console.log(props);
  let allPrice = price * quantity;
    return(     
        <li className="collection-item ">
            {name}({price}) x{quantity} = {allPrice}
            <div className="calc-buttons">
            <i className="material-icons increment-decrement" onClick={()=>decrement(id)}>remove</i>
            <i id={id} className="material-icons increment-decrement" onClick={()=>increment(id)}>add</i>
            </div>
            <span  class="secondary-content top">
                <i id={id} class="material-icons close-item" onClick={() => deleteOrder(id)}>close</i></span>
            </li>       
    )
}


export {BasketItem}