n = int(input())
scores = list(map(int, input().split()))


# Тут решение без создания вспомогательных списков
not_null_idx = 0
for i in range (0, n):
    if (scores[i] != 0):
        scores[not_null_idx] = scores[i]
        not_null_idx += 1
for i in range(not_null_idx, n):
    scores[i] = 0

print(' '.join(map(str, scores)))