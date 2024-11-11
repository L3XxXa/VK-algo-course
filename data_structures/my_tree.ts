export class BinaryTreeNode<T> {
    left?: BinaryTreeNode<T>
    right?: BinaryTreeNode<T>
    data: number

    constructor(data: number, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
        this.data = data
        this.left = left
        this.right = right
    }
}

export class BinarySearchTree{
    root?: BinaryTreeNode<number>

    constructor(root?: BinaryTreeNode<number>) {
        this.root = root
    }

    appendItem(item: number) {
        const newNode = new BinaryTreeNode(item)
        let currentNode = this.root
        if (!currentNode) {
            this.root = newNode
            return
        }
        while (currentNode.left && currentNode.right) {
            if (item > currentNode.data) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        if (item > currentNode.data) {
            currentNode.right = newNode
        } else {
            currentNode.left = newNode
        }
    }

    findMin(root?: BinaryTreeNode<number>) {
        let currentRoot = root ?? this.root
        while (currentRoot.left) {
            currentRoot = currentRoot.left
        }
        return currentRoot
    }

    find(element: number) {
        let currentRoot = this.root
        if (!currentRoot) {
            return null
        }
        while (currentRoot.left || currentRoot.right) {
            if (element < currentRoot.left.data) {
                currentRoot = currentRoot.left
            } else if (element > currentRoot.right.data) {
                currentRoot = currentRoot.right
            } else {
                return currentRoot
            }
        }
        return null
    }

    findMax(root?: BinaryTreeNode<number>) {
        let currentRoot = root ?? this.root
        while (currentRoot.right) {
            currentRoot = currentRoot.right
        }
        return currentRoot
    }

    deleteNode(data: number, root?: BinaryTreeNode<number>) {
        if (root === undefined) {
            return null
        }
        if (data < root.left.data) {
            root.left = this.deleteNode(data, root.left)
        } else if (data > root.right.data) {
            root.right = this.deleteNode(data, root.right)
        }
        if (!root.left && !root.right) {
            const tmp = root
            root = null
            return root
        }
        if (root.left) {
            const tmp = root
            root = root.right
            return tmp
        }
        if (root.right) {
            const tmp = root
            root = root.left
            return tmp
        }
        const minRoot = this.findMin(root.right)
        root.data = minRoot.data
        root.right = this.deleteNode(minRoot.data, root.right)
        return root
    }

    breadthTraverse(root?: BinaryTreeNode<number>) {
        let currentRoot = [root ?? this.root]
        const result = []
        while(currentRoot.length > 0) {
            const queue = []
            for (const current of currentRoot) {
                result.push(current)
                if (current.left) {
                    queue.push(current.left)
                } 
                if (current.right) {
                    queue.push(current.right)
                }
            }
            currentRoot = queue
        }
        return result
    }

    depthTraverse(root?: BinaryTreeNode<number>) {
        if (!root) {
            return
        }
        this.depthTraverse(root.left)
        console.log(root)
        this.depthTraverse(root.right)
    }

    getRoot() {
        return this.root
    }
}

const tree = new BinarySearchTree()
tree.appendItem(10)
tree.appendItem(11)
tree.appendItem(9)
console.log('\n ===MIN==')
console.log(tree.findMin())
console.log('\n ===MAX==')
console.log(tree.findMax())
console.log('\n ===FIND NODE==')
console.log(tree.find(10))
console.log('\n ===BREADTH==')
console.log(tree.breadthTraverse())
console.log('\n ===DEPTH==')
console.log(tree.depthTraverse(tree.getRoot()))
