# Double char

def double_char(line):
    result = ""
    for i in range(len(line)):
        result = result + line[i]
        result = result + line[i]

    return result


# Count hi

def count_hi(str):
    cnt = 0
    for i in range(len(str)):
        if str[i] == 'h' and str[i + 1] == 'i':
            cnt += 1
    return cnt


# Cat dog

def cat_dog(str):
    return str.count("cat") == str.count("dog")


# Count code

def count_code(str):
    counter = 0
    for i in range(len(str) - 3):
        if str[i] == 'c' and str[i + 1] == 'o' and str[i + 3] == 'e':
            counter += 1
    return counter


# End other

def end_other(a, b):
    a1 = a.lower()
    b1 = b.lower()

    return a1.endswith(b1) or b1.endswith(a1)


# Xyz there

def xyz_there(scdtr):
    return str.count('.xyz') != str.count('xyz')
