<template>
  <div class="row">
    <p class="center-align" v-show="!money">
      Por favor ingresa un valor de cuota para calcular.
    </p>
    <p class="center-align" v-show="money">
      Basado en tu cuota <strong>$ {{toCurrency(money)}}</strong> tendrás:
    </p>
    <div class="row">
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
        <h4 class=" thin center-align without-margin"><span class="fas fa-hand-holding-usd fa-lg"></span>  Crédito estimado</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(credito)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
        <h4 class=" thin center-align without-margin"><span class="fas fa-users fa-lg"></span>  Ingresos personales o familiares</h4>
        <h1 class="center-align without-margin">$ {{toCurrency(ingresos)}}</h1>
      </div>
      <div class="col s12 up-down-margin darken-2 tiny-radius white-text">
        <h4 class=" thin center-align without-margin"><span class="fas fa-user-tag fa-lg"></span>  Cuota con descuento FRECH NO VIS</h4>
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
      credito(){
        let i = this.calcParams.interest / 100
        let n = this.calcParams.years
        let pago = this.money
        var vp = pago * 12 / ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1))
        return Math.round(vp / 1000, 0) * 1000
      },
      ingresos(){
        return Math.round(this.money * this.calcParams.valueIngresos / 1000, 0) * 1000
      },
      descuentoFrech(){
        return Math.round(this.money * this.calcParams.frechNoVis / 1000, 0) * 1000
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
