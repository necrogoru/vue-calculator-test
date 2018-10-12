<template>
  <div id="body">
    <the-header/>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
    <the-footer/>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style media="screen">

html {
  font-family: 'Niramit', sans-serif;
}
#body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.flex-container{
  display: flex;
  align-items: stretch;
}
.row{
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
}
h1,h2,h3,h4,h5{margin: 5px 0;width: 100%}
.columns{
  display: flex;
  flex-direction: column;
}
.col{flex-grow: 1}

@media only screen and (min-width: 661px) {
  .container{
    width: 70%;
    padding: 20px
  }
}
@media only screen and (max-width: 660px) {
  .container{
    width: 97%;
    padding: 10px
  }
}
.center-align{text-align: center;}
.center{justify-content: center;}
.left{justify-content: flex-start;}
.right{justify-content: flex-end;}
.middle{align-items: center;}

.test-ul{

}
.test-ul li{
  transition: all 0.4s;
}

.blue, .before-blue:before{background-color: rgb(25, 112, 149)}
.red, .before-red:before{background-color: rgb(163, 29, 74)}
.green, .before-green:before{background-color: rgb(31, 142, 89)}

.untouched-li:before{
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  position: absolute;
  top: 75%;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  content: '';
  z-index: -2;
}
.untouched-li, .touched-li, .contentActive{
  position: relative;
  color: white;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s ease all;
}

.touched-li:before{
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  content: '';
  z-index: -2;
}
.contentActive:before{
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  content: '';
  z-index: -2;
}

</style>
