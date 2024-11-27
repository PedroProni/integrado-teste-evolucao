> ![Logo Integrado](https://github.com/willmustafa/integrado-teste-evolucao/blob/master/logo-branca.png)

# Desafio do time de Evolução

Esse desafio foi criado para avaliar a capacidade técnica dos candidatos, nos ajudando a entender também seu nível de senioridade, ou seja, todos realizam o mesmo teste, mas se é esperado mais entregas de cada nível.

## Instruções:

  1. Faça o fork deste repositório
  2. No front-end, implemente o que é proposto no [protótipo](https://www.figma.com/design/nCH4jlohltNsww4QCmmqix/Teste-Integrado?node-id=0-1&t=1WVv74eHdfjQewCs-1).
  3. Utilizar apenas os pacotes que já estiverem instalados.
  4. Você terá 1h30min dias para concluir

## Requisitos mínimos

  - Implementar na página de produtos a busca e exibição de dados retornados da [API](https://6735fdf65995834c8a94f2fd.mockapi.io/api/v4/products) em uma tabela;
  - [BACKEND] Criar rota de produtos e retornar o JSON igual da API acima;

### Júnior

  - Os requisitos do nível anterior;
  - Ter um campo, ou vários, para poder filtrar os dados. Exemplo: campo para filtrar por nome, status, etc...;
  - Reordenar a tabela ao clicar no título da coluna
  - [BACKEND] Conectar com o MongoDb e retornar o que tiver na collection
  - [BACKEND] Rota de produtos ser filtravel e paginável via query

### Pleno

  - Os requisitos do nível anterior;
  - Criar uma página de login e bloquear o acesso a página de produtos se não estiver logado;
  - Adicionar paginação;
  - Adicionar mais uma coluna com a contagem de vezes que esse produto foi comprado (a lista de pedidos está na rota da [API](https://6735fdf65995834c8a94f2fd.mockapi.io/api/v4/orders) ), não deve ser feito através da filtragem por query na API, você deve dar um GET na lista de orders e realizar a contagem pelo frontend;
  - [BACKEND] Criar rota de login e bloquear as outras rotas para usar apenas com token;
  - [BACKEND] Validação e esquematização do body [ver schema]();
  - [BACKEND] Adicionar regra nos GETs de produto, ele deve validar o integration_status do estoque e preço de cada produto, caso algum deles esteja com "error" ou "pending" o integration_status do produto deve ser alterado para esse status, caso não seja, deve continuar como estava

### Sênior

  - Os requisitos do nível anterior;
  - Estrutura escalável para a consulta na API;
  - Chamadas na API com token e validador de token expirado fazer voltar para o login;
  - Loading skeleton ou comum enquanto busca os dados na API;
  - Toast de erros;
  - Editar item na linha;
  - [BACKEND] Ao salvar ou editar um produto, enviar para uma fila do RabbitMQ
  - [BACKEND] Sistema de logs e monitoramento usando o prometheus
  - [BACKEND E FRONTEND] Testes unitários e E2E
  - [BACKEND] Rota **POST /product/async** que vai enviar a requisição para uma fila no RabbitMQ
  - [BACKEND] Listener para a fila da rota anterior e processar os dados

