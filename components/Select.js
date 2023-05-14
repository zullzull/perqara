import { useState } from "react"

export default function Select({options, setOption}) {
   const [active, setActive] = useState(false)
   const [sort, setSort] = useState(options[0])

   const doActive = () => {
      setActive(!active)
   }

   const doSelected = (item) => {
      setSort(item)
      doActive()
   }

   return(
      <div className="flex flex-col relative">
         <div onClick={doActive} className="flex items-center rounded bg-pq-secondary relative cursor-pointer">
            <span className="capitalize pl-4  py-[9px] text-sm">{ sort.name != '' ? sort.name : 'Sort By Option'}</span>
            <svg className={`absolute right-2 transition duration-200 ease-linear ${active ? 'rotate-0' : 'rotate-180'}`} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M5 8L0.669873 0.499999L9.33013 0.5L5 8Z" fill="#C4C4C4"/>
            </svg>
         </div>
         <div className={`flex transition-all duration-200 ease-in-out  ${active ? 'h-full opacity-100 visible' : 'h-0 opacity-0 invisible'}`}>
            <div className="absolute right-0 z-10 left-0 dark:bg-pq-thrid rounded shadow-lg">
               {options.map((item, i)=>(
                  <div key={i} onClick={ () => doSelected(item) } className="w-full px-4 py-1 text-left text-[13px] hover:bg-pq-secondary cursor-pointer hover:first:rounded-tl hover:first:rounded-tr hover:last:rounded-bl hover:last:rounded-br ">{item.name}</div>
               ))}
            </div>
         </div>
      </div>
   )
}