let insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while(arr[j] > key && j >= 0) {
            arr[j+1] = arr[j];
            j--;
        }   
        
        arr[j+1] = key;
    }

    return arr;
}

let randomize = (n) => {
    const random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));

    return random;
}   

const randomArr = randomize(1000);

console.log("-------------Insertion Sort----------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

const start = new Date().getTime();

console.log("Sorted array: ");
console.log(insertionSort(randomArr).join(' '));

const stop = new Date().getTime();
const elapsed = stop - start;

console.log("Time: " + elapsed + " milisecond");
