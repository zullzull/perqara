export default function Title({name, big}){
   return (
      <div className="relative before:absolute before:left-0 before:bg-pq-orange before:content-[''] before:w-20 before:h-1.5 before:-top-3">
         <div className={`font-semibold text-pq-gray ${big ? 'h1 leading-[44px]' : 'text-2xl leading-7'}`}>
            {name}
         </div>
      </div>
   )
}