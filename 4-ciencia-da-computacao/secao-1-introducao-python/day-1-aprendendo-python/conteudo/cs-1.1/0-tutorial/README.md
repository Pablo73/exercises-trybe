# Python

![Alt text](diagrama.png)

## Abrir Repl (Terminal Python)

> python3

## Ativar ambiente virtual

> python3 -m venv .venv && source .venv/bin/activate

## Variáveis e Tipos de Dados

```python
x = 10 # int
y = 3.14 # float
name = "John Doe" # string
is_true = True # boolean

# Tipos de dados em Python
a = float(22/5)
b = int(4.5)
c = int(3.9)
d = int(0xff563)
e = float(int(3.9))
f = int(float(3.9))
g = int(float(3))
h = round(3.9)
i = round(3)
j = int(round(3.9))
print(a,b,c,d,e,f,g,h,i,j)
```

## Por trás, tudo é Objeto

### Boolean

True.real

### Números inteiros

x = 10
print(x.bit_length())

### Números de ponto flutuante

y = 3.14
print(y.is_integer())

### Strings

name = "John Doe"
print(name.upper())
print(name.lower())

a = 'Uma String com aspas Simples'
b = "Uma String com aspas Duplas"
c = """Uma String com aspas Triplas"""
print(a + "\n" + b + "\n" + c)

## Operadores Aritméticos

```python
result = 10 + 5
result = 10 - 5
result = 10 * 5
result = 10 / 5
result = 10 % 3
result = 10 ** 2
```

## Estruturas Condicionais (if-else)

### exemplo 1

```python
x = 10

if x == 1:
    print("x é igual a 1")
elif x == 2:
    print("x é igual a 2")
else:
    print("x não é nem 1 nem 2")

x = 10
positivo_ou_negativo = "positivo" if x >= 0 else "negativo"
print(positivo_ou_negativo)
```

### exemplo 2

```python
idade = int(input("Voce tem quantos anos? "))

if idade == 18:
    print("Voce tem 18 anos")
elif idade > 18:
    print("Maior de 18 anos")
else:
    print("Menor de idade")
```

## Estruturas de Repetição (while, for)

```python
x = 0

while x < 10:
    print("Valor de x é:", x)
    x += 1

for i in [1, 2, 3]:
    print(i)
```

## range

```python
numbers = range(1, 11)  # Cria um range de 1 a 10 (inclusive)
print(list(numbers))

even_numbers = range(2, 11, 2)  # Cria um range de números pares de 2 a 10 (inclusive)
print(list(even_numbers))  # Converte o range para uma lista: [2, 4, 6, 8, 10]

letters = list(range(ord('a'), ord('z')+1))  # Cria um range de valores ASCII correspondendo às letras minúsculas de 'a' a 'z'
letters = [chr(letter) for letter in letters]  # Converte os valores ASCII de volta para caracteres
print(letters)  
```

## Listas (Arrays)

```python
my_list = [1, 2, 3, 4, 5]
print(my_list[0])
print(my_list[2])
print(my_list[-1])
print(my_list[x[1:2]])
my_list.append(6)
my_list.pop()
my_list.insert(0, 0)
my_list.remove(3)
print(len(my_list))
```

## Manipulando String

string_hello = "Hello"
name = "Will"
age = 33

print(string_hello)
print(string_hello[0])
print(len(string_hello))
print(string_hello.upper())
print(string_hello.lower())
print(string_hello.capitalize())

print(f"{string_hello}, my name is {name} and I'm {age} years old.")

## Funções

```python
def greet(name):
    print("Hello,", name)

greet("John")
greet("Jane")

def add_numbers(a, b):
    return a + b

result = add_numbers(2, 3)
print(result)
```

## Classes e Objetos

```python
class Cat:
    def __init__(self, name):
        self.name = name

    def meow(self):
        print("Meow")

cat = Cat("Whiskers")
print(cat.name)
cat.meow()
```

## Herança

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print("Woof")

class Cat(Animal):
    def speak(self):
        print("Meow")

dog = Dog("Buddy")
dog.speak()

cat = Cat("Whiskers")
cat.speak()
```

## Regex

```python
import re

match = re.search(r'a', 'aaa')
if match:
    print('Encontrado')
else:
    print('Não encontrado')
```

## Manipulando dicionários

```python
my_dict = {'a': 10, 'b': 5}
print(my_dict['a'])  # Acessando o valor associado à chave 'a'
print(my_dict['b'])  # Acessando o valor associado à chave 'b'

print(list(my_dict.keys()))    # Obtendo uma lista das chaves do dicionário
print(list(my_dict.values()))  # Obtendo uma lista dos valores do dicionário

other_dict = {'c': 15, 'd': 20}
merged_dict = {**my_dict, **other_dict}  # Mesclando dois dicionários usando o operador ** (unpacking)
print(merged_dict)
```

## List Comprehension

```python
# Blocos (estilo Arrow function) com list comprehension
items = [1, 2, 3]
[print(item) for item in items]
```
