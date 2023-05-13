import Logo from "./Logo";
import Search from "./Search";
import Link from "next/link";
import { useContext, useState } from "react";
import { MainContext } from "@/context/main";

export default function Header({headers, loading}) {
   let { stateMain } = useContext(MainContext)
   let { isLogin } = stateMain
   const [submenu, setSubmenu ] = useState({
      name: '',
      status: false,
   })

   const doSubmenu = (item) => {
      setSubmenu({
         name: item,
         status: !submenu.status
      })
   }

   return (
      <header className="relative wrapper-fluid">
         <div className="flex items-center py-[15px] space-x-9">
            <div className="flex-none w-[112px] h-[31px]">
               <Logo />
            </div>
            <div className="flex-auto">
               <Search />
            </div>
            <div className="flex-1 flex space-x-8 justify-end dark:text-white">
               {
                  !loading && headers && headers.length > 0 ?
                     <>
                        {
                           headers.map((item,i)=>{
                              return item.children.length > 0 ? 
                              <div key={i} className="relative cursor-pointer">
                                 <div onMouseEnter={()=> doSubmenu(item.name)} className="flex justify-between space-x-3 items-center uppercase text-sm font-semibold h-full relative z-30">
                                    <div className={`transition duration-200 ease-linear ${submenu.status && submenu.name != '' ? 'rotate-180' : 'rotate-0'}`} dangerouslySetInnerHTML={{__html: item.icon ? item.icon : '<i class="fa-solid fa-grid-2"></i>'}}></div>
                                    <div>
                                       {item.name}
                                    </div>
                                 </div>
                                 <div onMouseLeave={()=> doSubmenu('')} className={`absolute left-0 py-2 mt-2 z-20 px-2 rounded-md shadow-lg transition duration-400 ease-linear ${item.name == submenu.name && submenu.status ? 'translate-y-0 opacity-100 visible bg-white' : '-translate-y-10 h-0 invisible opacity-0'}`}>
                                    <div className="grid dark:text-pq-footer">
                                       {
                                           item.children.map((subitem,s)=> (
                                             <Link key={s} href={`/movie/${subitem.slug}`} className={`font-semibold transition pl-2 py-2 pr-7 duration-200 ease-linear hover:bg-gray-100 hover:rounded-md ${submenu.status ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                                {subitem.name}
                                             </Link>
                                          ))
                                       }
                                    </div>
                                 </div>
                              </div> :
                              <Link onMouseEnter={()=> doSubmenu('')}  key={i} href={`/movies/${item.slug}`} className="uppercase text-sm font-semibold">
                                 {item.name}
                              </Link>
                           })
                        }
                        {
                           isLogin ? 
                           <Link onMouseEnter={()=> doSubmenu('')}  className="text-sm font-semibold uppercase" href="/my-account">
                              Hi, Peqara!
                           </Link> :
                           <Link onMouseEnter={()=> doSubmenu('')} className="text-sm font-semibold uppercase" href="/login">
                             Login
                           </Link>
                        }
                     </>
                  :
                  Array(4).fill('zull').map((item,i)=>(
                     <div key={i} className="rounded-full h-4 w-20 bg-slate-600 animate-pulse"></div>
                  ))
               }
            </div>
         </div>
      </header>
   )
}