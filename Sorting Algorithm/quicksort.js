let quicksort = (data, start, end) => {
	let partisi = (data, start, end) => {
		let swap = (x, y) => {
			const temp = data[y];
			data[y] = data[x];
			data[x] = temp;
		}

		const pivot = data[end];
		let center = start;

		for(let i = start; i < end; ++i) {
			if(data[i] < pivot) {
				swap(center, i);
				++center;
			}
		}
		swap(center, end);
		return center;
	}

	if(start >= end) return data;

	const center = partisi(data, start, end);
    quicksort(data, start, center - 1);
	
    return quicksort(data, center + 1, end);
}

// Randomize array function
let randomize = (n) => {
    let random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));

    return random;
}

const randomArr = randomize(1000);

console.log("----------------Quick Sort---------------");
console.log("Unsorted array: ");
console.log(randomArr.join(' ') + "\n");

// Start sorting time
const start = new Date().getTime();

console.log("Sorted array: ");
console.log(quicksort(randomArr, 0, randomArr.length - 1).join(' '));

// Stop sorting time
const stop = new Date().getTime();

// Elapsed sorting time
const elapsed = stop - start;

console.log("Time: " + elapsed + " milisecond");
