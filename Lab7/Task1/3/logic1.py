# Cigar party

def cigar_party(cigars, is_weekend):
    if is_weekend:
        if cigars >= 40:
            return True
        else:
            return False
    else:
        if 40 <= cigars <= 60:
            return True
        else:
            return False


# Date fashion

def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 0


# Squirrel play

def squirrel_play(temp, is_summer):
    if is_summer:
        if temp >= 60 and temp <= 100:
            return True
        else:
            return False
    else:
        if temp >= 60 and temp <= 90:
            return True
        else:
            return False


# caught speeding


def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed <= 65:
            return 0
        elif 66 <= speed <= 85:
            return 1
        elif speed >= 86:
            return 2
    else:
        if speed <= 60:
            return 0
        elif 61 <= speed <= 80:
            return 1
        elif speed >= 81:
            return 2


# sorta sum

def sorta_sum(a, b):
    if 10 <= (a + b) <= 19:
        return 20
    else:
        return a + b


# Alarm clock

def alarm_clock(day, vacation):
    if vacation:
        if 1 <= day < 6:
            return "10:00"
        else:
            return "off"

    else:
        if 1 <= day < 6:
            return "7:00"
        else:
            return "10:00"


# love 6

def love6(a, b):
    if a == 6 or b == 6:
        return True
    if a + b == 6:
        return True
    if abs(a - b) == 6 or abs(b - a) == 6:
        return True
    else:
        return False


# in1to10

def in1to10(n, outside_mode):
    if outside_mode:
        if n <= 1 or n >= 10:
            return True
        else:
            return False
    else:
        if 1 <= n <= 10:
            return True
        else:
            return False


# near ten

def near_ten(num):
    rem = num % 10
    if 0 <= rem <= 2:
        return True
    elif 8 <= rem <= 9:
        return True
    else:
        return False
