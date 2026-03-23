# 🛒 Mini Shop

Aplicação web de e-commerce simples desenvolvida com React, com funcionalidades de listagem de produtos e carrinho de compras.

---

## 🚀 Tecnologias utilizadas

* React
* JavaScript
* Vite
* CSS

---

## 📦 Funcionalidades

* Listar produtos
* Adicionar produtos ao carrinho
* Remover produtos do carrinho
* Aumentar/diminuir quantidade
* Calcular total da compra
* Persistência do carrinho (localStorage)

---

## 📁 Estrutura do projeto

```
src/
 ├── components/
 │   ├── ProductCard.jsx
 │   └── CartItem.jsx
 ├── data/
 │   └── products.js
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Rodar o projeto

```bash
npm run dev
```

---

### 3. Acessar no navegador

```
http://localhost:5173
```

---

## 🛒 Como funciona o carrinho

* Os produtos são adicionados ao carrinho ao clicar no botão
* Se o produto já existir, a quantidade é incrementada
* O carrinho é salvo no navegador usando `localStorage`
* O total é calculado multiplicando preço × quantidade

---

## 🧠 Lógica importante

### ➕ Adicionar ao carrinho

* Verifica se o item já existe
* Se existir → aumenta a quantidade
* Se não → adiciona novo item

### ➖ Remover item

* Diminui a quantidade
* Remove completamente se chegar a 0

---

## 📌 Observações

* Projeto focado em aprendizado de React
* Não possui backend integrado
* Pode ser expandido para consumir uma API

---

## 🧑‍💻 Autor

Desenvolvido por Luana Arruda 💙

---

## 📄 Licença

Este projeto é apenas para fins de estudo.
