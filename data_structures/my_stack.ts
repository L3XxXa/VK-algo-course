class StackNode<T> {
    data: T
    nextStackNode: StackNode<T> | null

    constructor(data: T, nextStackNode: StackNode<T> | null) {
        this.data = data
        this.nextStackNode = nextStackNode
    }
}

class MyStack<T> {
    firstItem: StackNode<T> | null

    constructor() {} 

    push(data: T) {
        const newNode = new StackNode(data, this.firstItem)
        this.firstItem = newNode
    }

    pop(): T | null {
        if (this.firstItem) {
            const firstItem = this.firstItem
            this.firstItem = firstItem.nextStackNode
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
}

const myStack = new MyStack<string>()
myStack.push('Hello')
myStack.push('world!')
myStack.traverse()
console.log(`Popped '${myStack.pop()}'`)
console.log(myStack.traverse())