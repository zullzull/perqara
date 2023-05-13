import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useMenu from "@/hooks/use-menu";

export default function LayoutDefaults({children}) {
   const { menus, isMenuLoaded, error } = useMenu()
   console.log(menus,useMenu())
   return (
      <>
         <Header headers={menus.headers} loading={isMenuLoaded} />
         <main className="relative">{children}</main>
         <Footer />
      </>
   )
}