## GraphQL

- Query language, como forma de escrita e leitura para realizar operações de dados do front-end com o back-end.
- É um conjunto de padrões, independente da linguagem.
- Retorna tudo em uma única rota, geralmente /graphql. Onde é enviado através de query.

## Vantagens (Quais problemas resolva)

- Overfetching = buscar infos demais na requisição
- Underfetching = retorno insuficiente de dados

## Desvantagens (Dificuldades)

- Traz mais complexidade de início. Assim como Typescript para Javascript.
- Mais difícil trabalhar com cache. Visto que os navegadores já estão padronizados para requisições diversas. Enquanto o controle do GraphQL é apenas por uma rota.
- Mais difícil manipular erros retornados do back-end.
