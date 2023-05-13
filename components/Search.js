import Image from "next/image";

export default function Search(){
   return (
      <div className="relative w-full">
         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path className="fill-white/[0.17]" d="M16 0L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.895 0 0.00999999 0.895 0.00999999 2L0 14C0 15.105 0.895 16 2 16H18C19.105 16 20 15.105 20 14V0H16Z" fillOpacity={0.9}/>
            </svg>
         </div>
         <input type="text" className="h-9 border rounded w-full pl-10 bg-pq-primary border-pq-primary focus:ring-pq-primary focus:border-pq-primary focus-visible:ring-pq-primary focus-visible:border-pq-primary focus-visible:outline-none  text-pq-gray" placeholder="Find movie"/>
         <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8.76562 7.3125C9.23438 6.575 9.50937 5.7 9.50937 4.75938C9.50937 2.13125 7.38125 0 4.75625 0C2.12812 0 0 2.13125 0 4.75938C0 7.3875 2.12813 9.51875 4.75313 9.51875C5.70625 9.51875 6.59375 9.2375 7.3375 8.75625L7.55313 8.60625L10.9469 12L12 10.9281L8.60938 7.53438L8.76562 7.3125ZM7.41875 2.1C8.12813 2.80937 8.51875 3.75312 8.51875 4.75625C8.51875 5.75937 8.12813 6.70313 7.41875 7.4125C6.70937 8.12188 5.76562 8.5125 4.7625 8.5125C3.75937 8.5125 2.81562 8.12188 2.10625 7.4125C1.39687 6.70313 1.00625 5.75937 1.00625 4.75625C1.00625 3.75312 1.39687 2.80937 2.10625 2.1C2.81562 1.39062 3.75937 1 4.7625 1C5.76562 1 6.70937 1.39062 7.41875 2.1Z" fill="white"/>
            </svg>
         </button>
      </div>
   )
}