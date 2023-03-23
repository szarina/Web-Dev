N = int(input())
a = list(map(int,input().split()))
ok = False
for i in range (1,len(a)):
    if(a[i]  * a[i-1] >= 0):
        ok = True
        break

if(ok):
    print("YES")
else:
    print("NO")