function findSubstringWithBrutforce(pattern: string, word: string) {
    let l = 0
    if (pattern === '') {
        return true
    }
    if (pattern.length > word.length) {
        return false
    }
    for (const wordChar of word) {
        if (wordChar === pattern[l]) {
            l += 1
        } else {
            l = 0
        }
        if (l === pattern.length) {
            return true
        }
    }
    return false
}

/**
 * Время: в худшем случае O(n * m)
 * В среднем: O(n)
 * В лучшем O(n / m)
 * 
 * Память: O(m)
 */
function findSubstringWithBoyerMoorHorspoolAlgo(pattern: string, word: string) {
    if (pattern === '') {
        return true
    }
    if (pattern.length > word.length) {
        return false
    }

    const offset = new Map<string, number>()

    for (let i = 0; i < pattern.length; ++i) {
        offset.set(pattern[i], pattern.length - i)
    }

    let skip = pattern.length - 1

    while (skip <= word.length) {
        let match = true
        let lastIndex = 0
        let currLetter = ''
        for (let i = 0; i < pattern.length; ++i) {
            lastIndex = i
            currLetter = word[skip - i - 1]
            if (pattern[pattern.length - i - 1] != word[skip - 1 - i]) {
                match = false
                break
            }
        }
        if (match) {
            return true
        } 
        if (lastIndex > 0) {
            if (offset.has(pattern[pattern.length - 1])) {
                skip += offset.get(pattern[pattern.length - 1])
            } else {
                skip += pattern.length
            }
            continue
        }
        if (offset.has(currLetter)) {
            skip += offset.get(currLetter)
        } else {
            skip += pattern.length
        }
    }
    return false
}

console.log(findSubstringWithBrutforce('aba', 'abacaba'))
console.log(findSubstringWithBoyerMoorHorspoolAlgo('aba', 'abacaba'))