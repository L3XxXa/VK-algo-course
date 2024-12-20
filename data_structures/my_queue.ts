export class ArrayQueue<T> {
    private queue: T[] = []
    constructor(private capacity: number = Infinity) {}

    size(): number {
        return this.queue.length
    }

    enqueue(data: T) {
        if (this.capacity === this.size()) {
            throw Error('Очередь полна')
        }
        this.queue.push(data)
    }

    dequeue(): T | undefined {
        return this.queue.shift()
    }

    traverse() {
        for(const item of this.queue) {
            console.log(item)
        }
    }

    peek() {
        return this.queue[0]
    }
}

export class RingArrayQueue<T> {
    private queue: (T | null)[]

    private left: number = 0
    private right: number = 0

    constructor (ringArrayLength: number = 10) {
        this.queue = new Array(ringArrayLength)
    }

    size(): number {
        return this.queue.length
    }

    enqueue(data: T) {
        if (this.right === this.size()) {
            this.right = 0
            this.left = this.size() - 1
        }
        this.queue[this.right] = data
        this.right ++
    }

    dequeue(): T | null {
        if (this.left === this.size()) {
            this.left = 0
        }
        const item = this.queue[this.left]
        this.queue[this.left] = null
        this.left ++
        return item
    }

    traverse() {
       console.log(this.queue) 
    }
}
