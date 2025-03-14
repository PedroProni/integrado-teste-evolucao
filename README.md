> ![Logo Integrado](https://github.com/willmustafa/integrado-teste-evolucao/blob/master/logo-branca.png)

# Desafio do time de Evolução

Esse desafio foi criado para avaliar a capacidade técnica dos candidatos, nos ajudando a entender também seu nível de senioridade, ou seja, todos realizam o mesmo teste, mas se é esperado mais entregas de cada nível.

## Instruções:

  1. Faça o fork deste repositório
  2. No front-end, implemente o que é proposto no [protótipo](https://www.figma.com/design/nCH4jlohltNsww4QCmmqix/Teste-Integrado?node-id=0-1&t=1WVv74eHdfjQewCs-1).
  3. Utilizar apenas os pacotes que já estiverem instalados.
  4. Você terá 3h para concluir

## Requisitos mínimos

- Implementar na página de produtos a busca e exibição de dados retornados da API: curl -X GET -H "x-api-key: 0a0b8c17d7854a108a35aa8ac3b75503" https://api.mockapi.com/api/orders em uma tabela (a coluna de "items" deve mostrar apenas quantos itens tem nessa array);
- Ter um campo para poder filtrar os dados por increment_id e valor total maior que X, a filtragem não será feita na API, apenas localmente;
- Conectar o front com a API que você criou
- Criar uma página de login e bloquear o acesso à página de pedidos se não estiver logado;


- [BACKEND] Criar rota de pedidos e retornar o JSON igual da API acima, com o adicional que em itens deve ter {sku: string, qty: number}[];
- [BACKEND] Criar rota de login e bloquear as outras rotas para usar apenas com token;
- [BACKEND] Criar uma rota para somar quanto um cliente gastou no mês X, a rota vai receber o email do cliente e o número do mês e você deve responder com o valor total gasto pelo cliente nesse mês;