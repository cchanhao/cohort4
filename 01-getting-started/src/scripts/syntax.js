const functions = {

    // define attributes / variables
    // number
    addFive: (num1) => {
        return (num1 + 5);

    },
    // string
    changeUpper: (str) => {
        return str.toUpperCase();
    },
    // boolean
    larger: (num1) => {
        return (num1 > 5);
    },
    // array
    length: (arr) => {
        return arr.length;
    },
    // dictionary / objects
    carMake: (obj) => {
        const vehicle = obj;
        return vehicle.make;
    },
    // undefined
    undefinedChecker: (input) => {
        if (typeof input == "undefined") {
            return true;
        }
        return (false);
    },
    // sample if / else
    // functions
    // parameters
    // returns
    // arrays
    // add to the front
    addFront: (list, arr) => {
        list.unshift(arr);
        return list;
    },
    // add to the end
    addEnd: (list, arr) => {
        list.push(arr);
        return list;
    },
    // update values
    changeValue: (list) => {
        list[0] = "honda";
        return list;
    },
    // loops 
    // for
    forLoop: (arr, num) => {
        let i;
        for (i = 0; i < arr.length; i++) {
            arr[i] += num;
        }
        return arr;
    },
    // for/in
    inLoop: (person) => {
        let person = {firstName: "Bruce", lastName: "Wayne", age: 30};
        
        let text = "";
        let i;
        for (i in person) {
            text += person[i] + "";
        }
    },
    // while
    // do while
    // forEach (with array and function)
    // Objects / Dictionaries
    // declare object
    // lookup key to retrieve value

    // --------------- Copy ends here --------
};
export default functions;