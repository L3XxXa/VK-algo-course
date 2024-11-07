def merge_sort(arr):
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    return merge(merge_sort(arr[0:mid]), merge_sort(arr[mid:len(arr)]))

def merge(a, b):
    res = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            res.append(a[i])
            i += 1
        else:
            res.append(b[j])
            j += 1

    while i < len(a):
        res.append(a[i]) 
        i += 1
    while j < len(b):
        res.append(b[j])
        j += 1
    return res

n = int(input())
arr = list(map(int, input().split()))
print(' '.join(map(str, merge_sort(arr))))

