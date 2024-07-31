# Equipe 3 - Participantes:
- Daniel  🔗 [mrdanp07](github.com/mrdanp07)
- Janderson 🔗 [jarderson4lmeida](github.com/jarderson4lmeida)
- Cesar 🔗[CesarMouraDev](github.com/CesarMouraDev)
- Hermes 🔗 [HermesWebDeveloper](github.com/HermesWebDeveloper)
- Fernanda
- Caio

## Escopo do projeto

Para a implementação deste projeto vamo precisar usar as seguintes tecnologias:

- **Node.js** para fornecer a possibilidade de executar JS em um servidor
- **Express.js** para criar rotas de api
- **Dotenv** para criarmos configurações com mais facilidade e segurança
- **Nodemon** para termos mais produtividade em nosso ambiente de desenvolvimento
- **MySQL** para persistência de dados
- **Sequelize** para termos mais produtividade ao lidar com o banco de dados 
- **JWT** para adicionar segurança e limitar o acesso nas rotas de API
- **JEST** para nos ajudar a testar e manter a qualidade do código

## Estrutura de diretório
```
project-root/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── tests/
├── .env
├── .gitignore
└── package.json
```

## Response status code
- [200 OK](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200)
  - Indica que a API REST executou com êxito qualquer ação solicitada pelo cliente
  - Ao contrário do código de status 204, uma   200 deve incluir um corpo de resposta
- [201 CREATED](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201)
  - Indica que a requisição foi bem sucedida e que um novo recurso foi criado
- [204 No content](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/204)
  - O código de status 204 geralmente é enviado em resposta a uma solicitação PUT ou DELETE quando a API se recusa a retornar qualquer corpo de mensagem no response
  - A resposta 204 NÃO DEVE incluir um corpo de mensagem
- [400 Bad Request](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400)
  - Indica que o servidor não pode ou não irá processar a requisição devido a alguma coisa que foi entendida como um erro do cliente
- [401 Unauthorized](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401)
  - Indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino
- [404 Not Found](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404)
  - Indica que o servidor não conseguiu encontrar o recurso solicitado


## Seção 01 - Implementar o banco de dados da aplicação

<details>
  <summary><strong>Requisito 01 - Criar a tabela de usuários</strong></summary><br>

O objetivo deste requisito é criar a tabela de usuários no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **id**: Coluna do tipo INTEGER que representa a chave primária da tabela. Seu valor deve ser incrementado automaticamente pelo banco de dados
- **firstname**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o primeiro nome do usuário
- **surname**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o sobrenome do usuário.
- **email**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o endereço de email do usuário
- **password**: Coluna do tipo STRING e de preenchimento obrigatório que armazena a senha do usuário. O valor a ser armazenado deve ser o hash da senha gerado pelo pacote bcrypt.

> Use a configuração `timestamps: true` do sequelize para gerar as colunas **created_at** e **updated_at**

</details>

<details>
  <summary><strong>Requisito 02 - Criar a tabela de categorias</strong></summary><br>

O objetivo deste requisito é criar a tabela de categorias no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **id**: Coluna do tipo INTEGER que representa a chave primária da tabela. Seu valor deve ser incrementado automaticamente pelo banco de dados
- **name**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o nome da categoria
- **slug**: Coluna do tipo STRING, e de preenchimento obrigatório que armazena o slug da categoria.
- **use_in_menu**: Coluna do tipo BOOLEAN e de preenchimento opcional que define se a categoria pode ser exibida no menu. Valor padrão deve ser 0.

> Use a configuração `timestamps: true` do sequelize para gerar as colunas **created_at** e **updated_at**

</details>

<details>
  <summary><strong>Requisito 03 - Criar a tabela de produtos</strong></summary><br>

O objetivo deste requisito é criar a tabela de produtos no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **id**: Coluna do tipo INTEGER que representa a chave primária da tabela. Seu valor deve ser incrementado automaticamente pelo banco de dados
- **enabled**: Coluna do tipo BOOLEAN e de preenchimento opcional que define se o produto está habilitado (1) ou desabilitado (0). Valor padrão deve ser 0.
- **name**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o nome do produto.
- **slug**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o slug do produto.
- **use_in_menu**: Coluna do tipo BOOLEAN e de preenchimento opcional que define se a categoria pode ser exibida no menu. Valor padrão deve ser 0.
- **stock**: Coluna do tipo INTEGER e de preenchimento opcional que armazena a quantidade de produto disponível. Valor padrão deve ser 0.
- **description**: Coluna do tipo STRING e de preenchimento opcional que armazena a descrição do produto.
- **price**: Coluna do tipo FLOAT e de preenchimento obrigatório que armazena o preço do produto. 
- **price_with_discount**: Coluna do tipo FLOAT e de preenchimento obrigatório que armazena o preço do produto com desconto. 

> Use a configuração `timestamps: true` do sequelize para gerar as colunas **created_at** e **updated_at**

</details>

<details>
  <summary><strong>Requisito 04 - Criar a tabela de imagens do produto</strong></summary><br>

O objetivo deste requisito é criar a tabela de imagens dos produtos no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **id**: Coluna do tipo INTEGER que representa a chave primária da tabela. Seu valor deve ser incrementado automaticamente pelo banco de dados
- **product_id**: Coluna do tipo INTEGER que representa a chave estrangeira da tabela. Seu valor deve ser uma referência de um valor existente na primary key da tabela de produtos
- **enabled**: Coluna do tipo BOOLEAN e de preenchimento opcional que define se o produto está habilitado (1) ou desabilitado (0). Valor padrão deve ser 0.
- **path**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o caminho relativo da imagem salva no servidor.

</details>

<details>
  <summary><strong>Requisito 05 - Criar a tabela de opções do produto</strong></summary><br>

O objetivo deste requisito é criar a tabela de opções do produto no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **id**: Coluna do tipo INTEGER que representa a chave primária da tabela. Seu valor deve ser incrementado automaticamente pelo banco de dados
- **product_id**: Coluna do tipo INTEGER e de preenchimento obrigatório que representa a chave estrangeira da tabela. Seu valor deve ser uma referência de um valor existente na primary key da tabela de produtos
- **title**: Coluna do tipo STRING e de preenchimento obrigatório que armazena o título da opção.
- **shape**: Coluna do tipo ENUM e de preenchimento opcional que armazena o formato em que a opção do produto deve ser renderizada. Essa coluna deve aceitar apenas dois valores (square ou circle). Valor padrão deve ser "square"
- **radius**: Coluna do tipo INTEGER e de preenchimento opcional que armazena o valor do `border-radius` da opção do produto. Valor padrão deve ser 0
- **type**: Coluna do tipo ENUM e de preenchimento opcional que armazena o tipo do input usado como opção. Essa coluna deve aceitar apenas dois valores (text ou color). Valor padrão deve ser "text"
- **values**: Coluna do tipo STRING e de preenchimento obrigatório que armazena todas as opção do produto separadas por vírgula.

</details>

<details>
  <summary><strong>Requisito 06 - Criar a tabela de produtos e categoria</strong></summary><br>

O objetivo deste requisito é criar a tabela de opções do produto no banco de dados utilizando o Sequelize ORM. A tabela deve conter as colunas a seguir:

- **product_id**: Coluna do tipo INTEGER e de preenchimento obrigatório que representa a chave estrangeira da tabela. Seu valor deve ser referência de um valor existente na primary key da tabela de produtos
- **category_id**: Coluna do tipo INTEGER e de preenchimento obrigatório que representa a chave estrangeira da tabela. Seu valor deve ser referência de um valor existente na primary key da tabela de categorias

</details>

## Seção 02 - Implementar endpoints para o CRUD de usuarios

<details>
  <summary><strong>Requisito 01 - Criar endpoint para obter informações do usuário pelo ID</strong></summary><br>
  
- GET /v1/user/:id

**Response body**
```json
{
  "id": 1,
  "firstname": "user firstname",
  "surname": "user surname",
  "email": "user@mail.com"
}  
```

**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>


<details>
  <summary><strong>Requisito 02 - Criar endpoint de cadastro de usuário</strong></summary><br>
  
- POST /v1/user

**Headers**
- Content-type: application/json

**Payload**

```json
{
  "firstname": "user firstname",
  "surname": "user surname",
  "email": "user@mail.com",
  "password": "123@123",
  "confirmPassword": "123@123",
}  
```

**Response Status Code**
- 201 Created - Deve ser retornado quando o cadastro for bem sucedido
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
</details>

<details>
  <summary><strong>Requisito 04 - Criar endpoint atualizar usuário</strong></summary><br>

  - PUT /v1/user/:id

**Headers**
- Content-type: application/json

**Payload**
```json
{
  "firstname": "user firstname",
  "surname": "user surname",
  "email": "user@mail.com",
}  
```

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>


<details>
  <summary><strong>Requisito 05 - Criar endpoint de deletar usuário</strong></summary><br>

- DELETE /v1/user/:id

**Headers**
- Content-type: application/json

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe

</details>

## Seção 03 - Implementar endpoints para o CRUD de categorias

<details>
  <summary><strong>Requisito 01 - Criar endpoint para obter uma lista de categorias</strong></summary><br>

- GET /v1/category/search

**Query params**
  - `limit=-1`
    - Query string para definir o limit de itens por página
    - Use `-1` como valor para buscar todos os itens
    - Padrão: 12
  - `page=1`
    - Query string para definir a paginação dos dados retornados
    - Quando `limit` receber `-1` a opção de `page` não tem nenhum efeito no resultado da busca e pode ser omitida da query string
    - Padrão: 1
  - `fields=name,slug`
    - Query string para limitar quais campos serão retornados
  - `use_in_menu=true`
    - Query string para filtrar apenas as categorias que podem aparecer no menu

**Response body**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Shoes",
      "slug": "shoes",
      "use_in_menu": true
    },
    {
      "id": 2,
      "name": "Offers",
      "slug": "offers",
      "use_in_menu": true
    },
    {
      "id": 3,
      "name": "Black Friday",
      "slug": "black-friday",
      "use_in_menu": false
    }
  ],
  "total": 10,
  "limit": -1,
  "page": 1
}  
```

**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
</details>

<details>
  <summary><strong>Requisito 02 - Criar endpoint para obter informações da categoria pelo ID</strong></summary><br>

- GET /v1/category/:id

**Response body**
```json
{
  "id": 1,
  "name": "Shoes",
  "slug": "shoes",
  "use_in_menu": true
}  
```

**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>


<details>
  <summary><strong>Requisito 03 - Criar endpoint de cadastro de categoria</strong></summary><br>

- POST /v1/category

**Headers**
- Content-type: application/json

**Payload**

```json
{
  "name": "Shoes",
  "slug": "shoes",
  "use_in_menu": true
}  
```

**Response Status Code**
- 201 Created - Deve ser retornado quando o cadastro for bem sucedido
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
</details>

<details>
  <summary><strong>Requisito 04 - Criar endpoint de atualização de categoria</strong></summary><br>

- PUT /v1/category/:id

**Headers**
- Content-type: application/json

**Payload**
```json
{
  "name": "Shoes",
  "slug": "shoes",
  "use_in_menu": true
} 
```

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>

<details>
  <summary><strong>Requisito 05 - Criar endpoint de deletar categoria</strong></summary><br>

- DELETE /v1/category/:id

**Headers**
- Content-type: application/json

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>

## Seção 04 - Implementar endpoints para o CRUD de produtos

<details>
  <summary><strong>Requisito 01 - Criar endpoint para obter uma lista de produtos</strong></summary><br>

- GET /v1/product/search

**Query params**
  - `limit=30`
    - Query string para definir o limit de itens por página
    - Use `-1` como valor para buscar todos os itens
    - Padrão: 12
  - `page=2`
    - Query string para definir a paginação dos dados retornados
    - Quando `limit` receber `-1` a opção de `page` não tem nenhum efeito no resultado da busca e pode ser omitida da query string
    - Padrão: 1
  - `fields=name,images,price`
    - Query string para limitar quais campos serão retornados
  - `match=Tênis`
    - Query string usada para filtrar o resultado de produtos por um termo que combine com o nome ou descrição do produto
  - `category_ids=15,24`
    - Query string usada para filtrar o resultado de produtos pelo ID das categorias
  - `price-range=100-200`
    - Query string para filtrar o resultado de produtos por uma determinada "janela" de preços 
  - `option[45]=GG,PP`
    - Query string para filtrar o resultado de produtos pelo valor das opções disponíveis

**Response body**
```json
{
  "data": [
    {
      "id": 1,
      "enabled": true,
      "name": "Produto 01",
      "slug": "produto-01",
      "stock": 10,
      "description": "Descrição do produto 01",
      "price": 119.90,
      "price_with_discount": 99.90,
      "category_ids": [1, 15, 24, 68],
      "images": [
        {
          "id": 1,
          "content": "https://store.com/media/product-01/image-01.png"
        },
        {
          "id": 2,
          "content": "https://store.com/media/product-01/image-02.png"
        },
        {
          "id": 3,
          "content": "https://store.com/media/product-01/image-02.jpg"
        }
      ],
      "options": [
        { 
          "id": 1
          ... 
        },
        { 
          "id": 2
          ... 
        }
      ]
    }
  ],
  "total": 120,
  "limit": 12,
  "page": 1,
}  
```
**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
</details>

<details>
  <summary><strong>Requisito 02 - Criar endpoint para obter informações do produto pelo ID</strong></summary><br>

- GET /v1/product/:id

**Response body**
```json
{
  "id": 1,
  "enabled": true,
  "name": "Produto 01",
  "slug": "product-01",
  "stock": 10,
  "description": "Descrição do produto 01",
  "price": 119.90,
  "price_with_discount": 99.90,
  "category_ids": [1, 15, 24, 68],
  "images": [
    {
      "id": 1,
      "content": "https://store.com/media/product-01/image-01.png"
    },
    {
      "id": 2,
      "content": "https://store.com/media/product-01/image-02.png"
    },
    {
      "id": 3,
      "content": "https://store.com/media/product-01/image-02.jpg"
    }
  ],
  "options": [
    { 
      "id": 1
      ... 
    },
    { 
      "id": 2
      ... 
    }
  ]
}  
```

**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>

<details>
  <summary><strong>Requisito 03 - Criar endpoint de criação de produto</strong></summary><br>

- POST /v1/product

**Headers**
- Content-type: application/json

**Payload**

```json
  {
    "enabled": true,
    "name": "Produto 01",
    "slug": "produto-01",
    "stock": 10,
    "description": "Descrição do produto 01",
    "price": 119.90,
    "price_with_discount": 99.90,
    "category_ids": [1, 15, 24, 68],
    "images": [ 
      {
        "type": "image/png",
        "content": "base64 da imagem 1" 
      },
      {
        "type": "image/png",
        "content": "base64 da imagem 2" 
      },
      {
        "type": "image/jpg",
        "content": "base64 da imagem 3" 
      }
    ],
    "options": [
      {
        "title": "Cor",
        "shape": "square",
        "radius": "4px",
        "type": "text",
        "value": ["PP", "GG", "M"]
      },
      {
        "title": "Tamanho",
        "shape": "circle",
        "type": "color",
        "values": ["#000", "#333"]
      }
    ]
  }
  ```

**Response Status Code**
- 201 Created - Deve ser retornado quando o cadastro for bem sucedido
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
</details>

<details>
  <summary><strong>Requisito 04 - Criar endpoint de atualização de produto</strong></summary><br>

- PUT /v1/product/:id

**Headers**
- Content-type: application/json

**Payload**

```json
  {
    "enabled": true,
    "name": "Produto 01 atualizado",
    "slug": "produto-01-atualizado",
    "stock": 20,
    "description": "Descrição do produto 01 atualizado",
    "price": 49.9,
    "price_with_discount": 0,
    "category_ids": [1, 15, 24, 68],
    "images": [ 
      {
        "type": "image/png",
        "content": "base64 da imagem 1" 
      },
      {
        "id": 2,
        "deleted": true
      },
      {
        "id": 3,
        "content": "base64 da imagem 3" 
      },
      {
        "id": 1,
        "content": "https://store.com/media/product-01/image-01.jpg"
      }
    ],
    "options": [
      {
        "id": 1,
        "deleted": true,
      }
      {
        "id": 2,
        "radius": "10px",
        "value": ["42/43", "44/45"]
      },
      {
        "title": "Tipo",
        "shape": "square",
        "type": "text",
        "values": ["100% algodão", "65% algodão"]
      }
    ]
  }
  ```

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>


<details>
  <summary><strong>Requisito 05 - Criar endpoint de atualização de produto</strong></summary><br>

- DELETE /v1/product/:id

**Headers**
- Content-type: application/json

**Response Status Code**
- 204 No Content - Deve ser retornado quando a requisição foi bem sucedida mas nenhum corpo deve ser retornado.
- 401 Unauthorized - Deve ser retornado quando o token de autorização não for enviado ou estiver incorreto
- 404 Not Found - Deve ser retornado quando o recurso solicitado não existe
</details>


## Seção 05 - Implementar e validar token JWT
<details>
  <summary><strong>Requisito 01 - Criar endpoint de geração do token JWT</strong></summary><br>

- POST /v1/user/token

**Headers**
- Content-type: application/json

**Payload**

```json
{
  "email": "user@mail.com",
  "password": "123@123",
}  
```

**Response body**
```json
{
  "token": "<JWT>",
}  
```

**Response Status Code**
- 200 OK - Deve ser retornado quando a requisição foi bem sucedida
- 400 Bad Request - Deve ser retornado quando a os dados da requisição estiverem incorretos
</details>

<details>
  <summary><strong>Requisito 02 - Validar token nos métodos POST, PUT e DELETE</strong></summary><br>

  Todos os endpoints POST, PUT e DELETE devem conter o cabeçalho `Authorization: Bearer <jwt>`, caso contrario a requisição
  deve ser rejeitada com o status code **400 Bad Request**
<details>
