import math
def max_product_subsequence(n, arr, K):
    max_product = 1
    if K <= 0:
        return 0
    if K == 1:
        return max(arr)
    if K == n:
        return math.prod(arr)
    for i in range(n - K + 1):
        product = 1
        for j in range(K):
            product *= arr[i + j]
        max_product = max(max_product, product)
    return max_product
n = int(input())
arr = list(map(int, input().split()))
K = int(input())
print(max_product_subsequence(n, arr, K))