#Exercicio 1
'Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar curl -o countries.txt '
https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries

#Exercicio 2
'Mostre todo o conteúdo do arquivo countries.txt na tela.'
cat countries.txt

#Exercicio 3
'Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.'
less countries.txt 

#Exercicio 4
'Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.'
less countries.txt 
/Zambia

#Exercicio 5
'Busque por Brazil no countries.txt.'
grep Brazil countries.txt 

#Exercicio 6
'Busque novamente por brazil, mas agora utilizando o lower case.'
grep -i brazil countries.txt

#Exercicio 7
'Busque pelas frases que não contenham a palavra fox.'
grep -v 'fox' phrases.txt

#Exercicio 8
'Conte o número de palavras do arquivo phrases.txt.'
cat phrases.txt | wc -w

#Exercicio 9
'Conte o número de linhas do arquivo phrases.txt.'
cat phrases.txt | wc -l

#Exercicio 10
'Crie os arquivos empty.tbt e empty.pdf.'
touch empty.tbt empty.pdf

#Exercicio 11
'Liste todos os arquivos do diretório unix_tests.'
ls -a

#Exercicio 12
'Liste todos os arquivos que terminem com txt.'
ls -a *txt

#Exercicio 13
'Liste todos os arquivos que terminem com tbt ou txt.'
ls -a *tbt  *txt

#Exercicio 14
'Acesse o manual do comando ls.'
man ls

