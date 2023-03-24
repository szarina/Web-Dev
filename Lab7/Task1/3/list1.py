#First last 6
def first_last6(nums):
    if nums[0] == 6 or nums[len(nums) - 1] == 6:
        return True
    return False


#Same first last
def same_first_last(nums):
    if len(nums) >= 1:
        if nums[0] == nums[len(nums) - 1]:
            return True

    return False

#Make pi

def make_pi():
    array = [3, 1, 4]
    return array


#Common end


def common_end(a, b):
    if a[0] == b[0] or a[len(a) - 1] == b[len(b) - 1]:
        return True
    return False


#Sum3
def sum3(nums):
    return nums[0] + nums[1] + nums[2]


#Rotate left
def rotate_left3(nums):
    return nums[1:] + nums[0:1]

#Reverse

def reverse3(nums):
    return nums[::-1]


#Max

def max_end3(nums):
    if nums[0] > nums[2]:
        return [nums[0], nums[0], nums[0]]
    else:
        return [nums[2], nums[2], nums[2]]


#Sum2

def sum2(nums):
    if len(nums) == 0:
        return 0
    elif len(nums) < 2:
        return nums[0]

    else:
        return nums[0] + nums[1]


#Middle way

def middle_way(a, b):
    return [a[1], b[1]]


#make ends

def make_ends(nums):
    return [nums[0], nums[len(nums) - 1]]

#has23

def has23(nums):
    if nums[0] == 2 or nums[0] == 3:
        return True
    if nums[1] == 2 or nums[1] == 3:
        return True
    else:
        return False
