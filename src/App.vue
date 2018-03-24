<template>
  <div id="app">
    <nav id="menu">
      <ul>
        <li>
          <router-link to="/sobre">Dados Pessoais</router-link>
        </li>
        <li>
          <router-link to="/contador">Contador</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  #menu ul {
     background-color: #BDBDBD;
     padding: 0px;
     margin: 0px;
   }
  #menu ul  {
    display: inline;
   }
   #menu ul li {
     padding: 12px;
     display: inline-block;
     background-color:#848484;
     font-size: "15px";
     font-family: "script";
     font-weight: bold;
     border-radius: 25px 0px 25px 0px;
     box-shadow: 5px 0px 5px black;
     color: #0B0B61;
   }
   #menu ul li a:hover {
     color:#00FFFF;
   }
</style>
