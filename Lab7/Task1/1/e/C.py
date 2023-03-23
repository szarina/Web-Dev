def xor(a,b):
    if (a-b ==1 or b-a ==1):
        return 1
    return 0
a,b = map(int,input().split())
print(xor(a,b))