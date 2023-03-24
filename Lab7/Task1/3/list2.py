#Count events

def count_evens(nums):
    counter = 0
    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            counter += 1
    return counter


#big diff


def big_diff(nums):
    largest = max(nums)
    smallest = min(nums)

    return largest - smallest


#Centered average

def centered_average(nums):
    sum = 0
    largest = nums.index(max(nums))
    smallest = nums.index(min(nums))
    if largest == smallest:
        for i in range(len(nums)):
            if nums[i] == nums[smallest]:
                largest = i
    for i in range(len(nums)):
        if i != largest and i != smallest:
            sum = sum + nums[i]
    total = len(nums) - 2
    if total > 0:
        return sum / total
    else:
        return sum


#Sum 13

def sum13(nums):
    sum = 0
    for i in range(len(nums)):
        if nums[i] != 13:
            sum += nums[i]
        elif nums[i] == 13 and i < len(nums) - 1:
            nums[i] = 0;
            nums[i + 1] = 0

    return sum


#Sum 67

def sum67(nums):
    sum = 0
    i = 0
    while i < len(nums):
        if nums[i] == 6:
            while nums[i] != 7:
                i += 1
            i += 1
        if i < len(nums) and nums[i] != 6:
            sum += nums[i]
            i += 1
    return sum


#has 22


def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True

    return False



