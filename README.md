# 💻 Sistema de Controle de Manutenção de Equipamentos

[![Node](https://img.shields.io/badge/node-v22.18.0-brightgreen)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/npm-10.9.3-blue)](https://www.npmjs.com/)
[![Angular](https://img.shields.io/badge/angular-20.1.6-red)](https://angular.io/)
[![Status](https://img.shields.io/badge/status-development-yellow)]()

## Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Árvore de Arquivos (Atual)](#arvore-de-arquivos-atual)
- [Guia de Instalação e Execução](#guia-de-instalacao-e-execucao)
- [Rotas Principais](#rotas-principais)
- [Solução de Problemas](#solucao-de-problemas)
- [Objetivos](#objetivos)
- [Funcionalidades e Requisitos](#funcionalidades-e-requisitos)
- [Requisitos Não-Funcionais](#requisitos-nao-funcionais)
- [Versionamento das Ferramentas](#versionamento-das-ferramentas)
- [Autoria](#autoria)

---

<a id="sobre-o-projeto"></a>
## 📝 Sobre o Projeto

  Aplicação web em **Angular** para o gerenciamento e controle do fluxo de atendimento de **manutenção de equipamentos eletrônicos**. O objetivo é simular do **cadastro da solicitação** até a **entrega do equipamento**, cobrindo o ciclo completo de atendimento com visão para **cliente** e **funcionário**.

---

<a id="arvore-de-arquivos-atual"></a>
## 🌲 Árvore de Arquivos (Atual)


```

```


---

<a id="guia-de-instalacao-e-execucao"></a>
## 🚀 Guia de Instalação e Execução

### Pré-requisitos

- Node.js **v22.18.0 LTS**
- npm **10.9.3**
- Git instalado
- Angular CLI compatível (20.x)

Verifique versões:

```bash
node -v

npm -v
```

### Clonar o projeto

```bash
git clone https://github.com/Dasko7b/WEB-II---PROJETO.git

cd WEB-II---PROJETO/manutencao-equipamentos
```

### Instalar dependências

```bash
npm install
```

### Subir servidor de desenvolvimento

```bash

npm run

# npx ng serve
```

Acesse: **http://localhost:xxxx**

---

<a id="rotas-principais"></a>
## 🧭 Rotas Principais

- `/` → Dashboard  
- `/login` → Login  
- `/cadastro-atendimento` → Cadastro de chamado  
- `/func` → Painel do Funcionário  
- `/func/relatorios/receitas` → Relatório de Receitas  
- `/func/relatorios/receitas-categoria` → Relatório por Categoria  

---

<a id="solucao-de-problemas"></a>

## 🩺 Solução de Problemas

**Erro ENOENT: no such file or directory (package.json)**

- Garanta que está na pasta correta: `WEB-II---PROJETO/manutencao-equipamentos`.

**Cache corrompido do npm**

```bash
npm cache clean
npm install
```

**Angular CLI não encontrado**

```bash
npm install -g @angular/cli@20
# ou use npx: npx ng version
```

---

<a id="objetivos"></a>
## 🎯 Objetivos

- Gerenciar solicitações de manutenção de equipamentos eletrônicos.  
- Controlar estados do processo (aberta, orçada, aprovada, arrumada, paga, finalizada).  
- Proporcionar visão diferenciada para clientes e funcionários.  
- Oferecer relatórios financeiros em PDF.  
- Garantir usabilidade, segurança e integridade dos dados.  

---

<a id="funcionalidades-e-requisitos"></a>
## 🛠️ Funcionalidades e Requisitos

Acesso por **Cliente** e **Funcionário**. Todas as funcionalidades exigem login, exceto **Autocadastro** e **Login**.

- [ ] RF001 - Autocadastro  
- [ ] RF002 - Login  

### Requisitos do Cliente
- [ ] RF003 - Página Inicial de Cliente  
- [ ] RF004 - Solicitação de Manutenção  
- [ ] RF005 - Mostrar orçamento  
- [ ] RF006 - Aprovar Serviço  
- [ ] RF007 - Rejeitar Serviço  
- [ ] RF008 - Visualizar Serviço  
- [ ] RF009 - Resgatar Serviço  
- [ ] RF010 - Pagar Serviço  

### Requisitos de Funcionário
- [ ] RF011 - Página Inicial de Funcionário  
- [ ] RF012 - Efetuar Orçamento  
- [ ] RF013 - Visualização de Solicitações  
- [ ] RF014 - Efetuar Manutenção  
- [ ] RF015 - Redirecionar Manutenção  
- [ ] RF016 - Finalizar Solicitação  
- [ ] RF017 - CRUD de Categoria de Equipamento  
- [ ] RF018 - CRUD de Funcionários  
- [ ] RF019 - Relatório de Receitas em PDF  
- [ ] RF020 - Relatório de Receitas por Categoria em PDF  

---

<a id="requisitos-nao-funcionais"></a>
## ⚙️ Requisitos Não-Funcionais

- Layout responsivo e amigável  
- Senhas criptografadas (**SHA-256 + SALT**)  
- Validações no front e back-end  
- Banco normalizado (3FN)  
- Máscaras e formatação para datas e valores (padrão brasileiro)  
- Navegador de teste: **Firefox (mais recente)**  

---

<a id="versionamento-das-ferramentas"></a>
## 📌 Versionamento das Ferramentas

**Versões testadas / recomendadas**
- Node.js: **v22.18.0 (LTS)**
- npm: **10.9.3**
- Angular CLI / Angular: **20.1.6**

**Como checar localmente**

```bash
node -v
npm -v
npx ng version
```

---

<a id="autoria"></a>
## 👥 Autoria

Projeto desenvolvido por (GRR/Nome — GitHub):

- GRR20242244 / **Dyego Dasko** — [Dasko7b](https://github.com/Dasko7b)  
- GRR20246215 / **Gabriela Harres Rodrigues** — [GabrielaHarres](https://github.com/GabrielaHarres)  
- GRR20241727 / **Maria Fernanda Zandona Casagrande** — [fe-fe](https://github.com/fe-fe)  
- GRR20243415 / **Matheus José Chaves de Lima** — [mateoclima](https://github.com/mateoclima)  
- GRR20240844 / **Pedro Eduardo Dall Agnol** — [NeroPRDO](https://github.com/NeroPRDO)  
- GRR20241337 / **Thiago de Lima de Assis Cordeiro** — [Thiago-cordeiro](https://github.com/Thiago-cordeiro)
