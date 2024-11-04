def binary_search(arr, element):
    l = 0
    r = len(arr) - 1
    if (arr[r] < element):
        return r + 1
    if (arr[l] > element):
        return 0
    while (l <= r):
        middle = (l + r) // 2
        if (arr[middle] > element):
            r = middle - 1
        elif (arr[middle] < element):
            l = middle + 1
        else: 
            return middle
    return l

n = int(input())
arr = list(map(int, input().split()))
element = int(input())
print(binary_search(arr, element))