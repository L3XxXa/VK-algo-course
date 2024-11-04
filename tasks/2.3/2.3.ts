function exponentialSearch(arr: number[], element: number): number[] {
    let border = 1
    let lastElement = arr.length - 1
    while (border < lastElement  && arr[border] < element) {
        if (arr[border] === element) {
            return [border, border * 2]
        }
        border *= 2
        if (border > lastElement) {
            return [Math.floor(border / 2), lastElement]
        }
    }
    return [Math.floor(border / 2), border]
}