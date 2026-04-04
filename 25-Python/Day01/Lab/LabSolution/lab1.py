################## 1-
full_name = "Sayed Mohamed"
print(f"Hello {full_name}")

################## 2-
fav_number=5
message=f"my favorite number is {str(fav_number)}"
print(message)

################## 3-
import math
radius = 5 
volume = (4/3) * math.pi * radius**3 
print(f"The volume of a sphere with radius {radius} cm is {volume:.2f} cm³.")

################## 4-
x = 27
y = 15

print(f"{x} + {y} = {x + y}")
print(f"{x} - {y} = {x - y}")
print(f"{x} * {y} = {x * y}")
print(f"{x} / {y} = {x / y}")

################## 5-
num = int(input("Enter a number: "))

if num % 2 == 0:
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")

################## 6-
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))

if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3

print(f"The largest number is {largest}.")

################## 7-
temp = float(input("Enter the temperature in celsius"))

fahrenheit = (9/5) * temp + 32

print(f"{temp}°C is equal to {fahrenheit}°F.")

################## 8-
P = float(input("Enter the principal amount (P): "))
R = float(input("Enter the annual interest rate (R) in %: "))
T = float(input("Enter the time period (T) in years: "))

SI = (P * R * T) / 100

print(f"The Simple Interest is: {SI}")

# ################## 9-

days = int(input("How many days? "))

seconds = days * 24 * 60 * 60 

print(f"Seconds in {days} day(s): {seconds}")

# ################## 10-
num = int(input("Enter a number: "))
flag = True

if num <= 1:
    flag = False
else:
    for i in range(2, (num // 2) + 1):
        if num % i == 0:
            flag = False
            break

if flag:
    print(f"{num} is a prime number.")
else:
    print(f"{num} is not a prime number.")

# ################## 11-
total_students = int(input("How many students on the course? "))
group_size = int(input("Desired group size? "))

groups = total_students // group_size 

# if there are any students without group
if total_students % group_size != 0:
    groups += 1

print(f"Number of groups formed: {groups}")

# ################## 12-
myStr=input("Enter any string: ")

counter = myStr.count('iti')

print(counter)

# ################## 13-
word = input("Enter a word: ")

vowels = "aeiouAEIOU"

short_word = ""
for char in word:
    if char not in vowels:
        short_word += char

print(f"Brief version without vowels: {short_word}")

word = input("Enter a word: ")
short_word = "".join([c for c in word if c not in "aeiouAEIOU"])
print(f"Brief version without vowels: {short_word}")

# ################## 14-
text = input("Enter a string: ")
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"The number of vowels in the string is: {count}")