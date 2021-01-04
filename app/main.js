import ListController from "./Controllers/ListController.js";
import ItemController from "./Controllers/ItemController.js"
import {loadState} from "./Utils/LocalStorage.js"

//NOTE This should be good to go
class App {
  listController = new ListController();
  itemController = new ItemController();
}

window["app"] = new App();
loadState()