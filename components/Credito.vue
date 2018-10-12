<template>
  <div class="row">
    <h1>Credito</h1>
    <div class="row">
      <div class="col l4">
        <h2>Cuota</h2>
        <h1>{{cuota}}</h1>
      </div>
      <div class="col l4">
        <h2>Ingresos personales o familiares</h2>
        <h1>{{ingresos}}</h1>
      </div>
      <div class="col l4">
        <h2>Desceuento FRECH NO VIS</h2>
        <h1>{{descuentoFrech}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['calcParams'],
    data(){
      return {
      }
    },
    computed: {
      cuota(){
        let i = this.calcParams.interest / 100
        let n = this.calcParams.years
        let vp = this.calcParams.money
        var credit = vp * ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1)) / 12
        return Math.round(credit / 1000, 0) * 1000
      },
      ingresos(){
        return Math.round(this.cuota * this.calcParams.valueIngresos / 1000, 0) * 1000
      },
      descuentoFrech(){
        return Math.round(this.cuota * this.calcParams.frechNoVis / 1000, 0) * 1000
      }

    }
  }
</script>

<style media="screen">
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
