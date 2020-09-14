function quicksort(data, start, end) {
	function partisi(data, start, end) {
		function swap(x, y) {
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

	if(start >= end) return;

	const center = partisi(data, start, end);
	quicksort(data, start, center - 1);
	quicksort(data, center + 1, end);
}

// Randomize array function
let randomize = (n) => {
    let random = [...Array(n)].map(() => Math.floor(Math.random() * (n+5)));

    return random;
}

const randomArr = randomize(1000);

console.log("Unsorted: ");
console.log(randomArr.join(' ') + "\n");
quicksort(randomArr, 0, randomArr.length -1);

const start = new Date().getTime();

console.log("Sorted: ");
console.log(randomArr.join(' '));

const stop = new Date().getTime();
const elapsed = stop - start;

console.log("Time: " + elapsed + " milisecond");
