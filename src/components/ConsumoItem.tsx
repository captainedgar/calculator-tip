import { formatCurrency } from "../helpers"
import type { menuItem, OrderItem } from "../types"

type OrderProps = {
order : OrderItem[],
removeItem :  (id: menuItem['id']) => void 
}

const ConsumoItem = ({order, removeItem} : OrderProps) => {
  return (
    <>
    <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
       <h2 className="font-bold text-3xl  ">Consumo</h2>
   
    {order.map(item =>(
      <div
          className="flex justify-between border-t boerder-gray-200  py-5 last-of-type:border-b items-center border-gray-300"
          key={item.id}>
            <div>
            <p>  {item.name}- {formatCurrency( item.price)} </p>
              <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>
      </div>
          <button className="bg-red-500 h-8 w-8   rounded-full font-bold text-white"
          onClick={()=> removeItem(item.id)}
          >
            
            X
          </button>
      </div>
    ))
   
      }
    </div>
    </>
  )
}

export default ConsumoItem
