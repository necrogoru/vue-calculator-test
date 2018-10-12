<template>
  <div class="row">
    <h4 class="center-align">Calcula tú crédito</h4>
    <form class="s-radius custom-form" :class="'bg-'+calcSelected">
      <div class="row">

        <div class="col s12 l6 center">
          <p class="center-align">Interes</p><br>
          <p class="input-field">
            <span class="without-style center-align">10%</span>
            <input type="range" min="10" max="20" id="range-interest" ref="range-interest" v-model="calcParams.interest" />
            <span class="without-style center-align">20%</span>
          </p>
          <div class="col">
            <input type="text" class="center-align" :class="'bg-color-'+calcSelected" id="interest" ref="interest" v-model.number="calcParams.interest">
          </div>
        </div>

        <div class="col s12 l6 center">
          <p class="center-align">Cantidad de años</p><br>
          <p class="input-field">
            <span class="without-style center-align">1</span>
            <input type="range" min="1" max="20" id="range-years" ref="range-years" v-model="calcParams.years" />
            <span class="without-style center-align">20</span>
          </p>
          <div class="col">
            <input type="text" class="center-align" :class="'bg-color-'+calcSelected" id="years" ref="years" v-model.number="calcParams.years">
          </div>
        </div>
        <p class="center-align">¿Cómo deseas evaluar tu cŕedito?</p>
        <div class="row center">
          <div class="col s8 l6">
            <select class="custom-select center-align" :class="'bg-color-'+calcSelected" id="tipo" v-model="calcSelected">
              <option v-for="(calculator, id) in calculators" :value="id">{{calculator}}</option>
            </select>
          </div>
        </div>

        <div class="row center">
          <div class="col s8 l6">
            <div class="input-field">
              <span class="fas fa-dollar-sign"></span>
              <input type="text" placeholder="1.000.000" v-model="moneyWithFormat" class="right-align">
            </div>
          </div>
        </div>

        <div class="col s12">
          <div class="col s12 ">
            <credito :calc-params="calcParams" :money="money" />
          </div>
          <div class="col s12 ">
            <cuota :calc-params="calcParams" :money="money" />
          </div>
          <div class="col s12 ">
            <ingresos :calc-params="calcParams" :money="money" />
          </div>
        </div>
      </div>
    </form>
    <div class="row">
      <p class="center-align">
        * Estos cálculos son únicamente indicativos.<br>
        Para obtener un resultado exacto lo invitamos a solicitar una cotización a tráves de su asesor.
      </p>
    </div>
  </div>
</template>

<script>
  // TODO: add effects and animate form inputs
  // TODO: Add transitions fonr calculators
  import Credito from '~/components/Credito.vue'
  import Cuota from '~/components/Cuota.vue'
  import Ingresos from '~/components/Ingresos.vue'

  export default {
    data() {
      return {
        // Calculator params
        moneyWithFormat: null,
        calcParams: {
          interest: 12,
          years: 15,
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
    computed: {
      currentMoney(){
        return this.moneyWithFormat
      },
      money(){
        if (this.moneyWithFormat) {
          return parseInt(this.moneyWithFormat.replace( /\D/g, ''))
        } else {
          return 0
        }
      },

      // verify ranges min and max
      verifyInterest(){
        return this.calcParams.interest
      },
      verifyYears(){
        return this.calcParams.years
      }
    },
    methods: {
      // currency format
      toCurrency(value) {
        if (value) {
          return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ".", '.')
        }
      },
    },
    watch: {
      currentMoney(){
        if (this.moneyWithFormat ) {
          let valor = parseInt(this.moneyWithFormat.replace( /\D/g, ''))
          if (valor > 999) {
            this.moneyWithFormat = this.toCurrency(valor)
          }
        } else {
          this.moneyWithFormat = null
        }
      },

      // Verify range fields throught computedsssss
      verifyInterest(){
        if (this.calcParams.interest > 20 ) {
          this.calcParams.interest = 20
        } else if (this.calcParams.interest < 10) {
          this.calcParams.interest = 10
        }
      },
      verifyYears(){
        if (this.calcParams.years > 20 ) {
          this.calcParams.years = 20
        } else if (this.calcParams.years < 1) {
          this.calcParams.years = 1
        }
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
  .custom-form{
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }
  .custom-form:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.4s ease
  }

  .custom-form.bg-0:before{
    background-color: rgb(91, 174, 212);
  }
  .custom-form.bg-1:before{
    background-color: rgb(40, 131, 172);
  }
  .custom-form.bg-2:before{
    background-color: rgb(40, 172, 152);
  }

  .bg-color-0{
    background-color: rgb(91, 174, 212);
  }
  .bg-color-1{
    background-color: rgb(40, 131, 172);
  }
  .bg-color-2{
    background-color: rgb(40, 172, 152);
  }
  .s-radius{
    border-radius: 6px
  }
  .input-field{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 100%
  }
  .input-field > input{
    flex: 0 0 75%;
    border: 2px solid rgb(201, 201, 201);
    margin: 0;
  }
  .input-field + .col {
    padding: 0 0

  }
  .input-field + .col > input {
    border: none !important
  }
  .input-field input[type="range"]{
    padding: 6px 0;
    border: none
  }
  .input-field > span{
    flex: 0 0 10%;
    padding: 4px;
    margin: 0;
    background-color: rgb(218, 221, 235);
    box-sizing: border-box;
    border: 2px solid rgb(201, 201, 201);
    color: rgb(26, 35, 60);
  }
  .input-field span:first-child{
    border-radius: 4px 0 0 4px;
  }
  .input-field span:last-child{
    border-radius: 0 4px 4px 0;
  }
  .input-field .without-style{
    color: rgb(21, 21, 85);
    border: none;
    background-color: rgba(139, 154, 209, 0);
    padding: 4px 0;
  }
  .center{justify-content: center;}
  .custom-select{
    color: rgb(21, 21, 85);
    border: none;
    border-bottom: 1px solid rgba(16, 14, 47, 0.77)
  }
  .center-align{text-align: center;}
  .left-align{text-align: left;}
  .right-align{text-align: right;}

  .calculatorIn{
    animation: fill-down 0.6s ease forwards
  }

  @keyframes fill-up {
    0% {
      opacity: 1;
      height: 0px
    }
    100% {

    }
  }

  .calculatorOut{

  }

</style>
