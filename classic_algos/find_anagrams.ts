function findAnagrams(strings: string[]) {
    const anagrams = new Map<string, string[]>()

    for(const word of strings) {
        const lexiSortedWord = sortCharsInString(word)
        anagrams.set(lexiSortedWord, [...anagrams.get(lexiSortedWord) ?? [], word])
    }
    
    return [...anagrams.values()]
}

function sortCharsInString(word: string) : string {
    return word.split('').sort().join('');
}

console.log(findAnagrams(['aba', 'baa', 'aab', 'ab', 'caba', 'caca', 'baca']))