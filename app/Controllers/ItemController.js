import {itemService} from "../Services/ItemService.js"

export default class ItemController{
  constructor(){
    console.log("item controller")
  }
addListItem(event, listId) {
  event.preventDefault()
  let formData = event.target
  let listItemData= {
    title : formData.itemTitle.value,
    listId : listId,
    Completed : false
  }
  itemService.addListItem(listItemData,listId)
  // ListService.addListItem(formData.listItemName.value, listId)
  formData.reset()

}

handleChange(checkbox,id, listId){
  // let checkbox = document.getElementById("done")
  itemService.handleChange(checkbox,id,listId)
}
deleteListItem(itemId){
  if (window.confirm("Are you sure?")) {
    itemService.deleteListItem(itemId)
  // ListService.deleteListItem(listId, Index) 

  }
}
}
