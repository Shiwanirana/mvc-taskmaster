import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"


let total= 0
let complete = 0
class ItemService{
  
  
  addListItem (newListItemData,id){
    let items = ProxyState.items
    items.push(new Item(newListItemData))
    let list = ProxyState.lists.find(list => list.id == id)
    list.total++
    ProxyState.items = items
    // if( ProxyState.lists.find(list => list.id==id)){
    // total++
    
    
    // document.getElementById("countTotal").innerHTML= total
    // console.log(ProxyState.items)}
    // let list = ProxyState.lists.find(list => list.id == listId)
    // list.listsItems.push(newListItemData)
    // console.log(list)
   
  }
 
  handleChange(checkbox,id,listId){
    
    console.log("checkbox")
    console.log(id)
    // let list = ProxyState.lists.find(list => list.id == id)
    //  if(ProxyState.items = ProxyState.items.find(c=> c.id == itemId)){
      // for(let i=0; i<=checkbox.length; i++){
        if(checkbox.checked == true && id==id && listId == listId){
           let list = ProxyState.lists.find(list => list.id == listId)
          let item = ProxyState.items.find(item=>item.id==id)
        item.complete++
        // document.getElementById("countComplete").innerHTML = complete
        // ProxyState.on("items",saveState)
        }else if(checkbox.checked == false && id==id && listId == listId){
          let list = ProxyState.lists.find(list => list.id == listId)
          let item = ProxyState.items.find(item=>item.id==id)
          item.complete--
          // document.getElementById("countComplete").innerHTML = complete
        // ProxyState.on("items",saveState)
        }
        
    //    //if(ProxyState.items = ProxyState.items.find(c=> c.itemId == id)){
    //   document.getElementById("delButton").removeAttribute("disabled[i]")
    // } 
    // else{
    //   document.getElementById("delButton").setAttribute("disabled","disabled")
    // }
    saveState()
  }
  deleteListItem ( listItemId){
    ProxyState.items = ProxyState.items.filter(i=> i.id != listItemId)
    // let list = ProxyState.lists.find(list => list.id == listId)
    // list.listsItems.splice(listItemId ,1)
  
  }
  constructor(){
    console.log("item service")
    ProxyState.on("items",saveState)
    
  }
}

export const itemService = new ItemService()