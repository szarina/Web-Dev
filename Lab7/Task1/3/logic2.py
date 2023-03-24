# make bricks

def make_bricks(small, big, goal):
    if goal > small + big * 5:
        return False
    if goal % 5 > small:
        return False
    else:
        return True


# lone sum

def lone_sum(a, b, c):
    if a == b and b == c:
        return 0
    if a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a
    else:
        return a + b + c


# lucky sum

def lucky_sum(a, b, c):
    if b == 13 and c == 13:
        return a
    if a == 13:
        return 0

    if b == 13:
        if a != 13 and c != 13:
            return a
    if c == 13:
        return a + b
    else:
        return a + b + c


# No teen sum

def fix_teen(n):
    teen = False
    if 13 <= n < 15:
        teen = True
    elif 16 < n <= 19:
        teen = True
    else:
        teen = False
    return teen


def no_teen_sum(a, b, c):
    if fix_teen(a):
        a = 0
    if fix_teen(b):
        b = 0
    if fix_teen(c):
        c = 0
    return a + b + c


#Round sum

def round10(num):
    if num % 10 >= 5:
        res = (num / 10 + 1) * 10
    else:
        res = (num / 10) * 10

    return res


def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)


#Close far

def close_far(a, b, c):
    ab = abs(a - b)
    bc = abs(b - c)
    ac = abs(a - c)

    if ((ab >= 2 and bc >= 2) or
            (ab >= 2 and ac >= 2) or
            (bc >= 2 and ac >= 2)):
        return True
    else:
        return False


#Make chocolate
def make_chocolate(small, big, goal):

    total = small + (5 * big)

    if total == goal:
        return small

    if total < goal:
        return -1

    if big * 5 < goal and (goal - big * 5) <= small:
        return goal - (big * 5)

    else:
        rem = goal % 5
        if rem == small:
            return small
        if rem > small:
            return -1
        else:
            return rem
