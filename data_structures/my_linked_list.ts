class ListNode<T> {
    data: T
    nextNode: ListNode<T> | null

    constructor (data: T, nextNode: ListNode<T> | null){
        this.data = data
        this.nextNode = nextNode
    }
}

class LinkedList<T> {
    firstNode: ListNode<T> | null

    constructor () {
        this.firstNode = null
    }

    addToFront(data: T) {
        const newNode = new ListNode(data, null)
        if (this.firstNode) {
            newNode.nextNode = this.firstNode
            this.firstNode = newNode
        } else {
            this.firstNode = newNode
        }
    }

    addToTail(data: T) {
        const newNode = new ListNode(data, null)
        if(this.firstNode) {
            let currentNode = this.firstNode
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = newNode
        } else {
            this.firstNode = newNode
        }
    }

    addWithIndex(data: T, index: number = 0) {
        let currentNode = this.firstNode
        if (currentNode) {
            for (let i = 0; i < index; ++i) {
                if (currentNode.nextNode) {
                    currentNode = currentNode.nextNode
                } else { 
                    console.log(`Length of this linked list < ${index}. Will place this node in the tail`)
                    break
                }
            }
            const newNode = new ListNode(data, null)
            const nextNodeTmp = currentNode.nextNode
            newNode.nextNode = nextNodeTmp
            currentNode.nextNode = newNode
        } else {
            this.addToFront(data)
        }
        
    }

    toString(): string {
        let nodes = '['
        if (this.firstNode) {
            let currentNode = this.firstNode
            while (currentNode.nextNode) {
                nodes = nodes.concat(`${currentNode.data}, `)
                currentNode = currentNode.nextNode
            }
            nodes = nodes.concat(`${currentNode.data}`)
        }
        nodes = nodes.concat(']')
        return nodes
    }

    forEach(callbackFunction: (element: ListNode<T>, index: number) => void) {
        let currentNode = this.firstNode
        let index = 0
        while (currentNode) {
            callbackFunction(currentNode, index)
            currentNode = currentNode.nextNode
            index ++
        }
    }

    findNode(data: T) {
        let currentNode = this.firstNode
        while (currentNode?.nextNode) {
            if (data === currentNode.data) {
                return currentNode
            } else {
                currentNode = currentNode.nextNode
            }
        } 
        throw Error('No such node')
    }

    findIndex(data: T) {
        let currentNode = this.firstNode
        let idx: number = 0
        while (currentNode?.nextNode) {
            if (data === currentNode) {
                return idx
            }
            idx ++
        }
        return -1
    }
}


class DoublyLinkedListNode<T> {
    data: T
    previousNode: DoublyLinkedListNode<T>
    nextNode: DoublyLinkedListNode<T>

    constructor(data: T, previousNode: DoublyLinkedListNode<T>, nextNode: DoublyLinkedListNode<T>) {
        this.data = data
        this.previousNode = previousNode
        this.nextNode = nextNode
    }
}
class DoublyLinkedList<T> {
    firstNode: DoublyLinkedList<T>
}

const linkedList = new LinkedList<string>()

linkedList.addToFront('This is head')
linkedList.addToTail('This is tail')
linkedList.addWithIndex('This is after first', 0)
linkedList.addWithIndex('This is after all', 100)
linkedList.forEach((element) => {
    element.data = `Updated with forEach ${element.data}`
})
console.log(linkedList.toString())
