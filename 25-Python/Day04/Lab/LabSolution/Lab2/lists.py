#================================ Task 5 ================================
# height=int(input("Enter the height of the pyramid: "))

# temp=1
# while height:
#     for row in range(1,height):
#         print(" ",end="")
#     for row in range(0,temp):
#         print("*",end="")
#     print()#new line
#     height-=1
#     temp+=1

#================================ Task 6 ================================
values=[]
for i in range(1,11):
    values.append(i)

print(f"The first item: {values[0]}")
print(f"The last item: {values[-1]}")

values.reverse()

print(f"List after reverse: {values}")

print(f"List sum: {sum(values)}")

#================================ Task 7 ================================
value=input("Enter a string: ")
upper_value = value.upper()
print(f"Upper case string: {upper_value}")

vowels="aeiou"
count=0
for ch in value.lower():
    if ch in vowels:
        count+=1
print(f"Number of vowels: {count}")

reversed_value = value[::-1]
print(f"Reversed string: {reversed_value}")

if value.lower()==reversed_value.lower():
    print("The string is a palindrome")
else:
    print("The string is not a palindrome")

#================================ Task 8 ================================
value = int(input("Enter a number: "))

print(f"\nMul table for {value}:")
for i in range(1, 13):
    print(f"{i} X {value} = {i * value}")