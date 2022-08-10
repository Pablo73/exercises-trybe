'Liste todos os processos;'
'Agora use o comando sleep 30 & ;'
# Exercicio 1
'Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);'
ctrl Z

# Exercicio 2
'Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;'
ctrl C
bg

# Exercicio 3
'Crie um processo em background que rode o comando sleep por 300 segundos.'
sleep 300 &

# Exercicio 4
'Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.'
kill 55356
kill 55363

# Exercicio 5
Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.


# Exercicio 6
'Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.'


# Exercicio 7
Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.


# Exercicio 8
'Retome a execução do processo sleep 100 em background com o comando bg.'


# Exercicio 9
'Termine a execução de todos os processos sleep.'



