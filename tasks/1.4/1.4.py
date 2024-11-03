n = int(input())
result = list(map(int, input().split()))

res = -1

for i in range(n):
    if res < result[i]:
        res = result[i]
print(res)