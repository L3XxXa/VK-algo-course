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

/**
 * Тернарный поиск. Подходит ТОЛЬКО для отсортированного массива
 * 
 * По времени: log_3(N)
 * По памяти: O(1) 
 */
function ternarySearch(arr: number[], element: number) {
    let l = 0
    let r = arr.length
    if (arr[l] > element || arr[r] < element) {
        return -1
    }
    while(l < r) {
        const middle1 = Math.floor(l + (r - l) / 3)
        const middle2 = Math.floor(r - (r - l) / 3)
        if (arr[middle1] === element) {
            return middle1
        } else if (arr[middle2] === element) {
            return middle2 
        } else if (arr[middle1] < element) {
            l = middle1 + 1
        } else if (arr[middle2] > element) {
            r = middle2 - 1
        }
    }
    return -1
}

/**
 * Эксопненциальный поиск. Подходит ТОЛЬКО для остортированных массивов
 * Используется для уточнения диапазона поиска. 
 * По времени: log(М), где М - индекс элемента, который надо найти
 * По памяти: O(1) 
 * 
 * Можно комбинировать с бинарным поиском, то тогда общая сложность алгоритма log(M)
 */
function exponentialSearch(arr: number[], element: number): {l: number, r: number} {
    let border = 1
    let lastElement = arr.length - 1
    while (border < lastElement  && arr[border] < element) {
        if (arr[border] === element) {
            return {l: border, r: border * 2}
        }
        border *= 2
        if (border > lastElement) {
            return {l: border / 2, r: lastElement}
        }
    }
    return {l: border / 2, r: border}
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const element = 3
console.log(linearSearch(arr, element))
console.log(binarySearch(arr, element))
console.log(ternarySearch(arr, element))
console.log(exponentialSearch(arr, 5))


const arrWithDuplicates = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8]
console.log(findFirstWithBinarySearch(arrWithDuplicates, element))
console.log(findLastWithBinarySearch(arrWithDuplicates, element))