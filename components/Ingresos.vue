<template>
  <div class="row">
    <p class="center-align" v-show="!money">
      Por favor ingresa un valor de ingresos para calcular.
    </p>
    <p class="center-align" v-show="money">
      Basados en tus ingresos de <strong>$ {{toCurrency(money)}}</strong> tendrás:
    </p>
    <div class="row">
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
        <h4 class="thin center-align without-margin">La cuota Estimada es</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(cuota)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
        <h4 class="thin center-align without-margin">Crédito Estimado</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(credito)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
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
