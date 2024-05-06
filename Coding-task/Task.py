# 1. Odd or Even 
# n=int(input())
# if(n%2==0):
#     print("Even")
# else:
#     print("Odd")

# 2.Grading system
# n=int(input())
# if(100>=n>=90):
#     print("Grade A")
# elif(89>=n>=80):
#     print("Grade B")
# elif(79>=n>=70):
#     print("Grade C")
# elif(69>=n>=60):
#     print("Grade D")
# else:
#     print("Grade F")

# 3.Age Group Categorizer

# n=int(input())
# if(2>=n>=0):
#     print("Infant")
# elif(12>=n>=3):
#     print("Child")
# elif(19>=n>=13):
#     print("Teenager")
# elif(65>=n>=20):
#     print("Adult")
# else:
#     print("Senior")

# 4.Temperature Adviser

# n=int(input())
# if(n<10):
#     print("Too cold! Best to stay indoors.")
# elif(19>=n>=10):
#     print("Maybe wear a jacket?")
# elif(30>=n>=20):
#     print("Perfect for a picnic")
# else:
#     print("It's hot. Let's go swimming!")

# 5.Maximum of Three numbers

# a=int(input())
# b=int(input())
# c=int(input())
# if(a>b):
#     max=a
# else:
#     max=b
# if(max>c):
#     print(max)
# else:
#     print(c)

# 6.Sort Three Numbers

# a=int(input())
# b=int(input())
# c=int(input())
# if(a>b):
#     max1=a
#     max2=b
# else:
#     max1=b
#     max2=a
# if(max2>c):
#     print(c,max2,max1)
# elif(max2<c):
#     if(max1>c):
#         print(max2,c,max1)
#     else:
#         print(max2)


# 7.N times "Hello World"
# n=int(input())
# word=input()
# print(n*word)

# 8.print "*" for n times

# n=int(input())
# print(n*"*")

# 9.First n Natural Numbers
# n=int(input())
# for i in range(1,n):
#     print(i)

# 10. All evens Till n
# n=int(input())
# for i in range(1,n):
#     if(i%2==0):
#         print(i)


# 11. All squares Till N
# n=int(input())
# i=1
# while i**2<n:
#     print(i**2)
#     i=i+1 

# 12.First N Even numbers
# n=int(input())
# i=1
# while i<=n:
#     print(i*2)
#     i=i+1

# 13. First N odd numbers
# n=int(input())
# i=1
# count=0
# while i>0:
#     if(count<n):
#         count=count+1
#         print(i)
#     else:
#         break
#     i=i+2



#14. All Odds Till n
# n=int(input())
# for i in range(1,n):
#     if(i%2!=0):
#         print(i)

# 14.All n square numbers
# n=int(input())
# for i in range(1,n+1):
#     print(i**2)

# 15.Multiplication Table of n
# n=int(input())
# for i in range(1,11):
#     print(n,"*",i," = ",n*i)

# # 16.Factors of a Number
# n=int(input())
# for i in range()

# arr = [10, 2, 3, 3, 5, 1, 6, 7, 7, 9, 9, 6, 6]

# # Count the occurrences of each number in the list
# counts = Counter(arr)

# # Initialize an empty array to store the counts
# count_array = []

# # Append the counts to the array
# for number in sorted(counts.keys()):  # Sorting keys for consistent order
#     count_array.append(counts[number])

# print(count_array)

# arr = [10, 2, 3, 3, 5, 1, 6, 7, 7, 9, 9, 6, 6]

# Initialize an empty dictionary to store the counts
# counts = {}

# Count the occurrences of each number
# for number in arr:
#     if number in counts:
#         counts[number] += 1
#     else:
#         counts[number] = 1

# Initialize an empty array to store the counts
# count_array = []

# Append the counts to the array
# for number in sorted(counts.keys()):  # Sorting keys for consistent order
#     count_array.append(counts[number])

# print(count_array)
# print(counts)
# print(sorted(counts.keys()))



# n=int(input())
# # while(k<=n):
# j=1
# while(j<=n):
#     i=1
#     count = 0
#     while(i<=j):
# #   for (i = 1; i <= j; i++) {
#         if (j % i == 0) :
#             count = count + 1
#         i=i+1
#     if (count == 2) :
#         print(j,end=" ")
#     j = j + 1
#     # k=k+1

n=int(input())
# while(k<=n):
j=1
count2=0
while(j>0):
    i=1
    count = 0
    while(i<=j):
#   for (i = 1; i <= j; i++) {
        if (j % i == 0) :
            count = count + 1
        i=i+1
    if (count == 2) :
        print(j,end=" ")
        count2=count2+1
    if(count2==n):
        break
    j = j + 1
    # k=k+1