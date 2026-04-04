#================================ Task 1 ================================

evenSet=set()
for i in range (1,11):
    if(i%2==0):
        evenSet.add(i)

print(f"Original set: {evenSet}")

evenSet.add(12)
print(f"After adding 12: {evenSet}")

evenSet.remove(4)
print(f"After removing 4: {evenSet}")

num = 6
print(f"Does {num} exist in the set => {'Yes' if num in evenSet else 'No'}")

anotherSet = {2, 4, 6, 8, 10}
print(f"Union with {anotherSet}: {evenSet.union(anotherSet)}")
print(f"Intersection with {anotherSet}: {evenSet.intersection(anotherSet)}")

#================================ Task 2 ================================

uniqueVisitors=set()

uniqueVisitors.add("visitor1")
uniqueVisitors.add("visitor2")
uniqueVisitors.add("visitor3")

print(f"Current visitors: {uniqueVisitors}")

visitor = "visitor2"
if visitor in uniqueVisitors:
    print(f"{visitor} has already visited.")
else:
    print(f"{visitor} is a new visitor.")

uniqueVisitors.remove("visitor2")
print(f"Visitors after removing visitor2: {uniqueVisitors}")

#================================ Task 3 ================================

common_passwords = {
    "123456", "password", "123456789", "12345", "12345678", "qwerty",
    "1234567", "111111", "123123", "abc123", "password1", "1234"
}

def checkPassword(password):
    if password in common_passwords:
        print("Weak password")
    else:
        print("Good password")

testPassword=input("Enter password: ")
checkPassword(testPassword)