//counting sheep -----------------
const countingSheep = num => {
    //base case
    if (num === 0) {
        return;
    }
    //recursive case
    console.log(`${num} - Another sheep jumps over the fence`);
    return countingSheep(num - 1)
}
countingSheep(3);
//iterative
const countingSheep = num => {
    for (let i = num; i > 0; i--) {
        console.log(`${i} - Another sheep jumps over the fence`);
    }
}
countingSheep(3)

//array doubler-------------------------
const doubleArray = array => {
    if (array.length === 0) {
        return [];
    }
    let newNum = array[0] * 2;
    return [newNum, ...doubleArray(array.splice(1))];
}

doubleArray([1, 2, 3]);
//iterative
const doubleArray = array => {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(array[i] * 2)
    }
    return answer;
}

doubleArray([1, 2, 3]);

//reverse string---------------------------------------------
const reverseString = str => {
    if (str === '') {
        return '';
    }
    const lastLetter = str[str.length - 1];

    return lastLetter + reverseString(str.slice(0, -1))
}

reverseString('hello');
//iterative
const reverseString = str => {
    let answer = [];
    for (let i = str.length - 1; i >= 0; i--) {
        answer.push(str[i])
    }
    return answer.join('');
}
reverseString('hello');

//nth Triangular number ------------------------------------------
const nTriangle = n => {
    if (n === 1) {
        return 1
    }
    return n + nTriangle(n - 1)
}

nTriangle(4);
//iterative
const nTriangle = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
nTriangle(4);

//string splitter ----------------------------------------------
const split = (str, sep) => {
    let idx = str.indexOf(sep);
    if (idx == -1) {
        return [str];
    }
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}

strSplitter('hello-hello', '-');
//iterative
const split = (str, sep) => {
    let answer = [];

    let idx = str.indexOf(sep);
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            answer.push(str.slice(0, idx));
            answer.push(str.slice(idx + 1, str.length));
        }
    }
    return answer;
}
split('hello-hello', '-');

//binary representation ------------------
const binaryRep = (input) => {
    // base case 
    if (input <= 0) {
        return '';
    }
    const binaryString = Math.floor(input % 2);
    // has to go from bottom to top 
    return binaryRep(Math.floor(input / 2)) + binaryString;
}
binaryRep(7);

binaryRep(3);

const binaryRep = input => {
    let binaryString = '';
    while (input > 0) {
        binaryString = binaryString + Math.floor(i % 2);
        input = Math.floor(input / 2)
    }
    return binaryString;
}
binaryRep(7);

//factorial-----------------
const factorial = num => {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

factorial(5);
//iterative
const factorial = num => {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
factorial(5)

//fibonacci-------------------
const fibonacci = n => {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(7);
//iterative
const fibonacci = n => {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n];
}
fibonacci(7);

//anagrams---------------------
function anagrams(prefix, str) {
    if (str.length <= 1) {
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for (let i = 0; i < str.length; i++) {
            let current = str.substring(i, i + 1);
            let previous = str.substring(0, i);
            let after = str.substring(i + 1);
            anagrams(prefix + current, previous + after);
        }
    }
}

function printAnagram(word) {
    anagrams(' ', word);
}

printAnagram('east');

//animal hierarchy-------------------------

const animalHierarchy = [
    { id: 'Animals', parent: null },
    { id: 'Mammals', parent: 'Animals' },
    { id: 'Dogs', parent: 'Mammals' },
    { id: 'Cats', parent: 'Mammals' },
    { id: 'Golden Retriever', parent: 'Dogs' },
    { id: 'Husky', parent: 'Dogs' },
    { id: 'Bengal', parent: 'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
        .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;
}
console.log(traverse(animalHierarchy, null));

//input program array of objects
//output is object within object within object
//output each recursion is an object in the array



