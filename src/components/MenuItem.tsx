
import type { menuItem } from '../types'

type MenuProps = {
    item : menuItem,
    addItem: () => void
}


const MenuItem = ({item} : MenuProps) => {
  return (
    <div className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-3'>
      <p>{item.name}</p>
      <p  className='font-bold'>{item.price}</p>
    </div>
  )
}

export default MenuItem
