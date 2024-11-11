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

function findMinimalHeight(root: BinaryTreeNode<number> | undefined | null): number {
    if (!root || (!root.left && !root.right)) {
        return 0
    }
    if (root.left && root.right) {
        return 1 + Math.min(findMinimalHeight(root.left), findMinimalHeight(root.right))
    }
    if (root.left) {
        return 1 + findMinimalHeight(root.left)
    }
    if (root.right) {
        return 1 + findMinimalHeight(root.right)
    }
}

const treeNode1 = new BinaryTreeNode<number>(1, null, null)
const treeNode2 = new BinaryTreeNode<number>(2, null, null)
const treeNode3 = new BinaryTreeNode<number>(2, null, null)
const treeNode4 = new BinaryTreeNode<number>(1, null, null)

const treeNode5 = new BinaryTreeNode<number>(3, treeNode1, treeNode2)
const treeNode6 = new BinaryTreeNode<number>(3, treeNode3, treeNode4)
const treeNode7 = new BinaryTreeNode<number>(6, treeNode5, treeNode6)

console.log(findMinimalHeight(treeNode7))