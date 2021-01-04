import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import List from "../Models/List.js";


export function saveState(){
  localStorage.setItem("taskMaster", JSON.stringify({lists: ProxyState.lists, items: ProxyState.items}))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("taskMaster"))
  if(data){
    console.log(data, "data1")
   ProxyState.lists = data.lists.map (l => new List(l))
   
   ProxyState.items = data.items.map (i=> new Item(i))
   console.log(ProxyState.items, "proxy")
   console.log(data, "data2")
  //  this.listItems = data.listItems.map(i=> new List(i))
  //  console.log(data, "data2")

  }

}