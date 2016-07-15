//Step 1:create module
angular.module('GoldMapApp',[]);

//Step  2:create a controller
angular.module('GoldMapApp')
    .controller('MarkerMap',[ markerCtrl ])

//Step 3: create controller function using 'this'
function markerCtrl(){

//Every function has a value of 'this'
//the THIS from our controller function will be the THIS
    var mCtrl = this;

        mCtrl.clickLocation = []
        mCtrl.addOnClick = function(event){
            //part 1 function finding the x and y values
            mCtrl.locationXY = {
                x : event.x -5,
                y : event.y -5,
                offsetX : event.offsetX ,
                offsetY : event.offsetY ,
            };
                console.log(mCtrl.locationXY)
            //part 2 push offsetX and offsetY to the clickLocation array
            mCtrl.clickLocation.push({ 'x' : mCtrl.locationXY.x , 'y' : mCtrl.locationXY.y});
                console.log(mCtrl.clickLocation)

        }

        mCtrl.removeLocation = function(index){
            mCtrl.clickLocation.splice(index,1)
            console.log(mCtrl.clickLocation)
            }


    }


// drink potion = functin(potion){
//     console.log('drink the weird' + potion)
// }
// ng click= funciton drink potion(potion)  ng repeat the potion in potion list
//
// to remove-
// potion.indexof(potion)
// than splice[i] of whichever potion you want to remove
//
// var potionIndex=  potion.indexOf(potion)
//
// potion.splice(potionindex,1)
