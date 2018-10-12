<template>
  <div class="row">
    <h4 class="center-align">Calcula tú crédito</h4>
    <form class="s-radius">
      <div class="row">
        <div class="col s12 l6">
          <p class="center-align">Interes</p><br>
          <p class="range-field">
            <input type="range" min="10" max="20" id="interest" ref="interest" v-model="calcParams.interest" />
          </p>
        </div>
        <div class="col s12 l6">
          <p class="center-align">Cantidad de años</p><br>
          <p class="range-field">
            <input type="range" min="1" max="20" id="years" ref="years" v-model="calcParams.years" />
          </p>
        </div>
        <div class="col s12">
          <p class="center-align">¿Cómo deseas evaluar tu cŕedito?</p>
          <div class="col s12">
            <select class="custom-select" id="tipo" v-model="calcSelected">
              <option v-for="(calculator, id) in calculators" :value="id">{{calculator}}</option>
            </select>
          </div>
        </div>
        <div class="row center">
          <div class="col s8 l4">
            <input type="number" placeholder="$1.000.000" v-model="calcParams.money">
          </div>
        </div>
        <div class="col s12">
          <div class="col s12">
            <credito :calc-params="calcParams" />
          </div>
          <div class="col s12">
            <cuota :calc-params="calcParams" />
          </div>
          <div class="col s12">
            <ingresos :calc-params="calcParams" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// TODO: Add currency format for inputs and results
// TODO: add effects and animate form inputs
// TODO: Add transitions fonr calculators
  import Credito from '~/components/Credito.vue'
  import Cuota from '~/components/Cuota.vue'
  import Ingresos from '~/components/Ingresos.vue'

  export default {
    data() {
      return {
        calcParams: {
          interest: 12,
          years: 15,
          money: 0,
          frechNoVis:0.949346405228758,
          valueIngresos: 3.333333333333330
        },
        calcSelected: 0,
        calculators: [
          'Crédito a financiar',
          'Cuota a pagar',
          'Mis ingresos personales o familiares'
        ]
      }
    },
    components: {
      Credito,
      Cuota,
      Ingresos
    }
  }
</script>

<style>
  /* etiquetas html */
  form, input, select{
    width: 100%
  }

  p{
    flex: 0 0 100%;
    margin: 10px 0
  }

  /* grid */
  .row{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  .col{
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    padding: 0 8px
  }
  /* classes for smartphone */
  @media only screen and (max-width: 660px){

  }
  .s1{flex: 0 0 8.33333333333333%}
  .s2{flex: 0 0 16.6666666666667%}
  .s3{flex: 0 0 25%}
  .s4{flex: 0 0 33.3333333333333%}
  .s5{flex: 0 0 41.6666666666667%}
  .s6{flex: 0 0 50%}
  .s7{flex: 0 0 58.3333333333333%}
  .s8{flex: 0 0 66.6666666666667%}
  .s9{flex: 0 0 75%}
  .s10{flex: 0 0 83.3333333333333%}
  .s11{flex: 0 0 91.6666666666667%}
  .s12{flex: 0 0 100%}
  /* classes for desktop */
  @media only screen and (min-width: 661px) {
    .l1{flex: 0 0 8.33333333333333% !important}
    .l2{flex: 0 0 16.6666666666667% !important}
    .l3{flex: 0 0 25% !important}
    .l4{flex: 0 0 33.3333333333333% !important}
    .l5{flex: 0 0 41.6666666666667% !important}
    .l6{flex: 0 0 50% !important}
    .l7{flex: 0 0 58.3333333333333% !important}
    .l8{flex: 0 0 66.6666666666667% !important}
    .l9{flex: 0 0 75% !important}
    .l10{flex: 0 0 83.3333333333333% !important}
    .l11{flex: 0 0 91.6666666666667% !important}
    .l12{flex: 0 0 100% !important}
  }
  /* helpers */
  .s-radius{
    border-radius: 5px
  }
  .center{justify-content: center;}
  .custom-select{
    background-color: rgb(255, 255, 255);
    color: rgb(21, 21, 85);
    border: none;
    border-bottom: 1px solid rgb(125, 123, 171)
  }
  .center-align{text-align: center;}

</style>
