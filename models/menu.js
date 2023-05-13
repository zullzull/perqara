class Menu{
   constructor(menu_json) {
      this.name = menu_json.name
      this.slug = menu_json.slug
      this.icon = menu_json.icon
      this.children = menu_json.children && menu_json.children.length > 0 ? menu_json.children : []
   }

   static async fetchMenus(url) {
      return await fetch(encodeURI(`${url}/api/menu`),{
         method: 'get', 
      })
      .then((res)=>res.json())
      .then((data)=>data)
      .catch((e)=>console.warn(e))
   }
}

export default Menu