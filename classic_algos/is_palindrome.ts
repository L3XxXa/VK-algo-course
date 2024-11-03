import { Dequeue } from "../data_structures/my_dequeue"
import { MyLinkedStack } from "../data_structures/my_stack"

function isPalindromeWithStack(a: string): boolean {
    const stack = new MyLinkedStack<string>()
    for (const element of a) {
        stack.push(element)
    }
    for (const element of a) {
        if (element !== stack.pop()) {
            return false
        }
    }
    return true
}

function isPalindromeWithDequeue(a: string): boolean {
    const dequeue = new Dequeue<string>()
    for (const element of a) {
        dequeue.pushFront(element)
    }
    for (let i = 0; i < a.length / 2; ++i) {
        if(dequeue.popBack() !== dequeue.popFront()) {
            return false
        }
    }
    return true
}

function isPalindromeTwoPointers(a: string): boolean {
    let i = 0
    let j = a.length - 1
    while (i < j) {
        if (a[i] !== a[j]) {
            return false
        }
        i ++
        j --
    }
    return true
}

console.log(isPalindromeWithStack('asddsa'))
console.log(isPalindromeWithStack('asddsd'))

console.log(isPalindromeWithDequeue('asddsa'))
console.log(isPalindromeWithDequeue('asddsd'))

console.log(isPalindromeTwoPointers('asddsa'))
console.log(isPalindromeTwoPointers('asddsd'))