import math

def fizzbuzz (numbers):
    for number in range(1, numbers +1):
        if number % 3 == 0 and number % 5 == 0:
            print('Fizzbuzz')
            continue
        elif number % 5 == 0:
            print('Buzz')
            continue
        elif number % 3 == 0:
            print('Fizz')
            continue
        else:
            print(number)

fizzbuzz(100)