class DequeueListNode<T> {
    data: T | null
    nextNode: DequeueListNode<T> | null
    previousNode: DequeueListNode<T> | null

    constructor ( data: T | null, nextNode: DequeueListNode<T> | null, previousNode: DequeueListNode<T> | null) {
        this.data = data
        this.nextNode = nextNode
        this.previousNode = previousNode
    }
}

export class Dequeue<T> {
    head: DequeueListNode<T>
    tail: DequeueListNode<T>
    private size = 0

    constructor() {
        this.head = new DequeueListNode<T>(null, null, null)
        this.tail = new DequeueListNode<T>(null, null, null)
        this.head.nextNode = this.tail
        this.tail.previousNode = this.head
    }

    pushFront(data: T) {
        const newNode = new DequeueListNode(data, null, null)
        newNode.nextNode = this.head.nextNode
        newNode.previousNode = this.head
        if (this.head.nextNode)
            this.head.nextNode.previousNode = newNode
        this.head.nextNode = newNode
        this.size ++
    }

    pushBack(data: T) {
        const newNode = new DequeueListNode(data, this.tail, this.tail.previousNode)
        if (this.tail.previousNode)
            this.tail.previousNode.nextNode = newNode
        this.tail.previousNode = newNode
        this.size ++
    }

    popFront(): T | null {
        const nodeToPop = this.head.nextNode
        if (nodeToPop !== this.tail) {
            this.head.nextNode = nodeToPop!.nextNode
            nodeToPop!.nextNode!.previousNode = this.head
            this.size --
            return nodeToPop!.data
        }
        return null

    }

    popBack(): T | null {
        const nodeToPop = this.tail.previousNode
        if (nodeToPop !== this.head) {
            this.tail.previousNode = nodeToPop!.previousNode
            nodeToPop!.previousNode!.nextNode = this.tail
            this.size --
            return nodeToPop!.data
        }
        return null
    }

    length() {
        return this.size
    }

    traverse() {
        let currNode: DequeueListNode<T> | null = this.head
        const arr: (T | null)[] = []
        while(currNode) {
            arr.push(currNode.data)
            currNode = currNode!.nextNode
        }
        return arr
    }
}