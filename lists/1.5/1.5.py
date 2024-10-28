n = int(input())
arr = list(map(int, input().split()))
min_div = 100000000 #ограничения на числа почему-то нет
min_a = -1
min_b = -1
for i in range(n - 1, 0, -1):
    if(arr[i] - arr[i-1] < min_div):
        min_div = arr[i] - arr[i-1] 
        min_a = arr[i - 1]
        min_b = arr[i]

print(f'{min_a} {min_b}')