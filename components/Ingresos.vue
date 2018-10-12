<template>
  <div class="row">
    <h1>Ingresos personales o familiares</h1>
    <div class="row">
      <div class="col l4">
        <h5 class="center-align">Cuota aproximada</h5>
        <h1 class="center-align">$ {{toCurrency(cuota)}}</h1>
      </div>
      <div class="col l4">
        <h5 class="center-align">Crédito Estimado</h5>
        <h1 class="center-align">$ {{toCurrency(credito)}}</h1>
      </div>
      <div class="col l4">
        <h5 class="center-align">Desceuento FRECH NO VIS</h5>
        <h1 class="center-align">$ {{toCurrency(descuentoFrech)}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['calcParams', 'money'],
    data(){
      return {
      }
    },
    computed: {
      cuota(){
        return Math.round(this.money / this.calcParams.valueIngresos / 1000, 0) * 1000
      },
      credito(){
        let i = this.calcParams.interest / 100
        let n = this.calcParams.years
        let p = this.cuota
        var vp = p * 12 / ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1))
        return Math.round(vp / 1000, 0) * 1000
      },
      descuentoFrech(){
        return Math.round(this.cuota * this.calcParams.frechNoVis / 1000, 0) * 1000
      }

    },
    methods: {
      // currency format
      toCurrency(value) {
        var val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
    }
  }
</script>

<style media="screen">
</style>
