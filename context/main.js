import { createContext, useState } from "react";

export const MainContext = createContext()
export const MainProvider = (props) => {
   const [isLogin, setIsLogin] = useState(false)

   let stateMain = {
      isLogin, setIsLogin
   }

   let actionMain = {

   }

   return (
      <MainContext.Provider value={{ stateMain, actionMain }}>
         {props.children}
      </MainContext.Provider>
   )
}