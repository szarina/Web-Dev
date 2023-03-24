def front_back(str2):
    if len(str2) <= 1:
        return str2

    mid = str2[1:len(str2) - 1]
    return str2[len(str2) - 1] + mid + str2[0]