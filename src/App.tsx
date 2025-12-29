import MenuItem from "./components/MenuItem"
import {menuItems} from "./data/db"


function App() {
  

  return (
    <>
  <header  className=" bg-green-400 py-4 ">
      <h1 className="text-4xl text-center">Calculadora de propinas</h1> 
   </header>

   <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">  
    {/* max-w-7xl (Limita el ancho máximo del elemento. Evita que el contenido se estire demasiado en pantallas grandes.) 
        mx-auto  (el contenedor queda centrado horizontalmente)
        py-20( padding arriba y abajo)
        grid (Convierte el contenedor en un grid container. Permite usar columnas y filas con grid-cols-*.)
    */}
    <div>
       <h2 >Menu</h2>
       <div>
       {menuItems.map(item =>(
        <MenuItem item={item}
        key={item.id}

        
        
        />
        
       ))}
       </div>
    </div>
   
    <div>
      <h2>Consumo</h2>
    </div>
    

   </main>
   
    </>
  )
}

export default App
