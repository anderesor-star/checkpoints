import math

def fizzbuzz (numbers):
    for number in range(1, numbers +1):
        if number % 3 == 0 and number % 5 == 0:
            print('Fizzbuzz')
        elif number % 5 == 0:
            print('Buzz')
        elif number % 3 == 0:
            print('Fizz')
        else:
            print(number)

fizzbuzz(100)