x = int(input())
res = 0
degree = 0
while(x>0):
    res = res + pow(2,degree)*(x%10)
    x = int(x/10)
    degree+=1
print(res)

