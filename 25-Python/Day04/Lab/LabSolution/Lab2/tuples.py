#================================ Task 1 ================================

fruits = ("orange", "apple", "banana", "mango", "kiwi")

print(f"First fruit is: {fruits[0]}")
print(f"Last fruit is: {fruits[-1]}")

firstThreeFruits = fruits[0:3]
print(f"First three fruits: {firstThreeFruits}")

fruitToCount = "apple"
print(f"'{fruitToCount}' occurs {fruits.count(fruitToCount)} time(s)")


try:
    fruits[0] = "pear"
except TypeError as e:
    print(f"Cannot modify tuple: {e}")

#================================ Task 2 ================================

# prices=(100,50,22,32,1039,4,5)

highestPrice = prices[0]
for price in prices:
    if price > highestPrice:
        highestPrice = price
print(f"Highest Price: {highestPrice}")

lowestPrice = prices[0]
for price in prices:
    if price < lowestPrice:
        lowestPrice = price
print(f"Lowest Price: {lowestPrice}")

averagePrice = sum(prices) / len(prices)
print(f"Average Price: {averagePrice:.2f}")