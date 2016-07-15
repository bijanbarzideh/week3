// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
// ____________________________________________________________________________________________________________________________

        var newPerson = {
        name: 'Luisa',
        age:25,
        }

        function getName(){
        return newPerson.name
        }
// ____________________________________________________________________________________________________________________________
// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24
// ____________________________________________________________________________________________________________________________

        function totalLetters(string){
            var stringSplit= string.split(' ').join('');
            return stringSplit.length
        }
// ____________________________________________________________________________________________________________________________
// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first
// argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}
// ____________________________________________________________________________________________________________________________

function called keyValue  takes 2 arguments
return new object with the key of the first argument and the value of the second


city Denver should return city:Denver

        function keyValue(arg1,arg2){
            this.where= where,
            this.city=city,

            return this.where + ":" + this.city;
        }



// ____________________________________________________________________________________________________________________________
// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value
// from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
// ____________________________________________________________________________________________________________________________






// ----------------------------------------------------------------------------------------------------------
// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string.
// The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'
// ____________________________________________________________________________________________________________________________






// ____________________________________________________________________________________________________________________________
// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print: a is 10 b is 20 c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print: firstName is pork lastName is chops
// ____________________________________________________________________________________________________________________________





// ____________________________________________________________________________________________________________________________
// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']
// ____________________________________________________________________________________________________________________________





// ____________________________________________________________________________________________________________________________
// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false
// ____________________________________________________________________________________________________________________________






// ____________________________________________________________________________________________________________________________
// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array,
// return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false
// ____________________________________________________________________________________________________________________________






// ____________________________________________________________________________________________________________________________
// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']
// ____________________________________________________________________________________________________________________________






// ____________________________________________________________________________________________________________________________
