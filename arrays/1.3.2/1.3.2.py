a = int(input())
r = list(map(int, input().split()))
element = int(input())

result = []
for i in range(a):
    if(r[i] != element):
        result.append(r[i])
print(*result)