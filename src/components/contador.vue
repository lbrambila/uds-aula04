<template>
  <div>
    <input type="number" v-model="entrada"/>
    <button @click="somarValor"> Somar </button>
    <button @click="subtrairValor"> Subtrair </button>
    <h2>{{valor}}</h2>
    <h2>{{ParOuImpar}}</h2>
    <h2>{{PositivoOuNegativo}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valor: 0,
      entrada: null,
    };
  },
  methods: {
    somarValor() {
      this.valor += parseInt(this.entrada, 10);
    },
    subtrairValor() {
      this.valor -= parseInt(this.entrada, 10);
    },
  },
  computed: {
    ParOuImpar() {
      if (this.valor % 2 === 0) {
        return 'Par';
      }
      return 'ímpar';
    },
    PositivoOuNegativo() {
      if (this.valor >= 0) {
        return 'positivo';
      }
      return 'negativo';
    },
  },
};
</script>

<style>
</style>
