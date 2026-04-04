############################## Task 1 ##############################
# mutable
square_numbers={
    i : i**2 for i in range(1,6)
}

for key, value in square_numbers.items():
    print(f"{key}: {value}")

square_numbers[6] = 36
print("\nAfter adding 6:", square_numbers)

if 4 in square_numbers:
    print("Key 4 exists in the dictionary.")
else:
    print("Key 4 does not exist.")

############################## Task 2 ##############################
# student_grades={
#     "sayed": [85, 90, 78],
#     "ahmed": [92, 88, 95],
#     "mohamed": [70, 75, 80]
# }

# avgs={}
# for s,g in student_grades.items():
#     avgs[s]=sum(g)/len(g)
#     print(f"{s}'s average: {avgs[s]:.2f}")

# # to find the key with the largest value in the dictionary
# #dictionary ,dictionary.get
# highest_student=max(avgs,key=avgs.get)

# print(f"Student with highest average: {highest_student} ({avgs[highest_student]:.2f})")

############################## Task 3 ##############################
# cart = {}

# cart["Apple"] = 0.99
# cart["Bread"] = 2.50
# cart["Milk"] = 1.75

# total = sum(cart.values())
# print("Items in cart:", cart)
# print("Total price:", total)

############################## Task 4 ##############################
# employees = [
#     {"name": "sayed", "age": 22, "department": "HR"},
#     {"name": "ahmed", "age": 25, "department": "IT"},
#     {"name": "mohamed", "age": 28, "department": "HR"},
#     {"name": "ali", "age": 35, "department": "IT"}
# ]

# hr_employees = [e for e in employees if e["department"] == "HR"]
# print("HR employees:", hr_employees)

# average_age = sum(e["age"] for e in employees) / len(employees)
# print("Average age of employees:", average_age)