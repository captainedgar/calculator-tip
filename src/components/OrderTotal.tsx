import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderProps = {
    order : OrderItem[],
    tip : number,
    placeOrder: () => void
}

const OrderTotal = ({order, tip, placeOrder }: orderProps) => {
     
  const  subTotal = useMemo(() =>
    order.reduce((total, item) => total + (item.price * item.quantity), 0)
    , [ order ]);


  const tipsAmount =  useMemo(() => subTotal * tip, [tip, order]);

  const amountTotal = useMemo(()=> tipsAmount + subTotal , [tipsAmount, subTotal])


  return (
    <>
    <div className="space-y-3">
        <div>
     <h3 className="font-bold text-2xl mb-2.5 ">Totales y Propina:</h3>
     </div>
  
     <p className="font-bold mb-2.5">Sub-Total a pagar: {formatCurrency(subTotal)}</p>

       <p className="font-bold mb-2.5">Propina: {formatCurrency(tipsAmount)}</p>
       <p className="font-bold mb-2.5">Total: {formatCurrency(amountTotal)}</p>


    
     
    </div>
    <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 
    disabled:opacity-10"
    disabled={amountTotal === 0  }
    onClick={placeOrder}
    >
        Guardar Orden
    </button>
   </>
  )
  
}

export default OrderTotal
