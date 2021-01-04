import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"


let total= 0
let complete = 0
class ItemService{
  
  
  addListItem (newListItemData,id){
    let items = ProxyState.items
    items.push(new Item(newListItemData))
    ProxyState.items = items
    // let list= ProxyState.lists.find(list => list.id==id)
    
    total++
    document.getElementById("countTotal").innerHTML= total
    console.log(ProxyState.items)
    // let list = ProxyState.lists.find(list => list.id == listId)
    // list.listsItems.push(newListItemData)
    // console.log(list)
   
  }
 
  handleChange(checkbox,id){
    console.log("checkbox")
    console.log(id)
    complete++
    document.getElementById("countComplete").innerHTML = complete
    // if(ProxyState.items = ProxyState.items.find(c=> c.id == itemId)){
    //  for(let i=0; i<=checkbox.length; i++){
    // if(checkbox[i].checked == true){
    //    //if(ProxyState.items = ProxyState.items.find(c=> c.itemId == id)){
    //   document.getElementById("delButton").removeAttribute("disabled[i]")
    // } 
    // else{
    //   document.getElementById("delButton").setAttribute("disabled","disabled")
    // }
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