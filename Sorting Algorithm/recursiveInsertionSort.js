let recursiveInsertionSort = (arr, length = arr.length) => {
    
    if(length == 1) return arr;

    // Recursive
    recursiveInsertionSort(arr, length-1);

    let last = arr[length-1];
    let j = length - 2;

    while(arr[j] > last && j >= 0) {
        arr[j+1] = arr[j];
        j--;
    }   

    arr[j+1] = last;
    return arr;

}

// Function randomize array
let randomize = (n) => {
    let random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));

    return random;
}

// Randomize array
const randomArr = randomize(1000);

console.log("--------------Recursive Insertion Sort--------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

// Start sorting time
const start = new Date().getTime();

console.log("Sorted array: ");
console.log(recursiveInsertionSort(randomArr).join(' '));

// End sorting time
const stop = new Date().getTime();

// Elapsed sorting time
const elapsed = stop - start;

console.log("Time: " + elapsed + " milisecond");

