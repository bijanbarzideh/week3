// First component we NEED in Angular is called a Module
//      A Module is essentially a bucket for code in your application(contatiner for other angular components)
//Create a Module
angular.module('Zordon',[])// need to have a name which is a string and an empty ARRAY
//                       ^ the empy array is called an INJECTOR-angular uses something called DEPENDENCY INJECTION

//Next big component in Agular is a CONTROLLER
//Probaby will eb the most common angular component you create
//Controllers help you expose data to the view
//Controllers are registered to a MODULE

//with only One argument, the module method will retrieve an existing module
angular.module('Zordon')
//     //big difference between controller and module mehtod: the final element in the injector must
//     //be a function that represents the controller itself
//
    .controller('alpha', [
        '$scope',   //this is the object that will expose date to the view
        alphaCtrl
    ]);
    //under the hood,angular will call our controler function and pass in the dependencies we injected above
    //this is the function that represent the controller
    //We must pass,as parameters, the dependencies we injected above
    function alphaCtrl($scope){
        console.log('Controller is working! Ay yai yai yai')

        $scope.greeting ='Welcome to the Command Center!';

        $scope.subGreeting = 'Power Rangers ONLY'

        $scope.fightPutty = function(){
            $scope.subGreeting = 'Punch Noises! The putty disappeared ...';
        }

    };

// angular.module('Zordon')
//
//     .controller('betaCtrl', betaCtrl )
//
//     function betaCtrl(){
//         //this.beans = 'Black Beans';
//         var beta = this;
//
//             beta.myBeans = []
//             window.beta = beta //debug only,delete after use
//
//             beta.addBeans = function(){
//                 beta.myBeans.push(beta.myFavoriteBeans)
//                 beta.myFavoriteBeans = '';
//
//             }
//             beta.removeLastBeans = function(){
//                 beta.myBeans.pop();
//             }
//             beta.beanHover = function(){
//                 console.log('hover')
//                 beta.beanColor = {'color': 'blue'}
//             }
// }

angular.module('Zordon')

    .controller('betaCtrl', betaCtrl )

    function betaCtrl(){
        //this.beans = 'Black Beans';
    // var this = this;

            this.myBeans = []
            window.this = this //debug only,delete after use

            this.addBeans = function(){
                this.myBeans.push(this.myFavoriteBeans)
                this.myFavoriteBeans = '';

            }
            this.removeLastBeans = function(){
                this.myBeans.pop();
            }
            this.beanHover = function(){
                console.log('hover')
                this.beanColor = {'color': 'blue'}
            }
}
