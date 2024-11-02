class ListNode<T> {
    data: T
    nextNode: ListNode<T> | null

    constructor(data: T, nextNode: ListNode<T> | null){
        this.data = data
        this.nextNode = nextNode
    }
}

class LinkedList<Type> {
    firstNode: ListNode<Type> | null

    constructor () {
        this.firstNode = null
    }

    addToFront(data: Type) {
        const newNode = new ListNode(data, null)
        if(this.firstNode) {
            newNode.nextNode = this.firstNode
            this.firstNode = newNode
        } else {
            this.firstNode = newNode
        }
    }

    addToTail(data: Type) {
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

    addWithIndex(data: Type, index: number = 0) {
        let currentNode = this.firstNode
        if(currentNode) {
            for (let i = 0; i < index; ++i) {
                if(currentNode.nextNode) {
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
        if(this.firstNode) {
            let currentNode = this.firstNode
            while(currentNode.nextNode) {
                nodes = nodes.concat(`${currentNode.data}, `)
                currentNode = currentNode.nextNode
            }
            nodes = nodes.concat(`${currentNode.data}`)
        }
        nodes = nodes.concat(']')
        return nodes
    }
}

const linkedList = new LinkedList<string>()

linkedList.addToFront('This is head')
linkedList.addToTail('This is tail')
linkedList.addWithIndex('This is after first', 0)
linkedList.addWithIndex('This is after all', 100)
console.log(linkedList.toString())