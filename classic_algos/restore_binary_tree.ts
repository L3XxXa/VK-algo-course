import { BinaryTreeNode } from "../data_structures/my_tree"

function restoreBinaryTree(arr: number[], i: number) {
    if(i >= arr.length) {
        return null
    }

    const root = new BinaryTreeNode<number>(arr[i])
    root.left = restoreBinaryTree(arr, 2 * i + 1)
    root.right = restoreBinaryTree(arr, 2 * i + 2)
    return root
}
