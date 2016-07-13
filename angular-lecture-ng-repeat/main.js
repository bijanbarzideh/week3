//Step 1:create module
angular.module('PokeApp',[]);

//Step  2:create a controller
angular.module('PokeApp')
    .controller('PallettTown',[ pallettCtrl ])

//Step 3: create controller function using 'this'
function pallettCtrl(){

//Every function has a value of 'this'
//the THIS from our controller function will be the THIS
    var pCtrl = this;
    pCtrl.welcomeMessage = "Gotta Catch'em All"


//ng repeat is an angular directive that is used for CLIENT SIDE templating
//templating- generates DOM content from data using placeholder or blueprint

    // pCtrl.pokemon = [
    //     'Charmander',
    //     'Bulbasaur',
    //     'Squirtle',
    //     'Two Scoops',
    //     'Jigglypuff'
    // ];
    // pCtrl.jigglyPuff= {
    //     squishiness: 7,
    //     rage       : 'irate',
    //     rockstar   : true,
    //     name       :'jigglypugg',
    //
    // }
//}

//Array with Duplicate values

// pCtrl.clonedpokemon = [
//     'Charmander',
//     'Bulbasaur',
//     'Squirtle',
//     'Bulbasaur',
//     'Bulbasaur',
//     'Bulbasaur',
//     'Two Scoops',
//     'Jigglypuff',
//     'Jigglypuff',
//     'Jigglypuff',
// ];
// pCtrl.jigglyPuff= {
//     squishiness: 7,
//     rage       : 'irate',
//     rockstar   : true,
//     name       :'jigglypugg',
//
// }
pCtrl.trainers = [
    {
        name   : "Ash",
        badges : [
            "Earth",
            "Wind",
            "Fire",
        ],
        skill  : 1,
    },{
        name   : "Misty",
        badges : [
            "Water",
        ],
        skill  : 3,
    },{
        name   : "Brock",
        badges : [
            "Rock",
            "Suplex",
            "Cascade"
        ],
        skill  : 5,
    }];




}
