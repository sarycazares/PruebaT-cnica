<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Prueba from './components/Prueba.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

    <h1> Prueba Datos </h1>


    </div>
  </header>

  <main>

      <button type="button"> Registro</button>
    
    <form> 
    <input  type="text" name="usuario" id="usuario" required/>
    <input  type="text" name="contrasena" id="contrasena" required/>
    <button type="button"> Iniciar Sesion</button>
    </form>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
