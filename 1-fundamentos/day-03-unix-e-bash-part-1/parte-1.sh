# Exercicio 1
'Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.'
mkdir unix_tests
cd unix_tests

# Exercicio 2
'Crie um arquivo de texto com o nome trybe.txt.'
touch trybe.txt

# Exercicio 3
'Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.'
cp trybe.txt trybe_backup.txt

# Exercicio 4
'Renomeie o arquivo trybe.txt.'
mv trybe.txt trybe_1.txt

# Exercicio 5
'Dentro de unix_tests, crie um novo diretório chamado backup.'
mkdir backup

# Exercicio 6
'Mova o arquivo trybe_backup.txt para o diretório backup.'
mv trybe_backup.txt ./backup

# Exercicio 7
'Dentro de unix_tests, crie um novo diretório chamado backup2.'
mkdir backup2

# Exercicio 8
'Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.'
cd backup
mv trybe_backup.txt ../backup2

# Exercicio 9
'Apague a pasta backup.'
rmdir backup

# Exercicio 10
'Renomeie a pasta backup2 para backup.'
mv backup2 backup

# Exercicio 11
'Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.'
pwd
ls -a

# Exercicio 12
'Apague o diretório backup.'
cd backup
rm trybe_backup.txt
rmdir backup
or
rm -rf backup

# Exercicio 13
'Limpe o terminal.'
clear

# Exercicio 14
'Mostre na tela as 5 primeiras skills do arquivo skills.txt.'
head -5 skills.txt 

# Exercicio 15
'Mostre na tela as 4 últimas skills do arquivo skills.txt.'
tail -4 skills.txt

# Exercicio 16
'Apague todos os arquivos que terminem em .txt.'
rm skills.txt
rm trybe_1.txt

