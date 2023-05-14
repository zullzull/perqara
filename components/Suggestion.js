import Link from "next/link"

export default function Sugggestions ({active}) {
   const suggestions = [
      {
         name: 'Wonder Women 1984',
         slug: 'wonder-women-1984'
      },
      {
         name: 'Wonder Women',
         slug: 'wonder-women'
      },
      {
         name: 'Wonder',
         slug: 'wonder'
      },
      {
         name: 'Wonder Women:Bloodlines',
         slug: 'wonder-women-bloodlines'
      },
      {
         name: 'Wonder Park',
         slug: 'wonder-Park'
      },
      {
         name: 'Wonder Boys',
         slug: 'wonder-body'
      }
   ]

   return (
      <div className={`absolute left-0 z-20 w-full py-[18px] pl-4 pr-2 rounded-b-lg  transition duration-200 ease-linear ${active ? 'opacity-100 visible h-auto bg-black/90' : 'opacity-0 invisible'}`}>
         <div className="flex flex-col">
            {
               suggestions.map((item, i)=>(
                  <Link key={i} href="/movie/wonder-women" className={`font-semibold text-sm text-pq-gray pl-4 pr-2 py-1 rounded hover:bg-pq-footer first:pt-0 transition duration-200 ease-linear ${active ? 'opacity-100' : 'opacity-0'}`}>
                     {item.name}
                  </Link>
               ))
            }
         </div>
      </div>
   )
}