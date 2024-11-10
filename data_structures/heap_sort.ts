function buildMaxHeap(data: number[]) {
    const n = data.length

    for (let i = n / 2 - 1; i >= 0; --i) {
        heapify(data, n, i)
    }
}

function heapify(data: number[], n: number, i: number) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2
    if (left < n && data[left] > data[largest]) {
        largest = left
    } 
    if (right < n && data[right] > data[largest]) {
        largest = right
    }
    if (largest != i) {
        const tmp = data[i]
        data[i] = data[largest]
        data[largest] = tmp
        heapify(data, n, largest)
    }
}

function heapSort(data: number[]) {
    const n = data.length
    for (let i = n / 2; i >= 0; i--) {
        heapify(data, n, i)
    }

    for (let i = n - 1; i > 0; i--) {
        const tmp = data[i]
        data[i] = data[0]
        data[0] = tmp
        heapify(data, i, 0)
    }
    return data
}

console.log(heapSort([1, 4, 3, 2, 9]))