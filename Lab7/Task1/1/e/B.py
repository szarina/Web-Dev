def power(a,n):
    res = 1
    for i in range(n):
        res *= a
    return  res

x = input().split()
a = float(x[0])
n = int(x[1])
print(power(a,n))
