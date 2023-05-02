# Exercício 1
## Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

```bash
`Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos
```
Para testar, crie pelo menos duas pessoas.

# Exercício 2
## Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

```bash
`Class`: Student
`Extends`: Person
`Attributes`:
    - enrollment: matrícula da pessoa estudante
    - examsGrades: notas de provas
    - assignmentsGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e
      preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
    - generateEnrollment: retorna uma string única gerada
      como matrícula para a pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
```
Para testar, crie pelo menos cinco pessoas estudantes.

# Exercício 3
## Crie uma interface que representará uma pessoa funcionária.

```bash
`Interface`: Employee
`Attributes`:
    - registration: número do registro
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - generateRegistration: retorna uma string única gerada como registro
```

# Exercício 4
## Crie uma classe cujos objetos representem uma disciplina lecionada na escola.

```bash
`Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres
```
Para testar, crie as disciplinas Matemática, História, Filosofia.

# Exercício 5
## Crie uma classe cujos objetos representem uma pessoa professora.

```bash
`Class`: Teacher
`Extends`: Person
`Implements`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário
      e a disciplina
`Validations`:
    - O registro deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```
Para testar, crie uma pessoa professora para cada disciplina criada no exercício anterior.