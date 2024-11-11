a = input()

table = {}

for i in range (len(a)):
    if (a[i] in table):
        table[a[i]] += 1
    else:
        table[a[i]] = 1

max = 0
for i in table:
    if (table[i] > max):
        max = table[i]
print(max)