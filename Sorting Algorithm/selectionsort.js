// Sorting algorithm ( selection sort )
let selectionSort = (arr) => {

    // Swap value function
    let swap = (x, y) => {
        const temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    for(let i = 0; i < arr.length; i++) {
        let  min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(i, min);
    };
    return arr;
} 

// Randomize array function
let randomize = (n) => {
    const random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));
    
    return random;
}

const randomArr = randomize(1000);

console.log("-----------------Selection Sort-------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

const start = new Date().getTime();

console.log("Sorted array: ");
console.log(selectionSort(randomArr).join(' '));

const stop = new Date().getTime();
const elapsed = stop - start;

console.log("Time: " + elapsed  + " milisecond");
