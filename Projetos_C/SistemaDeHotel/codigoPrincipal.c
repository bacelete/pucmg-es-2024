// Bibliotecas:
#include <ctype.h>
#include <locale.h>
#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// Constantes:
#define QTD_MAX 500
#define SUCESSO 0
#define ERROR 1
#define SAIR 8

/*
Trabalho Prática de AEDS I
Nome: Arthur Henrique T. e S. Bacelete e João Paulo Gobira Lopes Costa
Data: 25/06/2024
Curso 
*/

// Informações do cliente:
typedef struct cadastroClientes {
  int codigo;
  char nome[QTD_MAX], endereco[QTD_MAX], telefone[QTD_MAX];
} infClientes;

// Informações do funcionário:
typedef struct cadastroFuncionario {
  int codigo;
  char nome[QTD_MAX], cargo[QTD_MAX], telefone[QTD_MAX];
  float salario;
} infFuncionario;

// Informações da estadia:
typedef struct cadastroEstadia {
  int codigo;
  char dataentrada[QTD_MAX];
  char datasaida[QTD_MAX];
  int quant_hospedes;
  int codigocliente;
  int num_quarto;
  int qtd_diarias;
  float valorTotal; 
} infEstadia;

// Informações do quarto:
typedef struct cadastroQuarto {
  int numero_quarto, qtd_hospedes, status;
  float valor_diaria;
} infQuarto;

/* Função que substitui o último caractere '\n' de uma linha por '\0' para evitar de dar saltos ao apresentar as informações nos arquivos. */
void removeLinha(char *str) {
  size_t tmh = strlen(str);
  if (tmh > 0 && (str[tmh - 1] == '\n')) {
    str[tmh - 1] = '\0';
  }
}

/* Função que apresenta o menu para o usuário */
void menuUsuario() {

  printf("\n========= Menu de Cadastro ==========\n");
  printf("(1). Cadastro de cliente\n");
  printf("(2). Cadastro de funcionário\n");
  printf("(3). Cadastro de estadia\n");
  printf("(4). Cadastro de quarto\n");
  printf("(5). Informações cliente e/ou funcionário\n");
  printf("(6). Visualizar estadias\n");
  printf("(7). Visualizar pontos de fidelidade\n");
  printf("(8). Sair\n");
  printf("=====================================\n");

}

/* Função que salva dados do cliente no arquivo 'cadastroClientes.txt' */
void salvaDadosCliente(infClientes *cliente) {
  FILE *arq;
  arq = fopen("cadastroClientes.txt", "a"); // Modo 'a' => append

  if (!arq) {
    printf("");
  } else {
    fprintf(arq, "%d - %s - %s - %s\n", cliente->codigo, cliente->nome,
            cliente->telefone, cliente->endereco);
  }

  fclose(arq);
}

/* Função que salva dados do funcionário no arquivo 'cadastroFuncionario.txt'*/
void salvaDadosFuncionario(infFuncionario *funcionario) {
  FILE *arq;
  arq = fopen("cadastroFuncionario.txt", "a"); // Modo 'a' => append

  if (!arq) {
    printf("");
  } else {
    fprintf(arq, "%d - %s - %s - %s - %.2f\n", funcionario->codigo,
            funcionario->nome, funcionario->telefone, funcionario->cargo,
            funcionario->salario);
  }

  fclose(arq);
}
/* Função que salva dados da estadia no arquivo 'cadastroEstadia.txt'*/
void salvaDadosEstadia(infEstadia *estadia) {
  FILE *arq;
  arq = fopen("cadastroEstadia.txt", "a"); // Modo 'a' => append

  if (!arq) {
    printf("");
  } else {
    fprintf(arq, "%d - %s - %s - %d - %d - %d - %d - %.2f\n", estadia->codigo,
            estadia->dataentrada, estadia->datasaida, estadia->quant_hospedes,
            estadia->codigocliente, estadia->num_quarto, estadia->qtd_diarias, estadia->valorTotal);
  }

  fclose(arq);
}

/* Função que salva dados dos quartos no arquivo 'cadastroQuadro.txt'*/
void salvaDadosQuarto(infQuarto *quarto) {
  FILE *arq;
  arq = fopen("cadastroQuarto.txt", "a"); // Modo 'a' => append

  if (!arq) {
    printf("");
  } else {
    fprintf(arq, "%d - %d - %.2f - %d\n", quarto->numero_quarto,
            quarto->qtd_hospedes, quarto->valor_diaria, quarto->status);
  }
  fclose(arq);
}

/* A função busca os dados do cliente e/ou do funcionário que o usuário quiser de acordo com seu ID, ele percorre o arquivo, faz a leitura com sscanf(), e se o ID digitado estiver no arquivo ele imprime os dados do cliente/funcionário. */
void buscaDados(infClientes *cliente, infFuncionario *funcionario) {
  char infoCliente[QTD_MAX], infoFuncio[QTD_MAX], str[QTD_MAX];
  FILE *arqCliente, *arqFuncionario;

  arqCliente = fopen("cadastroClientes.txt", "r");
  arqFuncionario = fopen("cadastroFuncionario.txt", "r");

  if (!arqCliente || !arqFuncionario) {
    printf("Erro: um dos arquivos não pôde ser aberto.\n");
    return;
  }

  printf("Digite o código (ID) do cliente: ");
  fgets(infoCliente, QTD_MAX, stdin); 
  removeLinha(infoCliente);

  int codigo;
  char nome[QTD_MAX];
  bool clienteEncontrado = false;

  printf("\nInformações do cliente:\n");
  while (fgets(str, QTD_MAX, arqCliente) != NULL) {
    sscanf(str, "%d - %[^\n]s", &codigo, nome); 
    if (atoi(infoCliente) == codigo) {
      printf("%d - %s\n", codigo, nome);
      clienteEncontrado = true;
    }
  }

  if (!clienteEncontrado) {
    printf("Cliente não encontrado.\n");
  }

  printf("\nDigite o código (ID) do funcionário: ");
  fgets(infoFuncio, QTD_MAX, stdin); 
  removeLinha(infoFuncio);

  int codigoFuncio;
  char nomeFuncio[QTD_MAX];
  bool funcionarioEncontrado = false;

  printf("\nInformações do funcionário:\n");
  while (fgets(str, QTD_MAX, arqFuncionario) != NULL) {
    sscanf(str, "%d - %[^\n]s", &codigoFuncio, nomeFuncio); 
    if (atoi(infoFuncio) == codigoFuncio) {
      funcionarioEncontrado = true; 
      printf("%d - %s\n", codigoFuncio, nomeFuncio);
    }
  }

  if(!funcionarioEncontrado) {
    printf("Funcionário não encontrado.\n"); 
  }

  fclose(arqCliente);
  fclose(arqFuncionario);
}


/* A função abaixo pega os IDs salvos no arquivo dos clientes, guarda-os num vetor e checa se o código que for cadastrado pro cliente se repete, caso repetir a função retorna false e o cadastro não será prosseguido. */
bool verificaIDCliente(int codigoCliente) {
  FILE *arq;
  char str[QTD_MAX];
  int vetID[QTD_MAX], i, cnt = 0;
  char delim[2] = "-";

  arq = fopen("cadastroClientes.txt", "r");

  if (!arq) {
    printf("");
  } else { // Arquivo aberto para leitura:
    while (fgets(str, QTD_MAX, arq) != NULL) { // Lê até o final da linha:
      char *token = strtok(str, delim); // Pega o primeiro token.
      if (token != NULL) { // Certifica de que o token existe:
        vetID[cnt] = atoi(token); // Transforma o token em inteiro e salva em um vetor.
        cnt++;// Incremento do contador.
      }
    }

    fclose(arq);

    for (i = 0; i < cnt; i++) {
      if (codigoCliente == vetID[i]) {
        printf("O código já existe, tente novamente.\n");
        return false;
      }
    }
  }
  return true;
}

/* A função abaixo pega os IDs salvos no arquivo dos funcionários, guarda-os num vetor e checa se o código que for cadastrado pro funcionário se repete, caso repetir a função retorna*/

bool verificaIDFuncionario(int codigoFun) {
  FILE *arq;
  char str[QTD_MAX];
  int vetID[QTD_MAX], i, cnt = 0;
  char delim[2] = "-";

  arq = fopen("cadastroFuncionario.txt", "r");

  if (!arq) {
    printf("");
  } 
  else { // Arquivo aberto para leitura:
    while (fgets(str, QTD_MAX, arq) != NULL) { // Lê até o final do arquivo ou se houver um erro.
      char *token = strtok(str, delim); // Pega o primeiro token.
      if (token != NULL) { // Certifica de que o token existe:
        vetID[cnt] = atoi(token); // Transforma o token em inteiro e salva em um vetor.
        cnt++;// Incremento do contador.
      }
    }

    fclose(arq);

    for (i = 0; i < cnt; i++) {
      if (codigoFun == vetID[i]) {
        printf("Erro: o código já existe, tente novamente.\n");
        return false;
      }
    }
  }
  return true;
}

/* A função abaixo salva as informações do cliente na struct se o ID do cliente não repetir.  */
bool cadastroCliente(infClientes *cliente) {
  bool IDValido = false;

  printf("Código do cliente: ");
  scanf("%d", &cliente->codigo);
  getchar();// Limpa o buffer
  IDValido = verificaIDCliente(cliente->codigo); // Retorna true ou false.

  if (IDValido) { // Se retornar true, ou seja, se o código for válido, realiza o cadastro.
    printf("Nome do cliente: ");
    fgets(cliente->nome, QTD_MAX, stdin);
    removeLinha(cliente->nome);

    printf("Endereço do cliente: ");
    fgets(cliente->endereco, QTD_MAX, stdin);
    removeLinha(cliente->endereco);

    printf("Telefone do cliente: ");
    fgets(cliente->telefone, QTD_MAX, stdin);
    removeLinha(cliente->telefone);

    if (cliente->codigo > 0) { // Faz uma condição para validar o cadastro do quarto.
      salvaDadosCliente(cliente); // Salva as informações no arquivo.
      printf("\nCliente cadastrado!\n");
      return true; // Retorna true para o cliente cadastrado.
    }
  }
  return false; // Retorna falso para o cliente não cadastrado.
}

/* A função abaixo salva as informações de cadastro de funcionário na struct se o ID do funcionário não repetir. */
void cadastroFun(infFuncionario *funcionario) {
  bool IDValido = false;

  printf("\nCódigo do funcionário: ");
  scanf("%d", &funcionario->codigo);
  getchar(); // Limpa o buffer;
  IDValido = verificaIDFuncionario(funcionario->codigo);

  if (IDValido) {
    printf("Nome do funcionário: ");
    fgets(funcionario->nome, QTD_MAX, stdin);
    removeLinha(funcionario->nome);

    printf("Telefone do funcionário: ");
    fgets(funcionario->telefone, QTD_MAX, stdin);
    removeLinha(funcionario->telefone);

    printf("Cargo do funcionário: ");
    fgets(funcionario->cargo, QTD_MAX, stdin);
    removeLinha(funcionario->cargo);

    printf("Salário do funcionário: ");
    scanf("%f", &funcionario->salario);

    if (funcionario->codigo > 0) {
      salvaDadosFuncionario(funcionario);
      printf("\nFuncionário cadastrado!\n");
    }
  }
}

/* A função abaixo abre o arquivo de 'cadastroQuarto.txt' para leitura, percorre o arquivo com fgets, pega os dados com sscanf e escreve no arquivo 'temp.txt' aberto para escrita. Além disso, ele só irá alterar o status do quarto caso o número do quarto cadastrado for igual ao que o usuário estiver escolhido (int quartoEstadia) */

void alteraStatusQuarto(int quartoEstadia) {
  FILE *arqLeitura, *arqEscrita;
  arqLeitura = fopen("cadastroQuarto.txt", "r"); 
  arqEscrita = fopen("temp.txt", "w"); 

  if(!arqLeitura || !arqEscrita) {
    printf(""); 
  }
  else {
    int numQuarto, numHospedes, status;
    float valorDiaria;
    char str[QTD_MAX]; 

    while (fgets(str, QTD_MAX, arqLeitura) != NULL) {
      sscanf(str, "%d - %d - %f - %d", &numQuarto, &numHospedes, &valorDiaria, &status);
      if(numQuarto == quartoEstadia) {
        status = 1; 
      }
      fprintf(arqEscrita, "%d - %d - %.2f - %d\n", numQuarto, numHospedes, valorDiaria, status);
    }

  }
  fclose(arqLeitura);
  fclose(arqEscrita);
  remove("cadastroQuarto.txt"); //Remove o arquivo de cadastro de quarto;
  rename("temp.txt", "cadastroQuarto.txt"); //Renomeia o arquivo aberto para leitura igualmente ao arq. anterior.
}

/* A função abaixo percorre o arquivo do cadastro de quartos e armazena os números dos quartos que estão desocupados e com a quantidade de hóspedes desejada pelo cliente. */
bool verificaQuartoDisponivel (infEstadia *estadia) {
  FILE *arq; 
  char str[QTD_MAX];
  int quartosValidos[QTD_MAX], i = 0;
  int numQuarto, numHospedes, status;
  float valorDiaria;
  
  arq = fopen("cadastroQuarto.txt", "r"); 

  if(!arq) {
    printf("");
  }
  else {
    //O fgets lê até encontrar um \n ou até encontrar NULL (final do arquivo)
    printf("\nQuarto(s) disponívei(s): \n"); 
    while (fgets(str, QTD_MAX, arq) != NULL) {
      
      sscanf(str, "%d - %d - %f - %d", &numQuarto, &numHospedes, &valorDiaria, &status);

      if (numHospedes == estadia->quant_hospedes && status == 0) { //Qtd. de hospedes desejado e quarto desocupado:
        quartosValidos[i] = numQuarto; //Guarda o quarto válido em um vetor.
        printf("%d ", quartosValidos[i]);
        i++; 
      }
      
    }

    fclose(arq);

    //Se houver quartos válidos:
    if (i > 0) {
      int opc;
      printf("\n\nDigite o número do quarto que deseja: ");
      scanf("%d", &opc); //Lê a opção de quarto:
      for (int j = 0; j < i; j++) {
        if (opc == quartosValidos[j]) { //Se a opção digitada for igual aos quartos válidos:
          estadia->num_quarto = opc; //Guarda esse quarto na variável da estadia.
          alteraStatusQuarto(estadia->num_quarto); //Altera o status do quarto no arq 'cadastroQuarto.txt'
          return true;
        }
      }
      printf("O quarto %d não está disponível.\n", opc); 
      return false; 
    }
    //Se não houver, ou seja, i = 0:
    else {
      printf("Não há disponibilidade de quartos com os critérios informados.\n"); 
      return false;
    }
  }
}

/* A função abaixo pega os dias, meses e anos das strings de datas e extraem os valores inteiros para cálculo da diferença entre a data de saída e entrada em dias. */

int calcularQuantidadeDiarias(const char *dataEntrada, const char *dataSaida) {
  int diaEntrada, mesEntrada, anoEntrada;
  int diaSaida, mesSaida, anoSaida;

  // Extrair dia, mês e ano da data de entrada
  sscanf(dataEntrada, "%d/%d/%d", &diaEntrada, &mesEntrada, &anoEntrada);

  // Extrair dia, mês e ano da data de saída
  sscanf(dataSaida, "%d/%d/%d", &diaSaida, &mesSaida, &anoSaida);

  // Calcular diferença de dias
  int diferenca = (diaSaida - diaEntrada) + (mesSaida - mesEntrada) * 30 + (anoSaida - anoEntrada) * 365;
  return diferenca;
}

/* A função verifica o código do cliente digitado para cadastro da estadia é válido, isto é, se consta no arquivo de 'cadastroClientes.txt' */
bool existeIDCliente (int idCliente) {
  FILE *arq; 
  char str[QTD_MAX], delim[2] = "-"; 
  char *token;
  arq = fopen("cadastroClientes.txt", "r"); 

  if(!arq) {
    printf("Erro: o arquivo não pode ser aberto.\n"); 
  }
  else {
    
    while (fgets(str, QTD_MAX, arq) != NULL) {
      token = strtok(str, delim); 
      if (token != NULL) {
        int codigoCliente = atoi(token);
        if(codigoCliente == idCliente) {
          return true; 
        }
      }
    }
  }
  
  fclose(arq);
  printf("\nO código '%d' não está cadastrado.\n", idCliente); 
  return false; 
}

/* A função abaixo imprime todos os dados referentes a estadia do cliente de acordo com o código digitado, para isso ele antes verifica se o código do cliente existe, assim ele imprime a estadia logo em seguida. */
void imprimeEstadiasCliente() {
  FILE *arq;
  char str[QTD_MAX]; 
  arq = fopen("cadastroEstadia.txt", "r"); 

  if(!arq) {
    printf("Erro: o arquivo não pode ser aberto.\n");
  }
  else {
    int codigoDigitado; 
    
    printf("Digite o código do cliente: ");
    scanf("%d", &codigoDigitado);

    if (existeIDCliente(codigoDigitado)) {
      int codigoEstadia, qtdHosp, codigoCliente, numQuarto, dias; 
      float valorTotal; 
      char data_entrada[QTD_MAX], data_saida[QTD_MAX];

      printf("\nEstadia(s) cadastrada(s): \n"); 
      while (fgets(str, QTD_MAX, arq) != NULL) {
        sscanf(str, "%d - %s - %s - %d - %d - %d - %d - %f", &codigoEstadia, data_entrada, data_saida, &qtdHosp,    
        &codigoCliente, &numQuarto, &dias, &valorTotal);
        if (codigoDigitado == codigoCliente) {
          
          printf("\nCódigo da estadia: %d\n", codigoEstadia);
          printf("Data de entrada: %s\n", data_entrada);
          printf("Data de saída: %s\n", data_saida); 
          printf("Dias: %d\n", dias); 
          printf("Quarto: %d\n", numQuarto);
          printf("Hóspedes: %d\n", qtdHosp); 
          printf("Valor total: R$%.2f\n", valorTotal); 
          
        }
      }
    }
  }
}

/* A função cadastra a estadia e armazena os dados na struct*/
bool cadastroEstadia(infEstadia *estadia, infQuarto *quarto) {
  bool quartoDisponivel, existeID;

  printf("\nCódigo da estadia: ");
  scanf("%d", &estadia->codigo);
  getchar(); // Limpa o buffer de entrada
  printf("Data de entrada (dd/mm/aaaa): ");
  fgets(estadia->dataentrada, QTD_MAX, stdin);
  removeLinha(estadia->dataentrada);
  printf("Data de saída (dd/mm/aaaa): ");
  fgets(estadia->datasaida, QTD_MAX, stdin);
  removeLinha(estadia->datasaida);
  printf("Quantidade de hóspedes: ");
  scanf("%d", &estadia->quant_hospedes);
  printf("Código do cliente: ");
  scanf("%d", &estadia->codigocliente);

  // Validar se a data de entrada é posterior à data atual
  struct tm *dataAtual;
  time_t agora;
  time(&agora);
  dataAtual = localtime(&agora);
  int diaAtual = dataAtual->tm_mday;
  int mesAtual = dataAtual->tm_mon + 1;
  int anoAtual = dataAtual->tm_year + 1900;

  int diaEntrada, mesEntrada, anoEntrada;
  sscanf(estadia->dataentrada, "%d/%d/%d", &diaEntrada, &mesEntrada, &anoEntrada);

  if (anoEntrada < anoAtual || (anoEntrada == anoAtual && mesEntrada < mesAtual) ||
      (anoEntrada == anoAtual && mesEntrada == mesAtual && diaEntrada < diaAtual)) {
    printf("\nErro: Data de entrada não compatível.\n");
    return false;
  }

  // Validar se a data de saída é posterior à data de entrada
  int diaSaida, mesSaida, anoSaida;
  sscanf(estadia->datasaida, "%d/%d/%d", &diaSaida, &mesSaida, &anoSaida);

  if (anoSaida < anoEntrada || (anoSaida == anoEntrada && mesSaida < mesEntrada) ||
      (anoSaida == anoEntrada && mesSaida == mesEntrada && diaSaida <= diaEntrada)) {
    printf("\nErro: Data de saída não compatível.\n");
    return false;
  }

  // Calcular quantidade de dias com base nas datas fornecidas:
  estadia->qtd_diarias = calcularQuantidadeDiarias(estadia->dataentrada, estadia->datasaida);
  existeID = existeIDCliente(estadia->codigocliente);

  if (existeID) { // Se o ID do cliente existir:
    quartoDisponivel = verificaQuartoDisponivel(estadia);

    if (quartoDisponivel) { // Se o usuário escolher um quarto disponível:
      printf("\nEstadia cadastrada!\n");

      estadia->valorTotal = (estadia->qtd_diarias) * (quarto->valor_diaria);
      salvaDadosEstadia(estadia); // Cadastra a estadia.
      printf("Valor total da estadia: R$%.2f\n", estadia->valorTotal);
      return true;
    } else {
      printf("Não existem quartos disponíveis no momento.\n");
    }
  }
  return false;
}



/* A função cadastra o quarto e salva os dados na struct.*/
bool cadastroQuarto(infQuarto *quarto) {

  printf("Número do quarto: ");
  scanf("%d", &quarto->numero_quarto);
  printf("Qtd. máxima de hóspedes possíveis no quarto: ");
  scanf("%d", &quarto->qtd_hospedes);
  printf("Valor da diária do quarto: ");
  scanf("%f", &quarto->valor_diaria);
  printf("Status do quarto (1 - Ocupado/ 0 - Desocupado): ");
  scanf("%d", &quarto->status);

  if (quarto->numero_quarto > 0) { // Faz uma condição para validar o cadastro do quarto.
    printf("\nQuarto cadastrado!\n");
    return true;
  }
  return false;
}

/* A função calcula a quantidade de pontos de fidelidade de cada cliente com base na quantidade de diárias dos hotéis. */
void calculaPontosFidelidade() {
  FILE *arq; 
  int codigoDigitado; 
  arq = fopen("cadastroEstadia.txt", "r"); 

  printf("Digite o codigo do cliente: "); 
  scanf("%d", &codigoDigitado);

  if (!arq) {
    printf("Erro: o arquivo não pode ser aberto.\n"); 
  }
  else {
    char str[QTD_MAX]; 
    int somaDias, vetDias[QTD_MAX], i = 0; 

    while (fgets(str, QTD_MAX, arq) != NULL) {
      int dias, codigoCliente;  
      somaDias = 0;
      sscanf(str, "%*d - %*s - %*s - %*d - %d - %*s - %d - %*f", &codigoCliente, &dias); 
      if (codigoDigitado == codigoCliente) {
         vetDias[i] = dias; 
         i++; 
      }
    }
    for (int j = 0; j < i; j++) {
      somaDias += vetDias[j]; 
    }
    printf("Pontos de fidelidade: %d\n", (somaDias * 10)); 
  }
}

int main() {
  setlocale(LC_ALL, "Portuguese");
  int opcao = 0;

  bool clienteValido;
  bool quartoValido;
  bool estadiaCadastrada;

  infClientes cliente;
  infFuncionario funcionario;
  infEstadia estadias;
  infQuarto quarto;

  while (opcao != SAIR) {
    menuUsuario();
    printf("Digite uma opção: ");
    scanf("%d", &opcao);
    system("cls || clear"); // Limpa a tela cada vez que ele  digita uma opção.
    getchar();              // Limpar o buffer de entrada após ler a opção

  switch (opcao) {
    case 1:
      clienteValido = cadastroCliente(&cliente);
      break;
    case 2:
      cadastroFun(&funcionario);
      break;
    case 3:
      if (clienteValido && quartoValido) { // Se o cliente e o quarto for cadastrado,
        estadiaCadastrada = cadastroEstadia(&estadias, &quarto); // Cadastra a estadia
      } else {
        if (!clienteValido) { // Erro se o cliente não estiver cadastrado:
          printf("\nErro: cadastre um cliente primeiro!\n");
        }
        if (!quartoValido) { // Erro se o quarto não está cadastrado:
          printf("Erro: cadastre um quarto primeiro!\n");
        }
      }
      break;
    case 4:
      quartoValido = cadastroQuarto(&quarto);
      salvaDadosQuarto(&quarto);
      break;
    case 5:
      buscaDados(&cliente, &funcionario); 
      break;
    case 6:
      if(estadiaCadastrada) {
        imprimeEstadiasCliente(); 
      }
      else {
        printf("Não existem estadias cadastradas até o momento.\n");
      }
      break;
    case 7:
      calculaPontosFidelidade(); 
      break; 
    case 8: 
      printf("Saindo do menu...");
      break; 
    }
    printf("\n");
  }
  return 0;
}