import List from "../Models/List.js";
import {ProxyState} from "../AppState.js"
import {saveState} from "../Utils/LocalStorage.js"
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  // addListItem (newListItemData, listId){
  //   let list = ProxyState.lists.find(list => list.id == listId)
  //   list.listsItems.push(newListItemData)
  //   console.log(list)
   
  // }
 
  // deleteListItem (listId, listItemId){
  //   let list = ProxyState.lists.find(list => list.id == listId)
  //   list.listsItems.splice(listItemId ,1)
  
  // }

  delete(listId){
    ProxyState.lists = ProxyState.lists.filter(list => list.id != listId)
  
  }

  create(newListData){
    let newList = new List(newListData)
    ProxyState.lists.push(newList)
  
  }

  constructor(){
    console.log("lists construct")
    ProxyState.on("lists", saveState)
  }

}

export const listService = new ListService();
