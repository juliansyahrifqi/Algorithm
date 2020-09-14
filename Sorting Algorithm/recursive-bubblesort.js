let recursiveBubble = (arr, length = arr.length) => {    

    if(length == 1) return arr;

    for(let i = 0; i < length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            const temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    return recursiveBubble(arr, length - 1);
}

let randomize = (n) => {
    const random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));

    return random;
}

const randomArr = randomize(10);
console.log("------------Recursive Bubble Sort------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

console.log("Sorted array: ");
console.log(recursiveBubble(randomArr).join(' '));
