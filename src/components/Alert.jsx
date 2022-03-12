import React,{useEffect} from "react"


const Alert =  (props) => {
const{name='', closeAlert} = props

useEffect(()=>{

    const timerId = setTimeout(closeAlert ,2000)
    
    return() =>{
        clearTimeout(timerId)
    }
},[name]);

return (
    <div id="toast-container">
        <div className="toast">{name} added in Basket</div>
    </div>
)
}

export {Alert}