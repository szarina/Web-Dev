def min2 (a,b):
    if (a  < b):
        return a
    return  b
def min4 (a,b,c,d):
    return min2(a, min2(b, min2(c,d)))
a,b,c,d =map(int,input().split())
print(min4(a,b, c, d))