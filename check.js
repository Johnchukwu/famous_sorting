function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        const currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
    
    return arr;
}

const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);

console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", sortedArray);
