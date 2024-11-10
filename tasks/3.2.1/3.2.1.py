def find_more_half(arr):
    map = {}
    for i in range (len(arr)):
        if (arr[i] in map):
            map[arr[i]] += 1
            if (map[arr[i]] > len(arr) / 2):
                return arr[i]
        else:
            map[arr[i]] = 1
    return -1

n = int(input())
arr = list(map(int, input().split()))
print(find_more_half(arr))