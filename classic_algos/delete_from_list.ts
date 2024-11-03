import { ListNode } from "../data_structures/my_linked_list";

function removeFromList(firstNode: ListNode<string>, value: string) {
    let dummy = new ListNode<string | null>(null, firstNode)
    let previous = dummy
    let currentItem = firstNode

    while(currentItem !== null) {
        if (currentItem.data === value) {
            previous.nextNode = currentItem.nextNode
        } else {
            previous = currentItem
        }
        currentItem = currentItem.nextNode!
    }
    return dummy.nextNode
}