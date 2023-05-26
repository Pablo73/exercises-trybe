import random

from papel import papel
from pedra import pedra
from tesoura import tesoura


def resultado(user, computer):
    if computer == user:
        return "empataram"

    if [computer, user] == [0, 2]:
        return "Você perdeu, pedra quebra tesoura."

    if [computer, user] == [1, 0]:
        return "Você perdeu, papel enrola a pedra!"

    if [computer, user] == [2, 1]:
        return "Você perdeu, tesoura corta papel!"

    return "Você venceu"


def game(user):
    if not user.isdigit():
        return "Digito incorreto"
    user = int(user)
    if not user in range(0, 3):
        return "Informe um número entre 0 e 2."

    dicionario_escolhas = {0: pedra(), 1: papel(), 2: tesoura()}

    computer = random.randint(0, 2)

    print(f"Você escolheu: {user} {dicionario_escolhas[user]}")
    print(f"Adversário escolheu: {computer} {dicionario_escolhas[computer]}")
    return resultado(user, computer)


user = input("Qual sua escolha? [0: PEDRA, 1: PAPEL, 2: TESOURA]")
print(game(user))
