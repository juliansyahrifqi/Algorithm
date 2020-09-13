// Sorting algorithm ( bubble sort ) 
let bubblesort = (arr) => {
    const length = arr.length;

    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }    
        }
    }
    return arr;
}

// Randomize array function
let randoms = (n) => {
    let random = [...Array(n)].map(() => Math.floor(Math.random() * (n + 5)));

    return random;
}

const randomArr = randoms(10);

console.log("------------------Bubble Sort-----------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

console.log("Sorted array: ");
console.log(bubblesort(randomArr).join(' '));

