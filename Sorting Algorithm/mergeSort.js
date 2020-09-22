let merge = (x, y) => {
    let arr = [];

    while(x.length > 0 && y.length > 0) {
        if(x[0] < y[0]) {
            // Push data from first index data x to arr
            arr.push(x.shift());
        } else {
            // Push data from first index data y to arr
            arr.push(y.shift());
        }
    }

    // Merge data x and y to arr
    arr = arr.concat(x);
    arr = arr.concat(y);

    return arr;
}

let sort = (arr) => {
    if(arr.length <= 1) return arr;
    if(arr.length === 2) {
        if(arr[0] < arr[1]) return arr;

        // Swap data
        return [arr[1], arr[0]];
    }

    // Get middle data from arr
    const middle = arr.length >> 1;

    // Get left data from the middle
    const left = arr.slice(0, middle);

    // Get right data from the middle
    const right = arr.slice(middle);

    // Sort left data with recursive
    const sortedLeft  = sort(left);
   
    // Sort right data with recursive
    const sortedRight  = sort(right);

    // Merge two sorted data ( left data and right data )
    return merge(sortedLeft, sortedRight);
}

// Randomize array function
let randomize = (n) => {
    let random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));
    
    return random;
}

// Create random array
const randomArr = randomize(1000);

console.log("-------------Merge Sort---------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n")

// Start sorting time
const start = new Date().getTime();

console.log("Sorted array: ");
console.log(sort(randomArr).join(' '));

// End sorting time
const stop = new Date().getTime();

// Elapsed sorting time
const elapsed = stop - start;

console.log("Time: " + elapsed + " milisecond");
