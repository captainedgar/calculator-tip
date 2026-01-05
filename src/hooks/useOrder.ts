import { useState } from "react";
import type { menuItem, OrderItem } from "../types";


export default function useOrder(){
const [order, setOrder] = useState<OrderItem[]>([])
const [tip, setTip] = useState(0)

const addItem =(item : menuItem)=>{
    const itemExist = order.find(OrderItem  => OrderItem.id === item.id);

   if(itemExist){
 setOrder( order.map(OrderItem =>
     OrderItem.id === item.id 
    ? {...OrderItem, quantity: OrderItem.quantity + 1} :
     OrderItem 
    ) 
    
);
}else{
 setOrder([...order, {...item, quantity: 1}])
   }
  
}

const removeItem = (id : menuItem['id'])=> {
setOrder(order.filter(item=> item.id !== id))
}

const placeOrder = ()=>{
    console.log('Guardando orden')
    setOrder([] )
    setTip(0)
}


return{
tip,
setTip,
addItem,
order,
removeItem,
placeOrder
}
}