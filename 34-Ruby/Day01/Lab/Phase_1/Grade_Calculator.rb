puts "How many scores? "
numOfScores=gets.to_i

if numOfScores <= 0
  puts "No scores entered. Exiting."
  exit
end

i=1
totalScore=0.0

highestScore=0
lowestScore=100
while i<=numOfScores
  puts "Enter score #{i}:"
  score=gets.to_i

  while score < 0 || score > 100
    puts "Invalid score. Enter a value between 0 and 100:"
    score = gets.to_i
  end

  if score >= highestScore
    highestScore = score
  end

  if score <= lowestScore
    lowestScore = score
  end

  totalScore+=score
  i+=1
end

avgScore=totalScore/numOfScores

if avgScore >=90 and avgScore <=100
  letter='A'
elsif avgScore >=80 and avgScore <=89
  letter='B'
elsif avgScore >=70 and avgScore <=79
  letter='C'
elsif avgScore >=60 and avgScore <=69
  letter='D'
else
  letter='F'
end

puts "\nResults:"
puts "Avg : #{avgScore}"
puts "Grade : #{letter}"
puts "Highest : #{highestScore}"
puts "Lowest : #{lowestScore}"
