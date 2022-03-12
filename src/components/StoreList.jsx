import { StoreItem } from "./StoreItem";

function StoreList(props){
    const {store =[] ,addToBasket} = props;

    if(!store.length){
      return  <h3>Nothing here</h3>
    }
    return(<div className="storeContainer">
    {store.map((item) => (
        <StoreItem  key={item.id} {...item} addToBasket={addToBasket} />  
    ))}
        </div>
    )

}



export {StoreList}