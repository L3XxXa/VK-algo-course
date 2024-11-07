/**
 * Сортировка выборкой.
 * Скорость работы O(n^2)
 * Память: O(1)
 * Количество операций обмена O(n)
 */
function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; ++i) {
        let min = i
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[min]) {
                min = j
            }
        } 
        const tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
    return arr
}

/**
 * Сортировка вставкой.
 * Скорость работы O(n^2)
 * Память: O(1)
 * Количество операций обмена O(n)
 */
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; ++i) {
        let j = i
        while (j > 0) {
            if (arr[j - 1] > arr[j]) {
                const tmp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = tmp
            }
            j --
        } 
    }
    return arr
}

/**
 * Сортировка пузырьком.
 * Скорость работы O(n^2)
 * Память: O(1)
 * Количество операций обмена O(n)
 */
function bubbleSort(arr: number[]): number[] {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length - 1; ++i) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = tmp
                sorted = false
            }
        }
    }
    return arr
}

/**
 * Сортировка Шелла. По сути похожа на сортировку вставками. Неустойчива
 * Скорость работы O(n^(4 / 3))
 * Память: O(1)
 * Количество операций обмена O(n)
 */
function shellSort(arr: number[]): number[] {
    let gap = arr.length / 2
    while (gap > 0) {
        for (let i = 0; i < arr.length; ++i) {
            let tmpGap = i
            while (tmpGap >= gap && arr[tmpGap] < arr[tmpGap - gap]) {
                const tmp = arr[tmpGap]
                arr[tmpGap] = arr[tmpGap - gap]
                arr[tmpGap - gap] = tmp 
            }
        }
        gap /= 2
    }
    return arr
}

/**
 * Сортировка слиянием. 
 * Скорость работы O(n * log(n))
 * Память: O(n)
 * Количество операций обмена O(n)
 */
function mergeSort(arr: number[]) {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

function merge(a: number[], b: number[]) {
    const result: number[] = []
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[i]) {
            result.push(a[i])
            i ++
        } else {
            result.push(b[j])
            j ++
        }
    }
    while (i < a.length) {
        result.push(a[i])
        i ++
    }
    while (j < b.length) {
        result.push(b[j])
        j ++
    }
    return result
}

/**
 * Быстрая сортировка. Используется во многих стандартных библиотеках.
 * 
 * Время работы: O(n * log(n)), однако при выборе максимального/минимального в подпоследовательности, сортировка становится квадратичной
 */
function quickSort(arr: number[]) {
    let i = 0
    let j = arr.length - 1
    let pivot = arr[arr.length / 2]
    while (i <= j) {
        while (arr[i] < pivot) i ++
        while (arr[j] > pivot) j --
        if (i <= j) {
            const tmp = arr[j]
            arr[j] = arr[i]
            arr[i] = tmp
            j --
            i ++
        }
    }
    if (j > 0) 
        return quickSort(arr.slice(0, j + 1))
    if (i < arr.length) 
        return quickSort(arr.slice(i, arr.length - i))
    return arr
}

const arr = [1, 3, 2, 7, 4, 5]
const arr2 = [1, 3, 2, 7, 4, 5]
console.log(selectionSort(arr))
console.log(insertionSort(arr))
console.log(bubbleSort(arr))
console.log(shellSort(arr))
console.log(mergeSort(arr))
console.log(quickSort(arr2))
