# Informações do Projeto
`TÍTULO DO PROJETO`  

FoodFlow

`CURSO` 

Engenharia de Software

## Participantes

 Membros da equipe:
 - Arthur Henrique Teixeira e Silva Bacelete
 - Davi Benjamin Guimarães
 - Alexandre Augusto dos Reis Junior
 - André Nestor Celino
 - Felipe Araújo Monteiro
 - João Pedro Tavares e Amorim

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema
 Um dos problemas mais significativos a serem abordados é o tempo gasto em fila de estabelecimentos da PUC-Minas. Essa questão não apenas resulta
 em atrasos para as aulas, mas pode também desencadear uma série de outros
 incovenientes.

## Objetivos

 O objetivo principal do nosso projeto é integrar e aproximar a cantina dos 
 alunos de forma que a compra e retirada dos lanches aconteça de maneira hábil
 e suficiente para o seu consumo. Assim, nos comprometemos com uma gestão
 eficiente do tempo de consumo e de demanda das filas, tornando-as menos
 demoradas e cheias.

## Justificativa

 De acordo com entrevistas realizadas com alunos e por experiência dos
 integrantes do grupos, percebemos que demoramos muito tempo para realizar
 a compra de alimentos nos estabelecimentos da PUC-Minas, assim não restando
 tempo suficiente para que possamos comer devagar e saborear o alimento.
 Por isso decidimos criar um software para que as compras possam ser feitas
 antes mesmo de chegar ao campus e podendo pegar o alimento quando quisermos.

## Público-Alvo

 O nosso publico alvo são alunos,
 funcionários e até mesmo visitantes da PUC-Minas.
 
# Especificações do Projeto

Para a elaboração do Projeto, contamos com a utilização de ferramentas como o Discord (para comunicação), o Miro (etapa de entendimento e exploração de Design Thinking), além do Figma (para a elaboração do protótipo) e do GitHub.


## Personas e Mapas de Empatia

As personas identificadas no nosso projeto conta com uma maioria de estudantes que buscam um atendimento agilizado e eficaz nos estabelecimentos da PUC. Aqui estão os exemplos de personas geradas:

- Pedro, 21 anos, treina bastante durante a semana e utiliza das cantinas um local para um consumo de calórias maior. Pedro precisa consumir uma quantidade de calorias maior em um pouco intervalo de tempo. O atendimento rápido é crucial para Pedro. 
- Gabriela, 20 anos, é uma estudante dedicada que sonha em ser uma juiz renomada. Devido a isso, Gabriela possui um dia a dia agitado com os estudos, serviço e outras atividades complementares. Gabriela precisa de um atendimento agilizado para lanchar e voltar ás aulas.
- Rayssa, 22 anos, sonha em ser engenheira e é uma estudante extrovertida. Rayssa deseja lanchar com calma enquanto conversa com seus amigos da faculdade;

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Aluno  | Ver as opções de alimentos           | Escolher os alimentos antes de entrar na fila, para proporcionar uma experiência mais rápida e eficiente|
| Aluno  | Ver o valor dos alimentos          | Conferir se tem o valor necessário para a compra e se o preço é justo |
| Aluno  | Fazer a compra diretamente pelo site| Ter uma experiência mais rápida e eficiente |
| Proprietario de uma lanchonete  | Cadastrar seu estabelecimento (lanchonete) no site| Estar entre as opções de estabelecimentos presentes, aumentando a sua visibilidade|
| Proprietario de uma lanchonete  | Adicionar e atualizar o seu catálogo de alimentos| Os potenciais clientes vejam o seu catálogo de produtos mesmo antes de chegarem presencialmente no local|
| Aluno  | Ver as opções de estabelecimentos| Conseguir ver as opções de locais, e ver qual atenda com as suas necessidades e desejos no momento|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |
|RF-002| Cadastramento do estabelecimento e aluno  | ALTA |
|RF-003| Variedade de estabelecimentos | ALTA |
|RF-004| Sistema de catálogo (opção de bebida e lanche) | ALTA |
|RF-005| Cadastramento de lanches pelo estabelecimento | ALTA |
|RF-006| Adicionar/remover lanches e bebidas pelo estabelecimento | ALTA |
|RF-007| Atualização de preços pelo estabelecimento | ALTA |
|RF-008| Cadastro da forma de pagamento pelo aluno | ALTA |
|RF-009| Gerar um QR Code para o aluno após a finalização da compra | ALTA |
|RF-010| Sistema de Feedback Estabelecimento/Aluno | MÉDIA |
|RF-011| Histórico de pedidos daquele lanchonete | MÉDIA |
|RF-012| Sistema de filtragem dos alimentos (preço, demanda, etc.) | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | MÉDIA | 
|RNF-003| Confiabilidade das informações de privacidade dos alunos (como os dados do pagamento) | ALTA | 
|RNF-004| O consumo de dados móveis deve ser otimizado | MÉDIA | 
|RNF-005| A demanda deve afetar minimamente o desempenho do aplicativo | MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O aplicativo está restrito a utilização dentro das PUC's        |



# Projeto de Interface

O nosso projeto de interface inicial foi realizado no Figma de forma que a maioria dos requisitos funcionais fossem concebidos. No link abaixo, podemos observar uma tela inicial de login e cadastro para clientes e estabelecimentos da PUC Minas. Além disso, o nosso projeto de interface conta com: 
  - Uma página inicial onde os estabelecimentos PUC Minas colocam os seus produtos de destaque á mostra para os consumidores;
  - Uma tela para seleção do estabelecimento PUC Minas e nele a visualização de seus produtos (comidas, bebidas, balas, chocolates, etc.);
  - Uma tela de histórico de pedidos; 
  - Uma tela de efetuação do pagamento dos produtos selecionados no carrinho e o envio do QR Code via email.
    
![Telasa](images/FiladaCantinaPrincipaisTelas.png)

## User Flow

![https://app.flowmapp.com/share/projects/63ff843f-1931-497a-abc0-81384ff451e8/userflow/d503cdb2-1665-4ded-8429-00da65cb4ffe](images/FiladaCantinaUserFlow.png)


## Wireframes

 ![Exemplo de Wireframe](images/FiladaCantinaWireframe.png)


# Metodologia

Nos baseamos na metodologia Scrum, no qual planejamos o projeto e em seguido avaliamos, selecionamos, desenvolvemos e revisamos. A liderança da equipe se manteve de maneira diluída, embora alguns participantes se sobressairam, cada um teve a sua tarefa e o trabalho foi realizado de maneira organizada, com um apoio mútuo, a partir do backlog do nosso projeto, sempre nos atualizando do que precisava ser feito. O nosso grupo utilizou das diversas ferramentas disponíveis para a concepção e idealização do projeto e a gestão via GitHub foi feita de maneira compartilhada.

## Divisão de Papéis


- Arthur Henrique Teixeira e Silva Bacelete: Coordenação do grupo, Design Thinking (Miro) e Documentação do Projeto
- Davi Benjamin Guimarães: Coordenação do grupo, Design Thinking (Miro)
- Alexandre Augusto dos Reis Junior: Design Thinking (Miro)
- André Nestor Celino: Elaboração dos Slides, Figma e Design Thinking (Miro)
- Felipe Araújo Monteiro: Design Thinking (Miro), Figma e UserFlow
- João Pedro Tavares e Amorim: Documentação do Projeto e Design Thinking (Miro).


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVNiWgZ_8=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g4-fila-na-cantina-1/tree/master/codigo | 
|UserFlow | FlowmApp | https://app.flowmapp.com/share/projects/63ff843f-1931-497a-abc0-81384ff451e8/userflow/d503cdb2-1665-4ded-8429-00da65cb4ffe | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/LIeNCpbdiaeYrSqSiKq2N7?type=design | 



## Controle de Versão
O grupo colaborou no projeto através de commits regulares em branches separadas, documentando o progresso de cada membro. Após revisões e testes, as alterações foram integradas à branch principal (main) por meio de merges, garantindo a coesão e a qualidade do código final.


# Projeto da Solução
Deste modo, o problema identificado está no tempo desperdiçado em filas dentro das instituições da PUC-Minas e todo o incômodo gerado. De acordo com a solução aqui apresentada, o projeto tem a finalidade de integrar as cantinas aos alunos, podendo escolher seus lanches alguns minutos antes de sair da sala de aula. Dessa maneira, pretendemos garantir uma administração eficiente do tempo e da quantidade de pessoas nas filas, evitando que as filas ocorram e que, se ocorrerem, sejam demasiado demoradas.

## Tecnologias Utilizadas

As tecnologias que solucionarão o problema acima incluirão: 

HTML (HyperText Markup Language): estruturação do conteúdo da aplicação web 

CSS (Cascading Style Sheets): Estilização da aplicação para torná-la mais atraente 

JavaScript(JS): adição de interatividade e funcionalidade dinâmica 

Bootstrap: framework CSS para desenvolvimento de interfaces responsivas na web móveis primeiro 

Firebase: serviços de backend para autenticação, banco de dados, hospedagem e função em nuvem

Firebase Authentication: gerenciamento de autenticação do usuário 

Firebase Firestore: banco de dados em tempo real do NoSQL 

Firebase Hosting: hospedagem da aplicação web 

## Arquitetura da solução
O diagrama abaixo demonstra de manteira bastante sucinta e intuitiva a interação entre os documentos Webs do nosso projeto (com HTML, CSS, JS e Bootstrap), a Internet e os serviços de hospedagem, tanto no frontend quanto no backend.
 ![Exemplo de Arquitetura](images/DiagramaArquitetura.jpeg)

# Avaliação da Aplicação

Para avaliar a aplicação desenvolvida, foram realizados testes detalhados que cobrem os principais cenários de uso, garantindo que todos os requisitos funcionais e não funcionais fossem satisfeitos. Abaixo, apresentamos os cenários de testes utilizados, demonstrando a conformidade com os requisitos estabelecidos.  

 

**Cenário de Teste 1: Cadastro de Usuário** 
- **Objetivo:** Verificar se o sistema permite que novos usuários se cadastrem corretamente.  
- **Requisitos Atendidos:** RF-002 (Cadastramento do estabelecimento e aluno)  
- **Passos do Teste:**  

- **Resultado Esperado:** Usuário cadastrado com sucesso e redirecionado para a página inicial.  

**Cenário de Teste 2: Login de Usuário** 
- **Objetivo:** Verificar se o sistema autentica corretamente os usuários cadastrados.  
- **Requisitos Atendidos:** RF-002 (Cadastramento do estabelecimento e aluno).
- **Passos do Teste:**
- 
- **Resultado Esperado:** Usuário autenticado com sucesso e redirecionado para a página de seleção de estabelecimentos.  

  **Cenário de Teste 3: Visualização de Estabelecimentos**
  - **Objetivo:** Verificar se o usuário pode visualizar a lista de estabelecimentos cadastrados.
  - **Requisitos Atendidos:** RF-003 (Variedade de estabelecimentos)
  - **Passos do Teste:**

  - **Resultado Esperado:** Lista de estabelecimentos exibida corretamente e produtos visíveis após a seleção.

  **Cenário de Teste 4: Adição de Produtos ao Carrinho**
  - **Objetivo:** Verificar se o usuário pode adicionar produtos ao carrinho de compras.
  - **Requisitos Atendidos:** RF-004 (Sistema de catálogo), RF-006 (Adicionar/remover lanches e bebidas pelo estabelecimento)
  - **Passos do Teste:**

  - **Resultado Esperado:** Produto adicionado ao carrinho com sucesso.

  **Cenário de Teste 5: Finalização de Compra**
  - **Objetivo:** Verificar se o usuário pode finalizar a compra e receber um QR Code.
  - **Requisitos Atendidos:** RF-008 (Cadastro da forma de pagamento pelo aluno), RF-009 (QR Code Gerado para o aluno)
  - **Passos do Teste:**

  - **Resultado Esperado:** Compra finalizada e QR Code gerado corretamente.

  **Cenário de Teste 6: Cadastro de Estabelecimento**
  - **Objetivo:** Verificar se novos estabelecimentos podem ser cadastrados corretamente.
  - **Requisitos Atendidos:** RF-002 (Cadastramento do estabelecimento e aluno)
  - **Passos do Teste:**

  - **Resultado Esperado:** Estabelecimento cadastrado com sucesso e exibido na lista.

  **Cenário de Teste 7: Atualização de Catálogo de Produtos**
  - **Objetivo:** Verificar se os estabelecimentos podem adicionar e atualizar seus produtos.
  - **Requisitos Atendidos:** RF-005 (Cadastramento de lanches pelo estabelecimento), RF-007 (Atualização de preços pelo estabelecimento)
  - **Passos do Teste:**

  - **Resultado Esperado:** Produtos adicionados ou atualizados com sucesso.



## Plano de Testes

Para a realização dos testes, foram selecionados os seguintes cenários: 

Cadastro de Usuário: Funcionalidade avaliada para verificar a capacidade do sistema de permitir o cadastro correto de novos usuários. 

Login de Usuário: Teste para validar a autenticação adequada dos usuários cadastrados no sistema. 

Visualização de Estabelecimentos: Verificação da funcionalidade que permite aos usuários visualizar a lista de estabelecimentos cadastrados. 

Adição de Produtos ao Carrinho: Avaliação da capacidade do sistema de permitir que os usuários adicionem produtos ao carrinho de compras. 

Finalização de Compra: Teste para assegurar que os usuários possam concluir suas compras com sucesso e receber o QR Code. 

Cadastro de Estabelecimento: Funcionalidade avaliada para verificar a correta adição de novos estabelecimentos ao sistema. 

Atualização de Catálogo de Produtos: Verificação da capacidade dos estabelecimentos de adicionar e atualizar produtos em seu catálogo. 

Grupo de Usuários: 

O teste foi realizado com uma amostra representativa de usuários finais, incluindo usuários novos e existentes do sistema. Também foram incluídos usuários técnicos para testes mais aprofundados de funcionalidades específicas. 

Ferramentas Utilizadas: 

Ambiente de Testes: Ambiente controlado simulando condições de produção. 

Ferramentas de Automação: Para cenários de testes repetitivos e regressão. 

Ferramentas de Monitoramento: Para avaliar a performance e comportamento da aplicação durante os testes de carga. 

Ferramentas de Feedback e Registro de Bugs: Utilizadas para coletar feedback dos usuários e registrar eventuais problemas encontrados durante os testes. 

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

Para avaliar a aplicação desenvolvida, foram realizados testes detalhados cobrindo os principais cenários de uso, garantindo a conformidade com os requisitos estabelecidos. Abaixo estão os resultados dos testes realizados: 

Resultados dos Testes: 

Os cenários de testes foram executados conforme planejado, e os resultados foram os seguintes: 

Cadastro de Usuário: O teste foi bem-sucedido, com novos usuários sendo capazes de se cadastrar corretamente e acessar a página inicial após o cadastro. 

Login de Usuário: Todos os usuários cadastrados conseguiram realizar o login com sucesso e foram redirecionados para a página de seleção de estabelecimentos. 

Visualização de Estabelecimentos: A lista de estabelecimentos foi exibida corretamente para todos os usuários, e os produtos foram visíveis após a seleção de um estabelecimento. 

Adição de Produtos ao Carrinho: Os usuários conseguiram adicionar produtos ao carrinho de compras sem problemas, conforme o catálogo do estabelecimento selecionado. 

Finalização de Compra: A compra foi finalizada sem falhas, e todos os usuários receberam corretamente o QR Code para confirmação do pedido. 

Cadastro de Estabelecimento: Novos estabelecimentos foram cadastrados com sucesso e apareceram corretamente na lista de estabelecimentos disponíveis. 

Atualização de Catálogo de Produtos: Estabelecimentos conseguiram adicionar novos produtos e atualizar preços conforme necessário, refletindo essas mudanças na lista de produtos disponíveis. 

Pontos Fortes Identificados: 

Funcionalidade Completa: Todos os requisitos funcionais foram atendidos, desde o cadastro até a finalização da compra. 

Usabilidade: A interface permitiu uma navegação intuitiva e sem problemas para os usuários. 

Estabilidade: A aplicação demonstrou ser estável durante os testes, sem crashes ou erros graves. 

Pontos a Melhorar: 

Performance: Em cenários de carga mais elevada, observou-se uma leve degradação na performance durante a atualização do catálogo de produtos. 

Feedback Visual: Em alguns casos, o feedback visual para o usuário poderia ser mais claro, especialmente durante processos como a adição de produtos ao carrinho. 

Planos para Próximas Iterações: 

Otimização de Performance: Investir em melhorias de infraestrutura e otimização de código para lidar de forma mais eficiente com picos de uso. 

Aprimoramento da Interface: Implementar feedback visual mais robusto para garantir que os usuários recebam confirmação clara das ações realizadas. 

Testes de Carga: Expandir os testes de carga para simular condições de uso mais intensas e identificar possíveis pontos fracos antes da implantação. 

Conclusão: Os resultados dos testes demonstram que a aplicação está alinhada com os requisitos funcionais estabelecidos. As melhorias identificadas serão abordadas nas próximas iterações do desenvolvimento, visando garantir uma experiência ainda mais satisfatória e robusta para os usuários finais. 

# Referências

- Figma: https://www.figma.com/
- LucidChart: https://www.lucidchart.com/pages/
- Miro: https://miro.com/pt/
- UserFlow: https://userflow.com/
- GitHub: https://github.com/


