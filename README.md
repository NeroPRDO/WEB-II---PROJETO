# 💻 Sistema de Controle de Manutenção de Equipamentos

[![Node](https://img.shields.io/badge/node-v22.18.0-brightgreen)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/npm-10.9.3-blue)](https://www.npmjs.com/)
[![Angular](https://img.shields.io/badge/angular-20.1.6-red)](https://angular.io/)
[![Status](https://img.shields.io/badge/status-development-yellow)]()

## 📚 Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Instalação e Execução](#🚀-guia-de-instalação-e-execução)
4. [Rotas da Aplicação](#🧭-rotas-principais)
5. [Objetivos](#🎯-objetivos)
6. [Funcionalidades e Requisitos](#🛠️-funcionalidades-e-requisitos)
7. [Requisitos Não-Funcionais](#⚙️-requisitos-não-funcionais)
8. [Solução de Problemas Comuns](#🩺-solução-de-problemas)
9. [Estrutura de Diretórios](#🌲-árvore-de-arquivos-atual)
10. [Autoria](#👥-autoria)

---

<a id="sobre-o-projeto"></a>
## 📝 Sobre o Projeto

  Aplicação web em **Angular** para o gerenciamento e controle do fluxo de atendimento de **manutenção de equipamentos eletrônicos**. O objetivo é simular do **cadastro da solicitação** até a **entrega do equipamento**, cobrindo o ciclo completo de atendimento com visão para **cliente** e **funcionário**.


---

## 🏗 Arquitetura do Sistema

- **Frontend**: SPA em Angular organizada em modelos, serviços, componentes dinâmicos e páginas modulares.
- **Backend**: API REST Java com controllers, services e repositories.
- **Padrões**: Componentização, DTOs, validação e modularização.

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

<a id="arvore-de-arquivos-atual"></a>
## 🌲 Árvore de Arquivos (Atual)
Para controle de versão*

```
\---WEB-II---PROJETO
    |   package-lock.json
    |   README.md
    |
    +---backend-web-api
    |   |   .gitattributes
    |   |   .gitignore
    |   |   mvnw
    |   |   mvnw.cmd
    |   |   pom.xml
    |   |
    |   +---.mvn
    |   |   \---wrapper
    |   |           maven-wrapper.properties
    |   |
    |   \---src
    |       +---main
    |       |   +---java
    |       |   |   \---br
    |       |   |       \---com
    |       |   |           \---webdois
    |       |   |               \---backend_web_api
    |       |   |                   |   BackendWebApiApplication.java
    |       |   |                   |
    |       |   |                   +---config
    |       |   |                   |       AdminSeeder.java
    |       |   |                   |       OpenAPIConfig.java
    |       |   |                   |       SecurityConfig.java
    |       |   |                   |
    |       |   |                   +---controller
    |       |   |                   |       CategoriaController.java
    |       |   |                   |       EquipamentoController.java
    |       |   |                   |       SolicitacaoController.java
    |       |   |                   |       TokenController.java
    |       |   |                   |       UsuarioController.java
    |       |   |                   |
    |       |   |                   +---dtos
    |       |   |                   |       CategoriaRequestDTO.java
    |       |   |                   |       CategoriaResponseDTO.java
    |       |   |                   |       LoginRequestDTO.java
    |       |   |                   |       LoginResponseDTO.java
    |       |   |                   |       RegisterRequestDTO.java
    |       |   |                   |       SolicitacaoDTO.java
    |       |   |                   |       SolicitacaoResponseDTO.java
    |       |   |                   |       UsuarioSolicitacaoDTO.java
    |       |   |                   |
    |       |   |                   +---entity
    |       |   |                   |       Categoria.java
    |       |   |                   |       Chamado.java
    |       |   |                   |       Equipamento.java
    |       |   |                   |       EstadoChamado.java
    |       |   |                   |       Role.java
    |       |   |                   |       Solicitacao.java
    |       |   |                   |       Usuario.java
    |       |   |                   |
    |       |   |                   +---repository
    |       |   |                   |       CategoriaRepository.java
    |       |   |                   |       EquipamentoRepository.java
    |       |   |                   |       SolicitacaoRepository.java
    |       |   |                   |       UsuarioRepository.java
    |       |   |                   |
    |       |   |                   \---service
    |       |   |                           CategoriaService.java
    |       |   |                           EquipamentoService.java
    |       |   |                           MailService.java
    |       |   |                           SenhaService.java
    |       |   |                           SolicitacaoService.java
    |       |   |                           UsuarioService.java
    |       |   |
    |       |   \---resources
    |       |           application.properties
    |       |           application.properties.example
    |       |           private.pem
    |       |           public.pem
    |       |
    |       \---test
    |           \---java
    |               \---br
    |                   \---com
    |                       \---webdois
    |                           \---backend_web_api
    |                                   BackendWebApiApplicationTests.java
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
                |   app.ts
                |   auth-guard.spec.ts
                |   auth-guard.ts
                |
                +---models
                |       chamadoModel.ts
                |       clienteModel.ts
                |       funcionarioModel.ts
                |
                +---pages
                |   +---cliente
                |   |   +---cadastro-atendimento
                |   |   |       cadastro-atendimento.css
                |   |   |       cadastro-atendimento.html
                |   |   |       cadastro-atendimento.ts
                |   |   |
                |   |   +---dashboard
                |   |   |       dashboard.css
                |   |   |       dashboard.html
                |   |   |       dashboard.ts
                |   |   |
                |   |   +---historico
                |   |   |       historico.css
                |   |   |       historico.html
                |   |   |       historico.ts
                |   |   |
                |   |   +---pagamento
                |   |   |       pagamento.css
                |   |   |       pagamento.html
                |   |   |       pagamento.ts
                |   |   |
                |   |   +---servicos
                |   |   |       servicos.css
                |   |   |       servicos.html
                |   |   |       servicos.spec.ts
                |   |   |       servicos.ts
                |   |   |
                |   |   \---visualizar-servico
                |   |           visualizar-servico.css
                |   |           visualizar-servico.html
                |   |           visualizar-servico.ts
                |   |
                |   +---funcionario
                |   |   +---atendimento
                |   |   |   +---orcamento
                |   |   |   |       orcamento.css
                |   |   |   |       orcamento.html
                |   |   |   |       orcamento.spec.ts
                |   |   |   |       orcamento.ts
                |   |   |   |
                |   |   |   \---visualizar-solicitacao
                |   |   |           visualizar-solicitacao.css
                |   |   |           visualizar-solicitacao.html
                |   |   |           visualizar-solicitacao.spec.ts
                |   |   |           visualizar-solicitacao.ts
                |   |   |
                |   |   +---efetuar-orcamento
                |   |   |       efetuar-orcamento.css
                |   |   |       efetuar-orcamento.html
                |   |   |       efetuar-orcamento.ts
                |   |   |
                |   |   +---manter-categoria
                |   |   |       manter-categoria.css
                |   |   |       manter-categoria.html
                |   |   |       manter-categoria.spec.ts
                |   |   |       manter-categoria.ts
                |   |   |
                |   |   +---manter-funcionario
                |   |   |       manter-funcionario.css
                |   |   |       manter-funcionario.html
                |   |   |       manter-funcionario.spec.ts
                |   |   |       manter-funcionario.ts
                |   |   |
                |   |   +---manutencao
                |   |   |       manutencao.css
                |   |   |       manutencao.html
                |   |   |       manutencao.spec.ts
                |   |   |       manutencao.ts
                |   |   |
                |   |   +---painel-funcinario
                |   |   |       painel-funcinario.css
                |   |   |       painel-funcinario.html
                |   |   |       painel-funcinario.spec.ts
                |   |   |       painel-funcinario.ts
                |   |   |
                |   |   +---relatorios
                |   |   |   +---relatorio-receitas-categoria
                |   |   |   |       relatorio-receitas-categoria.css
                |   |   |   |       relatorio-receitas-categoria.html
                |   |   |   |       relatorio-receitas-categoria.ts
                |   |   |   |
                |   |   |   \---relatorios-receitas
                |   |   |           relatorio-receitas.css
                |   |   |           relatorio-receitas.html
                |   |   |           relatorio-receitas.spec.ts
                |   |   |           relatorio-receitas.ts
                |   |   |
                |   |   \---relatorios-home
                |   |           relatorios-home.css
                |   |           relatorios-home.html
                |   |           relatorios-home.ts
                |   |
                |   \---logar
                |       +---cadastro
                |       |       cadastro.css
                |       |       cadastro.html
                |       |       cadastro.ts
                |       |
                |       \---login
                |               login.css
                |               login.html
                |               login.ts
                |
                +---services
                |       categoriaService.ts
                |       clienteService.ts
                |       solicitacao.ts
                |
                \---shared
                    +---botao-servicos
                    |       botao-servicos.css
                    |       botao-servicos.html
                    |       botao-servicos.spec.ts
                    |       botao-servicos.ts
                    |
                    +---botao-switch
                    |       botao-switch.css
                    |       botao-switch.html
                    |       botao-switch.spec.ts
                    |       botao-switch.ts
                    |
                    +---btn-gradient
                    |       btn-gradient.css
                    |       btn-gradient.html
                    |       btn-gradient.spec.ts
                    |       btn-gradient.ts
                    |
                    +---btn-login
                    |       btn-login.css
                    |       btn-login.html
                    |       btn-login.spec.ts
                    |       btn-login.ts
                    |
                    +---btn-logout
                    |       btn-logout.css
                    |       btn-logout.html
                    |       btn-logout.spec.ts
                    |       btn-logout.ts
                    |
                    +---btn-send
                    |       btn-send.css
                    |       btn-send.html
                    |       btn-send.spec.ts
                    |       btn-send.ts
                    |
                    +---btn-seta
                    |       btn-seta.css
                    |       btn-seta.html
                    |       btn-seta.spec.ts
                    |       btn-seta.ts
                    |
                    +---btn-switch
                    |       btn-switch.css
                    |       btn-switch.html
                    |       btn-switch.spec.ts
                    |       btn-switch.ts
                    |
                    +---cartao
                    |       cartao.css
                    |       cartao.html
                    |       cartao.spec.ts
                    |       cartao.ts
                    |
                    +---footer-component
                    |       footer.component.css
                    |       footer.component.html
                    |       footer.component.ts
                    |
                    +---icons
                    |       icons.css
                    |       icons.html
                    |       icons.ts
                    |
                    +---icons-footer
                    |       icons-footer.css
                    |       icons-footer.html
                    |       icons-footer.spec.ts
                    |       icons-footer.ts
                    |
                    +---link-text
                    |       link-text.component.css
                    |       link-text.component.html
                    |       link-text.component.ts
                    |
                    +---loader
                    |       loader.css
                    |       loader.html
                    |       loader.spec.ts
                    |       loader.ts
                    |
                    +---Modal
                    |       modal.css
                    |       modal.html
                    |       modal.spec.ts
                    |       modal.ts
                    |
                    +---Nav
                    |       nav.css
                    |       nav.html
                    |       nav.ts
                    |
                    +---novo-modal
                    |       novo-modal.css
                    |       novo-modal.html
                    |       novo-modal.spec.ts
                    |       novo-modal.ts
                    |
                    +---outro-switch
                    |       outro-switch.css
                    |       outro-switch.html
                    |       outro-switch.spec.ts
                    |       outro-switch.ts
                    |
                    +---painel-acoes-funcionario
                    |       painel-acoes-funcionario.css
                    |       painel-acoes-funcionario.html
                    |       painel-acoes-funcionario.spec.ts
                    |       painel-acoes-funcionario.ts
                    |
                    +---panel
                    |       panel.css
                    |       panel.html
                    |       panel.spec.ts
                    |       panel.ts
                    |
                    +---relatorios
                    |       relatorio-receitas.service.ts
                    |
                    +---simple-select
                    |       simple-select.css
                    |       simple-select.html
                    |       simple-select.spec.ts
                    |       simple-select.ts
                    |
                    \---table-chamado
                            table-chamado.css
                            table-chamado.html
                            table-chamado.spec.ts
                            table-chamado.ts
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
---
> 📢 **Aviso:**  
> - Este projeto foi desenvolvido exclusivamente para fins acadêmicos e de aprendizado no contexto da disciplina de Desenvolvimento Web II.  
> - Não possui finalidade comercial e não deve ser utilizado como solução definitiva em ambientes de produção.  
> - Algumas funcionalidades, regras de negócio e práticas de segurança podem ter sido simplificadas com o objetivo de estudo.