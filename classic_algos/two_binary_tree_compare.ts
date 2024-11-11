class BinaryTreeNode<T> {
    left?: BinaryTreeNode<T>
    right?: BinaryTreeNode<T>
    data: number

    constructor(data: number, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
        this.data = data
        this.left = left
        this.right = right
    }
}

function compareTrees(root1: BinaryTreeNode<number>, root2: BinaryTreeNode<number>) {
    if (!root1 && !root2) {
        return true
    }
    if (!root1 || !root2) {
        return false
    }
    if (root1.data !== root2.data) {
        return false
    }

    return compareTrees(root1.left, root2.left) && compareTrees(root2.right, root1.right)
}

const treeNode1 = new BinaryTreeNode<number>(1, null, null)
const treeNode2 = new BinaryTreeNode<number>(2, null, null)
const treeNode3 = new BinaryTreeNode<number>(3, null, null)
const treeNode4 = new BinaryTreeNode<number>(1, null, null)

const treeNode5 = new BinaryTreeNode<number>(3, treeNode1, treeNode2)
const treeNode6 = new BinaryTreeNode<number>(3, treeNode3, treeNode4)
const treeNode7 = new BinaryTreeNode<number>(6, treeNode5, treeNode6)

const treeNode8 = new BinaryTreeNode<number>(1, null, null)
const treeNode9 = new BinaryTreeNode<number>(2, null, null)
const treeNode10 = new BinaryTreeNode<number>(2, null, null)
const treeNode11 = new BinaryTreeNode<number>(1, null, null)

const treeNode12 = new BinaryTreeNode<number>(3, treeNode8, treeNode9)
const treeNode13 = new BinaryTreeNode<number>(3, treeNode10, treeNode11)
const treeNode14 = new BinaryTreeNode<number>(6, treeNode12, treeNode13)

console.log(compareTrees(treeNode7, treeNode14))