/**
 * Является ли строка исходной строкой для другой строки? 
 */

import { ArrayQueue } from "../data_structures/my_queue";

function isSubsequenceWithQueue(a: string, b: string) {
    const queue = new ArrayQueue<string>()

    for (const element of a) {
        queue.enqueue(element)
    }

    for (const element of b) {
        if (queue.peek() === element) {
            queue.dequeue()
        }
    }

    return queue.size() === 0
}

isSubsequenceWithQueue('asd', 'asdasd')