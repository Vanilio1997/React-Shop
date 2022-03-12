function Cart(props){
    const{quantity = 0,handleBasketShow=Function.prototype} = props
    
    return (
        <div className="cart orange lighten-2 white-text" onClick={handleBasketShow}>
        <i class="material-icons">local_grocery_store</i>
        {quantity? <span className="cart-quantity">{quantity}</span>:null}
        </div>
    )
}

export {Cart}