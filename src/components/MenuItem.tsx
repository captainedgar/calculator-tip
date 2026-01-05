
import type { menuItem } from '../types'

type MenuProps = {
    item : menuItem,
    addItem: (item : menuItem) => void
}


const MenuItem = ({item, addItem} : MenuProps) => {
  return (
    
    <button onClick={()=> addItem(item)} className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-3 '>
      <p>{item.name}</p>
      <p  className='font-bold'>{item.price}</p>
    </button>
  )
}

export default MenuItem
