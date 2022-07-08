function selectionSort(a) {
	let index_min;
	for (let i = 0; i < a.length; i++) {
		index_min = i;
		for (let j = i + 1; j < a.length; j++) {
			
			if (a[j] < a[index_min]) {
				index_min = j;
			}
		}
    if (index_min != i) {
      swap(a, index_min, i);
    }
    console.log(a);
	}
}

function swap(a, i, j) {
	let temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

let arr = [90, 30, 20, -10, -20, -30];
selectionSort(arr);
