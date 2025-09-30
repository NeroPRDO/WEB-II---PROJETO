# 💻 Sistema de Controle de Manutenção de Equipamentos


[![Node](https://img.shields.io/badge/node-v22.18.0-brightgreen)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/npm-10.9.3-blue)](https://www.npmjs.com/)
[![Angular](https://img.shields.io/badge/angular-20.1.6-red)](https://angular.io/)
[![Status](https://img.shields.io/badge/status-development-yellow)]()

## Sumário

- [Sobre o Projeto](#📝-Sobre-o-Projeto)
- [Árvore de arquivos (Atual)](#🌲-Árvore-de-arquivos-(Atual))
- [Objetivos](#🎯-Objetivos)
- [Funcionalidades e Requisitos](#🛠️-Funcionalidades-e-Requisitos)
- [Versionamento das Ferramentas](#📌-Versionamento-das-Ferramentas)
- [Autoria](#Autoria)

  
## 📝 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma aplicação web utilizando Angular para o gerenciamento e controle de fluxo de atendimento focado na manutenção de equipamentos eletronicos. O principal objetivo da aplicação é simular desde a criação até a entrega de um produto único, contemplando toda o ciclo de desenvolvimento de forma estruturada. 

## 🌲 Árvore de arquivos (Atual)


```
\---WEB-II---PROJETO
    |   README.md
    |
    \---manutencao-equipamentos
        |   .editorconfig
        |   .gitignore
        |   angular.json
        |   package-lock.json
        |   package.json
        |   README.md
        |   tsconfig.app.json
        |   tsconfig.json
        |   tsconfig.spec.json
        |
        +---public
        |       favicon.ico
        |       LOGO.png
        |
        \---src
            |   index.html
            |   main.ts
            |   styles.css
            |
            \---app
                |   app.config.ts
                |   app.css
                |   app.html
                |   app.routes.ts
                |   app.spec.ts
                |   app.ts
                |
                +---atendimento
                |   +---orcamento
                |   |       orcamento.css
                |   |       orcamento.html
                |   |       orcamento.spec.ts
                |   |       orcamento.ts
                |   |
                |   \---visualizar-solicitacao
                |           visualizar-solicitacao.css
                |           visualizar-solicitacao.html
                |           visualizar-solicitacao.spec.ts
                |           visualizar-solicitacao.ts
                |
                +---cadastro
                |       cadastro.css
                |       cadastro.html
                |       cadastro.ts
                |
                +---cadastro-atendimento
                |       cadastro-atendimento.css
                |       cadastro-atendimento.html
                |       cadastro-atendimento.spec.ts
                |       cadastro-atendimento.ts
                |
                +---dashboard
                |       dashboard.css
                |       dashboard.html
                |       dashboard.ts
                |
                +---efetuar-orcamento
                |       efetuar-orcamento.css
                |       efetuar-orcamento.html
                |       efetuar-orcamento.spec.ts
                |       efetuar-orcamento.ts
                |
                +---historico
                |       historico.css
                |       historico.html
                |       historico.spec.ts
                |       historico.ts
                |
                +---login
                |       login.css
                |       login.html
                |       login.ts
                |
                +---manter-categoria
                |       manter-categoria.css
                |       manter-categoria.html
                |       manter-categoria.spec.ts
                |       manter-categoria.ts
                |
                +---manter-funcionario
                |       manter-funcionario.css
                |       manter-funcionario.html
                |       manter-funcionario.spec.ts
                |       manter-funcionario.ts
                |
                +---manutencao
                |       manutencao.css
                |       manutencao.html
                |       manutencao.spec.ts
                |       manutencao.ts
                |
                +---pagamento
                |       pagamento.css
                |       pagamento.html
                |       pagamento.spec.ts
                |       pagamento.ts
                |
                +---painel-funcinario
                |       painel-funcinario.css
                |       painel-funcinario.html
                |       painel-funcinario.spec.ts
                |       painel-funcinario.ts
                |
                +---relatorios
                |   +---relatorio-receitas-categoria
                |   |       relatorio-receitas-categoria.css
                |   |       relatorio-receitas-categoria.html
                |   |       relatorio-receitas-categoria.spec.ts
                |   |       relatorio-receitas-categoria.ts
                |   |
                |   \---relatorios-receitas
                |           relatorio-receitas.css
                |           relatorio-receitas.html
                |           relatorio-receitas.spec.ts
                |           relatorio-receitas.ts
                |
                +---services
                |       solicitacao.ts
                |
                +---servicos
                |       servicos.css
                |       servicos.html
                |       servicos.spec.ts
                |       servicos.ts
                |
                +---shared
                |   +---botao-servicos
                |   |       botao-servicos.css
                |   |       botao-servicos.html
                |   |       botao-servicos.spec.ts
                |   |       botao-servicos.ts
                |   |
                |   +---btn-gradient
                |   |       btn-gradient.css
                |   |       btn-gradient.html
                |   |       btn-gradient.spec.ts
                |   |       btn-gradient.ts
                |   |
                |   +---btn-login
                |   |       btn-login.css
                |   |       btn-login.html
                |   |       btn-login.spec.ts
                |   |       btn-login.ts
                |   |
                |   +---btn-seta
                |   |       btn-seta.css
                |   |       btn-seta.html
                |   |       btn-seta.spec.ts
                |   |       btn-seta.ts
                |   |
                |   +---footer-component
                |   |       footer.component.css
                |   |       footer.component.html
                |   |       footer.component.ts
                |   |
                |   +---icons
                |   |       icons.css
                |   |       icons.html
                |   |       icons.ts
                |   |
                |   +---link-text
                |   |       link-text.component.css
                |   |       link-text.component.html
                |   |       link-text.component.ts
                |   |
                |   +---Modal
                |   |       modal.css
                |   |       modal.html
                |   |       modal.spec.ts
                |   |       modal.ts
                |   |
                |   +---Nav
                |   |       nav.css
                |   |       nav.html
                |   |       nav.ts
                |   |
                |   +---novo-modal
                |   |       novo-modal.css
                |   |       novo-modal.html
                |   |       novo-modal.spec.ts
                |   |       novo-modal.ts
                |   |
                |   +---painel-acoes-funcionario
                |   |       painel-acoes-funcionario.css
                |   |       painel-acoes-funcionario.html
                |   |       painel-acoes-funcionario.spec.ts
                |   |       painel-acoes-funcionario.ts
                |   |
                |   +---panel
                |   |       panel.css
                |   |       panel.html
                |   |       panel.spec.ts
                |   |       panel.ts
                |   |
                |   +---relatorios
                |   |       relatorio-receitas.service.ts
                |   |
                |   \---table-chamado
                |           table-chamado.css
                |           table-chamado.html
                |           table-chamado.spec.ts
                |           table-chamado.ts
                |
                \---visualizar-servico
                        visualizar-servico.css
                        visualizar-servico.html
                        visualizar-servico.ts
```


---


## 🎯 Objetivos

- Gerenciar solicitações de manutenção de equipamentos eletrônicos.  
- Controlar estados do processo (aberta, orçada, aprovada, arrumada, paga, finalizada).  
- Proporcionar uma visão diferenciada para clientes e funcionários.  
- Oferecer relatórios financeiros em PDF.  
- Garantir usabilidade, segurança e integridade dos dados.  

---

## 🛠️ Funcionalidades e Requisitos

Ademais, o acesso ao sistema é feito por meio de 2 perfis: Cliente e Funcionário. Todas as funcionalidades necessitam login no sistema, exceto o Autocadastro de clientes e o próprio Login.

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

### ⚙️ Requisitos Não-Funcionais

- Layout responsivo e amigável  
- Senhas criptografadas (SHA-256 + SALT)  
- Validações no front e back-end  
- Banco normalizado (3FN)  
- Máscaras e formatação para datas e valores (padrão brasileiro)  
- Navegador de teste: **Firefox (versão mais recente)**  


---


## 📌 Versionamento das Ferramentas

**Versões testadas / recomendadas**
- Node.js: **v22.18.0 (LTS)**
- NPM: **10.9.3**
- Angular CLI / Angular: **20.1.6**

**Como checar localmente**
```bash
node -v
npm -v
ng version
```


---


## Autoria

Este projeto foi desenvolvido por: ( GRR/Nome - GitHub )

* GRR20242244/Dyego Dasko - Dasko7b

* GRR20246215/Gabriela Harres Rodrigues - GabrielaHarres

* GRR20241727/Maria Fernanda Zandona Casagrande - fe-fe

* GRR20243415/Matheus José Chaves de Lima - mateoclima

* GRR20240844/Pedro Eduardo Dall Agnol - NeroPRDO 

* GRR20241337/Thiago de Lima de Assis Cordeiro - Thiago-cordeiro
