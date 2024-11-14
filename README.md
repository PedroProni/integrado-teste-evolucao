> ![Logo Integrado](https://github.com/willmustafa/integrado-teste-evolucao/blob/master/logo-branca.png)

# Desafio do time de Evolução

Esse desafio foi criado para avaliar a capacidade técnica dos candidatos, nos ajudando a entender também seu nível de senioridade, ou seja, todos realizam o mesmo teste, mas se é esperado mais entregas de cada nível.

## Instruções:

  1. Faça o fork deste repositório
  2. No front-end, implemente o que é proposto no [protótipo]().
  3. Utilizar apenas os pacotes que já estiverem instalados.

## Requisitos mínimos

### Trainee

  - Implementar na página de produtos a busca e exibição de dados retornados da [API](https://6735fdf65995834c8a94f2fd.mockapi.io/api/v4/products) em uma tabela;
  - [BACKEND] Criar rota de produtos e retornar o JSON igual da API acima;

### Júnior

  - Os requisitos do nível anterior;
  - Ter um campo, ou vários, para poder filtrar os dados. Exemplo: campo para filtrar por nome, status, etc...;
  - Ser possível reeordenar a tabela ao clicar no título da coluna
  - [BACKEND] Conectar com o MongoDb e retornar o que tiver na collection

### Pleno

  - Os requisitos do nível anterior;
  - Criar uma página de login e bloquear o acesso a página de produtos se não estiver logado;
  - Adicionar paginação;
  - [BACKEND] Criar rota de login e bloquear as outras rotas para usar apenas com token
  - [BACKEND] Rota de produtos ser filtravel e paginável via query

### Sênior

  - Os requisitos do nível anterior;
  - Estrutura escalável para a consulta na API;
  - Chamadas na API com token e validador de token expirado fazer voltar para o login;
  - Loading skeleton ou comum enquanto busca os dados na API;
  - Toast de erros;
  - Editar item na linha;
  - [BACKEND] Ao salvar ou editar um produto, enviar para uma fila do RabbitMQ

