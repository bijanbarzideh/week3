angular.module('Practice',[])


angular.module('Practice')


    .controller('alpha', [
        '$scope',   //this is the object that will expose date to the view
        alphaCtrl
    ]);
    //under the hood,angular will call our controler function and pass in the dependencies we injected above
    //this is the function that represent the controller
    //We must pass,as parameters, the dependencies we injected above
    function alphaCtrl($scope){
            $scope.printConsole = function(){
                    console.log('I am in the console')

            }
            $scope.headLine = ''

            $scope.showMe = function(){
                $scope.headLine = 'Can you see me now?';
            }
            $scope.clickList = function(){
                $scope.subGreeting = 'Punch Noises! The putty disappeared ...';
            }

            $scope.listItem1 = '';
            $scope.listItem2 = '';
            $scope.listItem3 = '';

            $scope.listClick = function(){
                $scope.listItem1 = 'I am part of a list';
                $scope.listItem2 = 'I am part of a list';
                $scope.listItem3 = 'I am part of a list';

            }


            $scope.exciteHeadLine

            $scope.excitementAdd = function(){
            $scope.exciteHeadLine
             = '!';
            }
            $scope.turnPink = function() {
            angular.element(event.target).css('color', 'pink');
            };



    };
