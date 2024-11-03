class StackNode<T> {
    data: T
    nextStackNode: StackNode<T> | null

    constructor(data: T, nextStackNode: StackNode<T> | null) {
        this.data = data
        this.nextStackNode = nextStackNode
    }
}

// Реализация Стека на односвязном списке
class MyLinkedStack<T> {
    private firstItem: StackNode<T> | null
    private size: number

    /**
     * Конструктор Стека
     * @param capacity - вместимость стека (дефолтное значение - 10)
     */
    constructor(private capacity: number = 10) {} 

    push(data: T) {
        if (this.size === this.capacity) {
            throw Error('Стек полон')
        } else {
            const newNode = new StackNode(data, this.firstItem)
            this.firstItem = newNode
            this.size ++
        }
    }

    pop(): T | null {
        if (this.firstItem) {
            const firstItem = this.firstItem
            this.firstItem = firstItem.nextStackNode
            this.size --
            return firstItem.data
        } else {
            return null
        }
    }

    traverse() {
        let currentItem = this.firstItem
        while (currentItem) {
            console.log(currentItem.data)
            currentItem = currentItem.nextStackNode
        }
    }

    length(): number {
        return this.size
    }
}

class MyArrayStack<T> {
    private stack: T[] = []

    constructor (private capacity: number = Infinity) {}

    size(): number {
        return this.stack.length
    }

    push(data: T) {
        if (this.size() === this.capacity) {
            throw Error('Стек полон')
        } else {
            this.stack.push(data)
        }
    }

    pop(): T | undefined {
        return this.stack.pop()
    }

    peek(): T | undefined {
        return this.stack[this.size() - 1]
    }
    
    traverse() {
        for (let stackItem of this.stack) {
            console.log(stackItem)
        }
    }
}

const myStack = new MyLinkedStack<string>(5)
myStack.push('Hello')
myStack.push('world!')
myStack.traverse()
console.log(`Popped '${myStack.pop()}'`)
myStack.traverse()

const myArrayStack = new MyArrayStack<string>()
myArrayStack.push('Hello')
myArrayStack.push('World!')
myArrayStack.traverse()
console.log(`Popped '${myArrayStack.pop()}'`)
myArrayStack.traverse()
