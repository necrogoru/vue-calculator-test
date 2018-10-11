<template>
  <div class="row">
    <h4 class="center-align">Calcula tú crédito</h4>
    <div class="row">
      <form class="s-radius">

        <div class="col s12 m6">
          <p class="range-field">
            <input type="range" id="test5" min="12" max="20" />
          </p>
        </div>
        <div class="col s12 m6">
          <p class="range-field">
            <input type="range" id="test5" min="1" max="20" />
          </p>
        </div>

        <div class="col s12">
          <div class="col s12 m4">

          </div>
          <div class="col s12 m4">

          </div>
          <div class="col s12 m4">

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  
  import Credito from '~/components/Credito.vue'
  import Cuota from '~/components/Cuota.vue'
  import Ingresos from '~/components/Ingresos.vue'

  export default {
    components: {
      Credito,
      Cuota,
      Ingresos
    }
  }
</script>

<style>
  .s-radius{
    border-radius: 5px
  }
</style>
