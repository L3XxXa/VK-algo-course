class ArrayQueue<T> {
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
}

const arrayQueue = new ArrayQueue()

arrayQueue.enqueue('Hello')
arrayQueue.enqueue('World')
arrayQueue.traverse()
console.log(`Вышел '${arrayQueue.dequeue()}'`)
arrayQueue.traverse()