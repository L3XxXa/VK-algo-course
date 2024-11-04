/**
 * Обычный линейный проход. Подходит для неотсортированного массива
 * По времени: O(n)
 * По памяти: O(1)
 */

function linearSearch(arr: any[], element: any) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

/**
 * Бинарный поиск. Подходит ТОЛЬКО для отсортированного массива
 * 
 * По времени: log(N)
 * По памяти: O(1)
 */
function binarySearch(arr: number[], element: number) {
    let l = 0
    let r = arr.length - 1
    if (element < arr[l] || element > arr[r]) {
        return -1
    }
    while (l <= r) {
        const middle = Math.floor((r + l) / 2) // может быть переполнение. Можно считать что-то по типу middle = l + (r - l) / 2
        if (arr[middle] > element) {
            r = middle - 1
        } else if (arr[middle] < element) {
            l = middle + 1
        } else {
            return middle
        }
    }
    return -1
}

/**
 * Поиск первого вхождения
 */
function findFirstWithBinarySearch(arr: number[], element: number) {
    let l = 0
    let r = arr.length - 1
    if (element < arr[l] || element > arr[r]) {
        return -1
    }
    while (l + 1 < r) {
        const middle = Math.floor((r + l) / 2)
        if (arr[middle] < element) {
            l = middle
        } else {
            r = middle
        }
    }
    if (arr[l] === element) {
        return l
    } else if (arr[r] === element) {
        return r
    } else {
        return -1
    }
}

/**
 * Поиск последнего вхождения
 */
function findLastWithBinarySearch(arr: number[], element: number) {
    let l = 0
    let r = arr.length - 1
    if (element < arr[l] || element > arr[r]) {
        return -1
    }
    while (l + 1 < r) {
        const middle = Math.floor((r + l) / 2)
        if (arr[middle] <= element) {
            l = middle
        } else {
            r = middle
        }
    }
    if (arr[l] === element) {
        return l
    } else if (arr[r] === element) {
        return r
    } else {
        return -1
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const element = 3
console.log(linearSearch(arr, element))
console.log(binarySearch(arr, element))


const arrWithDuplicates = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8]
console.log(findFirstWithBinarySearch(arrWithDuplicates, element))
console.log(findLastWithBinarySearch(arrWithDuplicates, element))