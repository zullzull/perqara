import Image from "next/image"
import Link from "next/link"

export default function Logo() {
   return (
      <Link href="/" className="Logo flex items-center justify-center overflow-hidden w-[112px] h-[30px] relative">
         <Image 
            src="/images/logo.png"
            className="h-full w-full object-fill absolute inset-0 rounded-sm"
            priority
            width="0"
            height="0"
            sizes="320 640 750"
            alt="Movie Time Logo"
         />
      </Link>
   )
}