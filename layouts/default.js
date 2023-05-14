import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useMenu from "@/hooks/use-menu";

export default function LayoutDefaults({children, transparant}) {
   const { menus, isMenuLoaded, error } = useMenu()
   
   return (
      <>
         <Header headers={menus.headers} loading={isMenuLoaded} transparant={transparant} />
         <main className={`relative ${transparant ? '' : 'pt-[66px]'}`}>{children}</main>
         <Footer />
      </>
   )
}