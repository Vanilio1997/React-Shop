function StoreItem(props){
 
    const{
        mainId,
        displayName,
        displayDescription,
        price,
        granted,
        addToBasket,
    } = props

    return(
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={granted[0].images.full_background} />
      </div>
      <div className="card-content">
      <span className="card-title display-name" >{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">

        <button onClick={()=>addToBasket(displayName,price.finalPrice,mainId)} className="btn">Buy</button>
        <span className="right price">{price.finalPrice} rub</span>
      </div>
    </div>
    )
}

export{StoreItem}