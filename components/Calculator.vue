<template>
  <div class="row">
    <h4 class="center-align">Calcula tú crédito</h4>
    <form class="s-radius custom-form gray" >
      <div class="row">

        <div class="col s12 l6">
          <!-- Calculator -->
          <h3 class="center-align primary white-text thin">
            ¿Cómo deseas evaluar tu cŕedito? <i class="fas fa-money-bill-wave"></i>
          </h3>
          <div class="row center">
            <div class="col s10 select-field">
              <!-- TODO: mejorar select -->
              <select class="center-align" id="tipo" v-model="calcSelected" @change="moneyWithFormat = 0">
                <option v-for="(calculator, id) in calculators" :value="id">{{calculator}}</option>
              </select>
            </div>
          </div>

          <div class="row center">
            <div class="col s12">
              <div class="input-field">
                <span class="fas fa-dollar-sign"></span>
                <input type="text" :placeholder="moneyPlaceHolder" v-model="moneyWithFormat" class="right-align large-text transparent" >
              </div>
            </div>
          </div>

          <h3 class="center-align primary white-text thin">
            Configuraciones <i class="fas fa-cog right"></i>
          </h3>
          <!-- Interes -->
          <div class="col s12 center s-radius">
            <p class="center-align">Selecciona la tasa de Interés</p><br>
            <p class="input-field">
              <span class="without-style center-align">10%</span>
              <input type="range" min="10" max="20" id="range-interest" ref="range-interest" v-model="calcParams.interest" />
              <span class="without-style center-align">20%</span>
            </p>
            <div class="col center">
              <span>{{calcParams.interest}}%</span>
            </div>
          </div>

          <hr>

          <!-- Years -->
          <div class="col s12 center s-radius">
            <p class="center-align">Cantidad de años</p><br>
            <p class="input-field">
              <span class="without-style center-align">1</span>
              <input type="range" min="1" max="20" id="range-years" ref="range-years" v-model="calcParams.years" />
              <span class="without-style center-align">20</span>
            </p>
            <div class="col center">
              <span>{{calcParams.years}} año{{(calcParams.years > 1) ? 's' : ''}}</span>
            </div>
          </div>

        </div>

        <div class="in-columns s12 l6 white-text s-radius" :class="'bg-color-'+calcSelected">
          <credito :calc-params="calcParams" :money="money" v-show="calcSelected == 0" />
          <cuota :calc-params="calcParams" :money="money" v-show="calcSelected == 1" />
          <ingresos :calc-params="calcParams" :money="money" v-show="calcSelected == 2" />
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
          'Según mi crédito a financiar',
          'Según mi capacidad de pago',
          'Según mis ingresos personales o familiares'
        ]
      }
    },
    computed: {
      // placeholder for money with format input
      moneyPlaceHolder(){

        switch (this.calcSelected) {
          case 0:
            return 'Crédito, p. ej. $ 180.000.000'
            break;
          case 1:
            return 'Cuota, p. ej. $ 1.300.000'
            break;
          case 2:
            return 'Ingresos, p. ej. $ 3.500.000'
            break;
        }
      },
      // Look changes in money input with currency format
      currentMoney(){
        return this.moneyWithFormat
      },

      // Money for send to calculators without format, only the number
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

  hr {
    display: block;
    width: 100%;
    border-style: dashed;
    border-width: 1px;
    border-color: rgb(175, 180, 207)
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
  .spaced {
    justify-content: space-between;
  }
  .now-wrap{
    flex-wrap: nowrap;
  }
  .col{
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    margin: auto
  }
  .in-columns{
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease
  }
  .up-down-margin{
    margin: 10px 0;
  }
  .without-margin{
    margin: 0 !important;
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

  .input-field{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 100%
  }
  .input-field > input{
    width: 80%;
    border: 2px solid rgb(201, 201, 201);
    color: rgb(41, 60, 62);
    transition: background-color 0.4s ease
  }
  .input-field > input::placeholder{
    color:rgb(110, 164, 172)
  }
  .input-field + .col {
    padding: 0 0
  }
  .input-field + .col > input {
    border: none !important;
    color: #fff;
    transition: background-color 0.4s ease
  }
  .input-field input[type="range"]{
    padding: 6px 0;
    border: none
  }
  .input-field > span{
    width: 10%;
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
  .custom-select{
    color: rgb(21, 21, 85);
    border: none;
    border-bottom: 1px solid rgba(16, 14, 47, 0.77);
    transition: background-color 0.4s ease
  }

  /* Reset Select */
  .select-field {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #2c3e50;
    background-image: none;
  }
  /* Custom Select */
  .select-field {
    position: relative;
    display: block;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #2c3e50;
    overflow: hidden;
    border-radius: .25em;
  }
  select-field {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 .5em;
    color: #fff;
    cursor: pointer;
  }
  select-field::-ms-expand {
    display: none;
  }
  /* Arrow */
  .select-field::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: #34495e;
    pointer-events: none;
  }
  /* Transition */
  .select-field:hover::after {
    color: #f39c12;
  }
  .select-field::after {
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
  /* colors */
  .transparent{background-color: transparent}
  .primary{background-color: #283db8}
  .primary-text{background-color: #283db8}
  .secondary{background-color: #fa3ead}
  .secondary-text{background-color: #fa3ead}
  .custom-form.bg-0:before{
    background-color: rgb(237, 237, 237);
  }
  .custom-form.bg-1:before{
    background-color: rgb(228, 228, 228);
  }
  .custom-form.bg-2:before{
    background-color: rgb(209, 231, 230);
  }
  .gray{background-color: rgb(237, 235, 235)}
  .bg-color-0{
    background-color: #283db8;
  }
  .bg-color-1{
    background-color: #182da8;
  }
  .bg-color-2{
    background-color: #fa3ead;
  }
  .darken-1{
    background-color: rgba(0, 0, 0, 0.25)
  }
  .darken-2{
    background-color: rgba(0, 0, 0, 0.5)
  }
  .darken-3{
    background-color: rgba(0, 0, 0, 0.9)
  }
  .white-text{color: #fff}

  /* typography */
  .thin{font-weight: 200}
  @media screen and (max-width: 660px) {
    .large-text{font-size: 1.1em}
  }
  @media screen and (min-width: 661px) {
    .large-text{font-size: 1.3em}
  }

  /* radius */
  .s-radius{ border-radius: 6px}
  .tiny-radius{ border-radius: 3px}
  .circle{ border-radius: 100% }

  /* align content and paragraph */
  .center{justify-content: center;}
  .middle{align-items: center;}
  .center-align{text-align: center;}
  .left-align{text-align: left;}
  .right-align{text-align: right;}

  /* Animations */
  .calculator-in{
    animation: fill-down 0.6s ease forwards
  }

  @keyframes fill-up {
    0% {
      opacity: 0;
      height: 0px
    }
    100% {
      opacity: 0;
      height: auto
    }
  }

  .calculatorOut{

  }

</style>
