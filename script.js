function mincost(arr)
{ 

    // Convert the array into a min-heap
    let heap = [...arr];
    heapify(heap);

    let cost = 0;

    // Continue until there is only one rope left
    while (heap.length > 1) {
        // Extract the two shortest ropes from the heap
        let rope1 = extractMin(heap);
        let rope2 = extractMin(heap);

        // Calculate the cost of connecting these two ropes
        let combinedCost = rope1 + rope2;

        // Add the combined cost to the total cost
        cost += combinedCost;

        // Insert the combined rope back into the heap
        insert(heap, combinedCost);
    }

    return cost;
}

// Function to heapify the array
function heapify(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapifyUtil(arr, i);
    }
}

// Utility function for heapify
function heapifyUtil(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;

    if (left < arr.length && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < arr.length && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapifyUtil(arr, smallest);
    }
}

// Function to extract the minimum element from the heap
function extractMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return arr.pop();
    }

    const min = arr[0];
    arr[0] = arr.pop();
    heapifyUtil(arr, 0);
    return min;
}

// Function to insert an element into the heap
function insert(arr, val) {
    arr.push(val);
    let i = arr.length - 1;
    while (i > 0 && arr[Math.floor((i - 1) / 2)] > arr[i]) {
        [arr[i], arr[Math.floor((i - 1) / 2)]] = [arr[Math.floor((i - 1) / 2)], arr[i]];
        i = Math.floor((i - 1) / 2);
    }


}
print(mincost([4, 3, 2, 6]))  
print(mincost([1, 2, 3, 4, 5]))
module.exports=mincost;
