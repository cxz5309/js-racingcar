import Model from './model.js';
import View from './view.js';
import Templates from './constants/templates.js';
// import { EVENT_TYPE, OPERATOR } from './constants/index.js';
// import { validateDigit, validateOperator, calculateData } from './utils.js';

function Controller() {
    this.model = new Model();
    this.view = new View();
    this.templates = new Templates();

    this.init = function(){
        console.log(this.view.$INPUT_FORM)
        this.view.$INPUT_FORM.innerHTML = this.templates.carNameField;
        this.view.setView(this.view.car_buttonID).addEventListener('click', this.model.submitCarName)
    }
}
export default Controller;