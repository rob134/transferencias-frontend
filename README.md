
# Transferências Financeiras - Frontend

Este é o frontend do sistema de agendamento de transferências financeiras, desenvolvido com Vue.js.

## Tecnologias Utilizadas

- Vue.js
- Vue Router
- Axios (para chamadas HTTP)
- Bootstrap (opcional, para estilos)

## Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/transferencias-frontend.git
   ```
2. **Navegue até a pasta do projeto**:
   ```bash
   cd transferencias-frontend
   ```
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run serve
   ```
5. **Acesse a aplicação**:  
   Abra o navegador e acesse [http://localhost:8081](http://localhost:8081).

## Estrutura do Projeto

- `src/components/`: Componentes Vue.js.
  - `AgendamentoTransferencia.vue`: Formulário para agendar transferências.
  - `ExtratoTransferencias.vue`: Lista de transferências agendadas.
- `src/router/`: Configuração das rotas.
- `src/services/`: Chamadas HTTP para a API backend.
- `src/App.vue`: Componente raiz da aplicação.
