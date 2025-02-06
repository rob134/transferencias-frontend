<template>
  <div>
    <h2>Extrato de Transferências</h2>
    <table>
      <thead>
        <tr>
          <th>Conta Origem</th>
          <th>Conta Destino</th>
          <th>Valor</th>
          <th>Taxa</th>
          <th>Data de Transferência</th>
          <th>Data de Agendamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transferencia in transferencias" :key="transferencia.id">
          <td>{{ transferencia.contaOrigem }}</td>
          <td>{{ transferencia.contaDestino }}</td>
          <td>R$ {{ transferencia.valor.toFixed(2) }}</td>
          <td>R$ {{ transferencia.taxa.toFixed(2) }}</td>
          <td>{{ transferencia.dataTransferencia }}</td>
          <td>{{ transferencia.dataAgendamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      transferencias: [], // Lista de transferências
    };
  },
  async created() {
    try {
      // Faz a requisição GET para a API backend
      const response = await axios.get('http://localhost:8080/transferencias');
      this.transferencias = response.data;
    } catch (error) {
      console.error('Erro ao carregar transferências:', error);
    }
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>