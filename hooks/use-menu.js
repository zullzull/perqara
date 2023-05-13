import { useState, useEffect, useCallback } from "react";
import Menu from '../models/menu'

const useMenu = () => {
   const [fetchedMenu, setFechedMenu] = useState({
      menus: {},
      isMenuLoaded: true,
      error: false,
   })
   
   const fecthMenu = useCallback(async() => {
      try {
         const response = await Menu.fetchMenus(window.location.origin);
         if ( Object.keys(response).length !== 0) {
            setFechedMenu({
               menus: response,
               isMenuLoaded: false,
               error: false,
            })
         } else {
            setFechedMenu({
               menus: {},
               isMenuLoaded: false,
               error: true,
            }) 
         }
      } catch (error) {}
   }, [])

   useEffect(()=>{
      fecthMenu();
   }, [fecthMenu] )

   const { menus, isMenuLoaded, error } = fetchedMenu
   return { menus, isMenuLoaded, error };
}

export default useMenu;