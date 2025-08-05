# Projeto API de Podcasts

Uma API simples construída com Node.js e TypeScript para listar e filtrar episódios de podcasts a partir de um arquivo de dados local.

## ✨ Funcionalidades

- Listar todos os episódios de podcast.
- Filtrar episódios por nome do podcast.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/esbuild-kit/tsx) - Um executor de TypeScript rápido para Node.js.
- [tsup](https://tsup.egoist.dev/) - Para compilar o código TypeScript para produção.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🚀 Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone `https://github.com/barbaranunesprogrammer/api-podcast.git`
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd projeto-api
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Adicione a seguinte variável de ambiente para definir a porta do servidor:
      ```
      PORT=3333
      ```
    *Você pode alterar o valor da porta se desejar.*

## ▶️ Executando a Aplicação

Você pode usar os seguintes scripts definidos no `package.json`:

- **Para rodar em modo de desenvolvimento com watch (reinicia automaticamente ao salvar):**
  ```bash
  npm run start:watch
  ```

- **Para rodar em modo de desenvolvimento (sem watch):**
  ```bash
  npm run start:dev
  ```

O servidor estará disponível em `http://localhost:3333` (ou na porta que você configurou).

## Endpoints da API

### 1. Listar Todos os Episódios

Retorna a lista completa de todos os episódios de podcast.

- **URL:** `/api/list`
- **Método:** `GET`
- **Resposta de Sucesso (200 OK):**
  ```json
  [
      {
          "podcastName": "flow",
          "episode": "CBUM - Flow #319",
          "videoId": "pQSuQmUfS30",
          "categories": ["saúde", "esporte", "bodybuilder"]
      },
      {
          "podcastName": "venus",
          "episode": "xuxa",
          "videoId": "pQSuQmUfS30",
          "categories": ["piada"]
      }
  ]
  ```

### 2. Filtrar Episódios por Nome do Podcast

Retorna uma lista de episódios que correspondem ao nome do podcast fornecido.

- **URL:** `/api/episode`
- **Método:** `GET`
- **Parâmetros de Query:**
  - `podcastName` (string, **obrigatório**): O nome do podcast para filtrar.
- **Exemplo de Requisição:** `http://localhost:3333/api/episode?podcastName=flow`
- **Resposta de Sucesso (200 OK):** Uma lista de episódios do podcast "flow".
- **Resposta de Falha (400 Bad Request):** Se o parâmetro `podcastName` não for fornecido.
- **Resposta Sem Conteúdo (204 No Content):** Se nenhum episódio for encontrado para o filtro.
