<template>
  <div class="dados">
      <h1> <strong> Nome: </strong> {{Nome}} </h1>
      <h3> <strong>Idade: </strong> {{Idade}} </h3>
      <h3> <strong>Curso: </strong> {{Curso}} </h3>
  </div>
</template>
<script>
export default {
  name: 'LarissaBrambilaEstevo',
  data() {
    return {
      Nome: 'Larissa Brambila Estevo',
      Idade: '18 anos',
      Curso: 'Engenharia de Produção - Software',
    };
  },
};
</script>
<style>
  .dados {
    position: relative;
    top: 10px;
    left: 500px;
    text-align: center;
    border-style: solid;
    border-radius: 40px 0px 40px 0px;
    border-color: black;
    width: 500px;
    padding: -90px;
  }
  .nome {
    display: table;
    display: inline-grid;
  }
</style>
