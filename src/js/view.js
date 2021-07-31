const View = function(){
    // this.$carList = document.querySelector('#car-list');
    // this.$CARS = document.querySelector('#car');
    // this.$INPUT = document.querySelector('#user-input-component"');
    // this.$TRY_SECTION = document.querySelector('#section-race-times');
    // this.$RESULT_SECTION = document.querySelector('#game-result-component');
    // this.$WINNER = document.getElementById('#winners');
    // this.$CAR = document.getElementById('#car');
    // this.$CAR_DELAY_ID = document.getElementById('#car-delay');
    // this.$TRY_INPUT = document.querySelector('#input-race-times');
    this.$INPUT_FORM = document.getElementById('input-form');
    this.car_buttonID = `#button-car-name`;
    this.car_inputID = `#input-car-name`;

    this.$CAR_NAME = document.querySelector('.car-player.mr-2');
    this.$CAR_FORWARD = document.querySelector('.forward-icon.mt-2');
    this.$CAR_DELAY = document.querySelector('.material.spinner');
    this.$CAR_DELAY_CONTAINER = document.querySelector('.relative.spinner-container');
    this.$CAR_DELAY_DIV = document.querySelector('.d-flex.justify-center.mt-4');

    // this.render = function (value) {
    // };

    this.setView = function(selector){
        return document.querySelector(selector);
    }

    this.renderResult = function (result) {
        this.$total.textContent = String(result);
    };

    this.resetTotal = function () {
        this.$total.textContent = '0';
    };
  
}

export default View;