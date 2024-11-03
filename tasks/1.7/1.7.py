n = int(input())
a = list(map(int, input().split()))

stack = []

for i in range(0, n):
    if(a[i] % 2 == 0):
        stack.append(a[i])
if(len(stack) == 0):
    print(-1)
else: 
    print(stack[len(stack) - 1])