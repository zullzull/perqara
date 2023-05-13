export default function Title({name}){
   return (
      <div className="relative before:absolute before:left-0 before:bg-pq-orange before:content-[''] before:w-3/4 before:h-1.5">
         <div className="text-2xl font-semibold leading-7 text-pq-gray mt-3">
            {name}
         </div>
      </div>
   )
}