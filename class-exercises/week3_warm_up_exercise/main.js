
angular.module('CakeApp',[]);


angular.module('CakeApp')
    .controller('MenuController',MenuController)
    .controller('MenuOrderController', MenuOrderController)


function MenuController(){
    console.log('MenuController loaded')
}

function MenuOrderController(){
    console.log('MenuOrderController loaded')
}
