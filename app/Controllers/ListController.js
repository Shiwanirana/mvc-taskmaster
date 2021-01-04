import {listService} from "../Services/ListService.js";
import {ProxyState} from "../AppState.js"


//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  ProxyState.lists.forEach(l=> template += l.Template)
  document.getElementById("lists").innerHTML = template
  // let lists = ProxyState.lists

  // lists.forEach(list => template += list.Template)
  // document.getElementById("lists").innerHTML = template
  //console.log(lists)
}
 
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("hey list controller")
    ProxyState.on("lists", _drawLists)
    ProxyState.on("items", _drawLists)
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    //console.log("app.listController.create(event)")
    event.preventDefault()
    
    let formData = event.target
    console.log(formData)
    console.log(formData.listName.value)
    console.log(formData.color.value)
    let newList = {
      title: formData.listName.value,
      color: formData.color.value,
      //listItems: []
    }
    listService.create(newList)
    _drawLists()
    formData.reset()
  }

  delete(listId) {
    if (swal({
      title: "Confirm Delete?",
      text: "THIS CANNOT BE UNDONE!",
      type: "warning",
      confirmButtonClass: "btn-danger",
      showCancelButtonClass: "btn-danger",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      closeOnConfirm: false
    },
    function(){
      swal("Deletes!", "Data has been successfully deleted.", "success")
    }) )
    
    console.log(listId)
    listService.delete(listId)
    _drawLists()
    
  }

  
}