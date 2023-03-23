x = int(input())
# if x != 1:
# cnt = 0
# res = 1
#
# for i in range(2, int(x/2)+1):
#         while x % i == 0:
#             cnt += 1
#             x = int(x / i)
#
#         if cnt!= 0:
#             res = res * (cnt +1)
#             cnt = 0
# print(res)
# # else:
# # print(1)
if x != 1:
    cnt = 2
    for i in range(2, int(x/2)+1):
        if x % i == 0:
            cnt += 1
    print(cnt)
else:
    print(1)
