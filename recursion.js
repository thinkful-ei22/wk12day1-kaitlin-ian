//counting sheep -----------------
const countingSheep = num => {
    //base case
    if (num === 0){
        return;
    }
    //recursive case
    console.log(`${num} - Another sheep jumps over the fence`);
    return countingSheep(num-1)
}

countingSheep(3);


//array doubler-------------------------
const doubleArray = array => {
    if (array.length === 0) {
        return [];
    }
    let newNum = array[0] * 2; 
    return [newNum, ...doubleArray(array.splice(1))];
}

doubleArray([1, 2, 3]);

//reverse string------------------------
const reverseString = str => {
    if (str === ''){
        return '';
    }
    const lastLetter = str[str.length-1];

    return lastLetter + reverseString(str.slice(0, -1))
}

reverseString('hello');

//nth Triangular number ------------------
const nTriangle = n => {
    if (n === 1){
        return 1
    }
    return n + nTriangle(n-1) 
}

nTriangle(4);

//string splitter ------------------
const strSplitter = () => {
    if(str.length === 0){
        return '';
    }
    return [str[0], ...strSplitter(str.splice(1)[0])];
}

strSplitter('hello');

//binary representation ------------------
const biRep = num => {
    if (num === 0) {
        return 0;
    }
    return num.toString(2);
}

biRep(422);

//factorial-----------------
const factorial = num => {
    if (num === 1 ){
        return 1;
    }
    return num * factorial(num - 1);
}

factorial(5);

//fibonacci-------------------
const fibonacci = n => {
    if (n === 0) {
        return;
    }
    console.log(n + fibonacci(n + 1));
}

fibonacci(7);