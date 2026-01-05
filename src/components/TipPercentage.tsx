

const tipOptions = [
    {
    id: 'tip-0',
    value: .0,
    label: '0%'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
  
];

type tipProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip : number
  
}

const TipPercentage = ({setTip, tip} : tipProps) => {
    
 
  return (
    <div >
    
       <h2 className="text-2xl font-bold mb-2">Propina:</h2>
       {tipOptions.map(tipOptions =>(
        <div key={tipOptions.id} className="flex gap-3">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
          
           <input id={tipOptions.id} 
           type="radio" 
           name="tipOptions"
            value={tipOptions.value}
            onChange={e => setTip(+e.target.value)}
            checked={tipOptions.value === tip}
            
            
            />

        </div>


       ))}
    </div>
  )
}

export default TipPercentage
