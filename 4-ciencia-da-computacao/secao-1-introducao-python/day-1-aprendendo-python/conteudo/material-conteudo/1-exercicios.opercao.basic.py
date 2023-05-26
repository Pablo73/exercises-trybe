# Exercício 1:
# No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. 
# Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, 
#divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
a= 10
b = 5
10 + 5
10 - 5
10 * 5
10 / 5
10 // 5
10 ** 5
10 % 5

# Exercício 2:
# Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? 
# E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem 
# os respectivos resultados das contas. Depois, imprima cada uma delas.
hours = 6
minutes = hours * 60
secound = minutes * 60
minutes
secound

# Exercício 3:
# Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
print(minutes, hours);

# Exercício 4:
# Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um 
# esconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para 
# cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma 
# expressão que receba o custo total e a imprima.

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
cost

