import { generateId } from "../utils/GenerateId.js"


export default class Item{
  constructor({title,listId,id,Completed}){
    this.title = title
    this.id = id || generateId()
    this.listId = listId
    this.total=0
    this.complete=0
    this.Completed = Completed || false
  }

get Template(){
  const checkbox = document.querySelectorAll('.form-check[type= "checkbox"]')
  checkbox.forEach(c=> c.addEventListener('click', app.itemController.handleChange))
  return `
  <div class="form-check">
      <input type="checkbox" class="form-check-input ${this.color}" name="itemCheck" onChange= "app.itemController.handleChange(this,'${this.id}')" id="${this.id}"/>
      <label class="form-check-label" for="done">${this.title}</label>
      
      <button type="button" class="close text-danger" onclick="app.itemController.deleteListItem('${this.id}')" id="delButton" ">
      <span >&times;</span>
      </button>
      </div>
      </dd>
      `
}
}