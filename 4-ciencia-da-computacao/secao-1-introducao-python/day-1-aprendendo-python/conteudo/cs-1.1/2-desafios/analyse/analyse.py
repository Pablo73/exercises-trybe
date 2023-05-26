from util import count_letter, count_words


text_to_analyze = (
    "Seremos a primeira escolha para quem quer alcançar profissões "
    "digitais na América Latina. No Brasil e no mundo, milhares de vagas "
    "criadas anualmente no mercado de tecnologia deixam de ser "
    "preenchidas por falta de pessoas qualificadas. Nós trabalhamos duro "
    "todos os dias para que as pessoas tenham a oportunidade de trilhar "
    "essas carreiras."
)

print(text_to_analyze)
print(count_words(text_to_analyze))
print(count_letter(text_to_analyze))
