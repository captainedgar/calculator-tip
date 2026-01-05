import MenuItem from "./components/MenuItem.js"
import {menuItems} from "./data/db"
import useOrder from "./hooks/useOrder"
import ConsumoItem from './components/ConsumoItem.js'
import OrderTotal from "./components/OrderTotal.js"
import TipPercentage from "./components/TipPercentage.js"





function App() {
  
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()


  return (
    <>
  <header  className=" bg-green-400 py-4 ">
      <h1 className="text-4xl text-center">Calculadora de propinas</h1> 
   </header>

   <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 space-x-4">  
    {/* max-w-7xl (Limita el ancho máximo del elemento. Evita que el contenido se estire demasiado en pantallas grandes.) 
        mx-auto  (el contenedor queda centrado horizontalmente)
        py-20( padding arriba y abajo)
        grid (Convierte el contenedor en un grid container. Permite usar columnas y filas con grid-cols-*.)
    */}
    <div>
       <h2 className="font-bold text-3xl mt-7 " >Menu</h2>
       <div  className=" mb-2.5">
       {menuItems.map(item =>(
        <MenuItem
         item={item}
         addItem={addItem}
        key={item.id}

        
        
        />
        
       ))}
       </div>
    </div>
   
    <div>
     
      
    
{order.length > 0 ?(
<>
  <ConsumoItem 
      order={order}
      removeItem={ removeItem}
      />

      <TipPercentage
      
        setTip = {setTip}
        tip ={tip}
       
      />
       

       <OrderTotal
       order={order}
       tip={tip}
       placeOrder={placeOrder}
       />
</>
      

     ) : (
 
  <p className="text-center">La orden está vacia. </p>

)}
    </div>
    <div>

      

    </div>

   </main>
   
    </>
  )
}

export default App
