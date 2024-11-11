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

/**
 * Симметричное дерево через BFS
 */
function isBinaryTreeSymmetricBFS(root: BinaryTreeNode<number>) {
    let queue = [root]
        while(queue.length > 0) {
            const queueLen = queue.length
            for (let i = 0; i < queueLen; ++i) {
                if (!queue[i] && !queue[queueLen - i - 1]) {
                    continue
                }
                if (!queue[i] || !queue[queueLen - i - 1]) {
                    return false
                }
                if (queue[i].data !== queue[queueLen - i - 1].data) {
                    return false
                }
                queue.push(queue[i].left)
                queue.push(queue[i].right)
            }
            queue = queue.slice(queueLen)
        }
    return true
}

/**
 * Симметричное дерево через DFS
 */
function isBinaryTreeSymmetricDFS(root: BinaryTreeNode<number> | undefined | null) {
    if (!root) {
        return true
    } else {
        let data = []
        data = dfs(root, data)
        let l = 0
        let r = data.length - 1
        while (l <= r) {
            if(data[l] != data[r]) {
                return false
            }
            l ++
            r --
        }
        return true
    }
}

function dfs(root: BinaryTreeNode<number> | undefined | null, res: number[]) {
    if (!root) {
        return res
    } 
    dfs(root.left, res)
    res.push(root.data)
    dfs(root.right, res)
    return res
}


const treeNode1 = new BinaryTreeNode<number>(1, null, null)
const treeNode2 = new BinaryTreeNode<number>(2, null, null)
const treeNode3 = new BinaryTreeNode<number>(2, null, null)
const treeNode4 = new BinaryTreeNode<number>(1, null, null)

const treeNode5 = new BinaryTreeNode<number>(3, treeNode1, treeNode2)
const treeNode6 = new BinaryTreeNode<number>(3, treeNode3, treeNode4)
const treeNode7 = new BinaryTreeNode<number>(6, treeNode5, treeNode6)

console.log(isBinaryTreeSymmetricBFS(treeNode7))
console.log(isBinaryTreeSymmetricDFS(treeNode7))