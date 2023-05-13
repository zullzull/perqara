import Image from "next/image"
import Link from "next/link"

export default function Logo() {
   return (
      <Link href="/" className="Logo flex items-center justify-center">
         <Image 
            src="/images/logo.png"
            priority
            width={113}
            height={31}
            alt="Movie Time Logo"
         />
      </Link>
   )
}