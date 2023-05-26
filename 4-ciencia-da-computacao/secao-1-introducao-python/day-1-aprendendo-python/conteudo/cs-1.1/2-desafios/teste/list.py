my_list = [1, 2, 3, 4, 5]

print(my_list)
print(my_list[0])
print(my_list[-1])
print(my_list[-2])

my_list.append(20)
print(my_list)

my_list.pop()
print("pop", my_list)

# remove o elemento que busquei
my_list.append(25)
my_list.remove(25)
print("remove(25)", my_list)