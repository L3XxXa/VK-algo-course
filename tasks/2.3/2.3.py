def exponential_search(arr, element):
    bound = 1
    last_item = len(arr) - 1
    while bound < last_item and arr[bound] < element:
        if arr[bound] == element:
            return [bound, bound * 2]
        bound *= 2
        if (bound > last_item):
            return [bound // 2, last_item]
    return [bound // 2, bound]

n = int(input())
arr = list(map(int, input().split()))
element = int(input())
res = exponential_search(arr, element)
print(f"{res[0]} {res[1]}")
