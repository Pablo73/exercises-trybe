def count_words(text):
    # Quantas palavras tem o texto?
    count_words = len(text.split(" "))

    # retornar a resposta como string
    return f"Número de palavras = {count_words}"
    # return "Número de palavras = " + str(count_words)



def count_letter(text):
    # Quantas vezes cada letra aparece?
    # { a: 10, b: 2}
    char_counter = dict()
    print(char_counter)

    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1

    # retornar a resposta como string
    return f"Ocorrências por caracter = {char_counter}"
