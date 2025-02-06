<template>
    <div>
      <h2>Agendar Transferência</h2>
      <form @submit.prevent="agendarTransferencia">
        <div>
          <label for="contaOrigem">Conta Origem:</label>
          <input
            type="text"
            id="contaOrigem"
            v-model="transferencia.contaOrigem"
            placeholder="Digite a conta de origem"
            required
          />
        </div>
  
        <div>
          <label for="contaDestino">Conta Destino:</label>
          <input
            type="text"
            id="contaDestino"
            v-model="transferencia.contaDestino"
            placeholder="Digite a conta de destino"
            required
          />
        </div>
  
        <div>
          <label for="valor">Valor:</label>
          <input
            type="number"
            id="valor"
            v-model="transferencia.valor"
            placeholder="Digite o valor"
            required
          />
        </div>
  
        <div>
          <label for="dataTransferencia">Data de Transferência:</label>
          <input
            type="date"
            id="dataTransferencia"
            v-model="transferencia.dataTransferencia"
            required
          />
        </div>
  
        <button type="submit">Agendar</button>
      </form>
  
      <div v-if="mensagemErro" class="erro">
        {{ mensagemErro }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        transferencia: {
          contaOrigem: '',
          contaDestino: '',
          valor: 0,
          dataTransferencia: '',
        },
        mensagemErro: '',
      };
    },
    methods: {
      async agendarTransferencia() {
        try {
          // Faz a requisição POST para a API backend
          // eslint-disable-next-line no-unused-vars
          const response = await axios.post(
            'http://localhost:8080/transferencias',
            this.transferencia
          );
  
          // Exibe mensagem de sucesso e redireciona para o extrato
          alert('Transferência agendada com sucesso!');
          this.$router.push('/extrato');
        } catch (error) {
          // Exibe mensagem de erro
          this.mensagemErro = 'Erro ao agendar transferência: ' + error.response.data;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .erro {
    color: red;
    margin-top: 10px;
  }
  </style>