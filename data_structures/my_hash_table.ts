import { LinkedList } from "./my_linked_list";

/**
 * Коллизиии решаем при помощи связного списка
 */
class MyHashTable<T> {
    private data: any[] = []

    constructor(private size: number) {}

    private hash(value: string) {
        const sum = value
            .split("")
            .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
      // force sum into the hash table size
      return sum % this.size;
    }

    insert(key: string, value: T) {
        const idx = this.hash(key)
        if (this.data[idx]) {
            if (typeof this.data[idx] === 'string') {
                const previousData = this.data[idx]
                this.data[idx] = new LinkedList<T>()
                this.data[idx].addToTail(previousData)
                this.data[idx].addToTail(value)
            } else {
                this.data[idx].addToTail(value)
            }
            return
        }
        this.data[idx] = value
    }

    search(key: string): T {
        const index = this.hash(key)
        return this.data[index] ?? null
    }
}

const hashTable = new MyHashTable<string>(10)
hashTable.insert('hello', 'world')
console.log(hashTable.search('hello'))
