import Vue from 'vue';
import Router from 'vue-router';
import AgendamentoTransferencia from '../components/AgendamentoTransferencia.vue';
import ExtratoTransferencias from '../components/ExtratoTransferencias.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: AgendamentoTransferencia },
    { path: '/extrato', component: ExtratoTransferencias },
  ],
});