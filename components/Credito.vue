<template>
  <div class="row">
    <p class="center-align" v-show="!money">
      Por favor ingresa un valor de crédito para calcular.
    </p>
    <p class="center-align" v-show="money">
      Al financiar los <strong>$ {{toCurrency(money)}}</strong> tendrás:
    </p>
    <div class="row middle">
      <div class="col s12 up-down-margin darken-1 tiny-radius white-text">
        <h4 class="thin center-align without-margin">La cuota Estimada es</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(cuota)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-1 tiny-radius white-text">
        <h4 class="thin center-align without-margin">Ingresos personales o familiares</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(ingresos)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-1 tiny-radius white-text">
        <h4 class="thin center-align without-margin">Cuota con descuento FRECH NO VIS</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(descuentoFrech)}}</h1>
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
        let i = this.calcParams.interest / 100
        let n = this.calcParams.years
        let vp = this.money
        var cuota = vp * ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1)) / 12
        return Math.round(cuota / 1000, 0) * 1000
      },
      ingresos(){
        return Math.round(this.cuota * this.calcParams.valueIngresos / 1000, 0) * 1000
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
