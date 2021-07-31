import View from "./view.js";

const Model = function(){
    this.view = new View();

    this.submitCarName = () => {
        console.log(this.view.setView(this.view.car_inputID).value);
    }
}
export default Model;