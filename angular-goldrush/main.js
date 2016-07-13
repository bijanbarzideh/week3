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

        mCtrl.addOnClick = function(event){
            //part 1 function finding the x and y values
            console.log("in function part 1")
            var clickLocation = []

                var x = event.x;
                var y = event.y;
                var offsetX = event.offsetX;
                var offsetY = event.offsetY;

                console.log(event, x, y, offsetX, offsetY);
                console.log(offsetX,offsetY)
                //part
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

        // $scope.addOnClick = function(event) {
        // $scope.items.push( {
        //     "label": "Click",
        //     "value": 100,
        //     "x": event.offsetX-50,
        //     "y": event.offsetY-50,
        // })
        // console.log($scope.items)
        // }


        //
        // When the user clicks on the map, create a new DOM element and position it where they clicked.
        // You can render a styled div or an image for the marker element.
        // You can access the mouse coordinates with the pageX and pageY properties of the event object.

            //   need to add a pin/icon/marker when mouse is clicked using mouse click event
            //   to add icon you would need to find the mouse coordinates

        // -----------------------------------------------
        // When the adds a marker, prompt them to enter a note that will be saved with the marker.
        // Show a styled div with a textarea as a popup for the user to enter a note. When the user
        // hovers over a marker, display the note in a read-only popup next to the marker.

        //adding to the mouse click event, need to add a pop up to add a small note to save
        // -----------------------------------------------


// You can position the marker by setting it to position: absolute, its container to position: relative,
//  and its left and top css properties to a calculated value based on the mouse coordinate.

//When the user clicks on a marker, remove the marker element from the DOM.
    //once the marker is set, need to store the coordinates and then able to remove the coordinates so it doesnt show