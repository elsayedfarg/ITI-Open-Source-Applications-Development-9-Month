############################## Task 1 ##############################
# num1 = int(input("Enter the first number: "))
# num2 = int(input("Enter the second number: "))

# operation = input("Enter the operation: ")

# match operation:
#     case "+":
#         print(num1 + num2)
#     case "-":
#         print(num1 - num2)
#     case "*":
#         print(num1 * num2)
#     case _:
#         print("Nothing")

############################## Task 2 ##############################
# hWage = float(input("Enter the hourly wage: "))
# hoursWorked = int(input("Enter the hours worked: "))
# dayOfTheWeek = input("Enter the day of the week: ")

# if dayOfTheWeek == "Sunday":
#     dWages = (hWage * 2) * hoursWorked
# else:
#     dWages = hWage * hoursWorked

# print("Daily wages:", dWages, "euros")

############################## Task 3 ##############################
# num = int(input("Enter a number: "))

# if num % 3 == 0 and num % 5 == 0:
#     print("FizzBuzz")
# elif num % 3 == 0:
#     print("Fizz")
# elif num % 5 == 0:
#     print("Buzz")

############################## Task 4 ##############################
# attempts = 0

# while True:
#     pin = int(input("Enter a PIN: "))
    
#     if pin == 4321:
#         break
#     else:
#         attempts += 1
#         print(f"Wrong")

# if attempts == 0:
#     print("Correct! It only took you one single attempt!")
# else:
#     print("Correct!")
#     print("It took you", attempts + 1, "attempts")

############################## Task 5 ##############################
def reverse_string(s):
    return s[::-1]

str=input("Enter a string: ")
print(reverse_string(str))

############################## Task 6 ##############################
def greatest_number(a, b, c):
    greatest = a
    
    if b > greatest:
        greatest = b
        
    if c > greatest:
        greatest = c
        
    return greatest

print(greatest_number(5, 9, 3))

############################## Task 7 ##############################
def sum_series(n):
    total = 0
    
    for i in range(1, n + 1):
        if i % 2 == 0:
            total -= i
        else:
            total += i
            
    return total

print(sum_series(5))

############################## Task 8 ##############################
def factorial(n):
    if(n<=0):
        return -1
    mul=1
    for i in range(1,n+1):
        mul*=i
    return mul

print(factorial(6))