def array_front9(nums):
    front = nums[:4]
    for i in front:
        if i==9:
            return True
    return False