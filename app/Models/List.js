import { ProxyState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.color = data.color
    this.listsItems = data.listsItems || []
    this.id = data.id || generateId();
    this.total=0
    this.complete=0
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
 
  get Template(){
    return `
    <div class="col-3 mx-4">
    <div class="card border-success mb-3 ml-5 rounded shadow-lg " style="min-width: 20rem;">
  <div class="card-header ${this.color} text-center text-white box-shadow">
  <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
     <span>&times;</span>
     </button>
  <h4>${this.title.toUpperCase()}</h4>
  <span id="countComplete">${this.complete}</span>/<span class="t" id="countTotal">${this.total}</span>
  </div>
  <div class="card-body text-dark">
    
    <p class="card-text">List Items:
       <dl>
         ${this.Items}
      </dl></p>
  </div>
  <div class="card-footer bg-transparent border-success">
  <form class="no-outline" onsubmit="app.itemController.addListItem(event, '${this.id}')">
         <div class="form-group">
           <label for="listItemName">list Item:</label>
           <input type="text" name="itemTitle" class="form-control w-50" placeholder="Add Task.." aria-describedby="helpId" minlength="3">
           <button type="submit" class="btn btn-outline-${this.color} btn-sm">+</button>
         </div>
      </form>
    </div>
</div>
</div>
    
    `
  }

  get Items(){
    let template = ''
    //return template
    //this.listsItems.forEach(listsItem => template += listsItem.getTemplate(this.id))
    //console.log("before for loop" , this.listsItems)
    let items = ProxyState.items.filter(i=> i.listId == this.id)
    items.forEach(i=> template += i.Template)
    return template
    // for (let i = 0; i < this.listsItems.length; i++){
    //   //console.log( "infor loop", i)
    //   template += `
    //   <div class="form-check">
    //   <input type="checkbox" class="form-check-input" name="itemCheck" id="done">
    //   <label class="form-check-label" for="done"><h5>${this.listsItems[i]}</h5></label>
    //   <button type="button" class="close text-danger" onclick="app.listController.deleteListItem('${this.id}',${i})">
    //   <span >&times;</span>
    //   </button>
    //   </div>
    //   </dd>
    //   `
    // }
    // //console.log(template)
    // return template
  }

}