<template>
  <header>
    <nav class="transparent">
      <div class="brand">
        <h1>SiteName</h1>
      </div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><nuxt-link to="/">
          <i class="fas fa-home"></i>
        </nuxt-link></li>
        <li><nuxt-link to="/calculator">
          Calculadora <i class="fas fa-calculator"></i>
        </nuxt-link></li>
      </ul>
      <button id="menu-toggler">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </nav>

  </header>
</template>

<script>
export default {
  mounted() {
    var menuToggler = document.getElementById('menu-toggler');
    var menu = document.querySelector('nav > ul');
    var menuItem = document.querySelectorAll('nav > ul > li');

    window.addEventListener('resize', function() {

      if(document.body.clientWidth > 660) {
        menu.style.visibility = 'visible';
      } else {
        menuToggler.className = '';
        menu.style.visibility = 'hidden';
      }

    });

    menuToggler.addEventListener('click', function() {

      if(this.className == 'active') {
        this.className = '';
        menu.style.visibility = 'hidden';
        sub1.style.display = 'none';
      } else {
        this.className = 'active';
        menu.style.visibility = 'visible';
        sub1.style.display = 'none';
      }

    });

  }
}


</script>

<style>
/* navbar */
nav {
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

/* first level */
nav > ul {
  visibility: visible;
  display: flex;
  list-style: none;
}

nav > ul > li {
  height: 100%;
  margin-right: 7px;
}

nav > ul > li > a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  padding: 7px 14px;
  border-radius: 4px;
}

nav > ul > li > a:hover {
  color: #00BCD4;
}

nav > ul > li > a.active {
  background-color: #00BCD4;
  color: #ffffff;
  transition: all 0.5s;
}

/* second level */
nav > ul > li > ul {
  position: absolute;
  top: 60px;
  list-style: none;
  display: none;
  visibility: hidden;
  min-width: 200px;
  background-color: #2b354b;
}

nav > ul > li > ul::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  left: 24px;
  top: -10px;
  opacity: 1;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #2b354b;
}

nav > ul > li > ul > li {
  display: flex;
  margin: 0;
  border-bottom: 2px solid #273044;
}

nav > ul > li > ul > li > a {
  color: white;
  text-decoration: none;
  padding: 10px 16px;
  flex: 1;
  transition: 0.25s all;
}

nav > ul > li > ul > li > a:hover {
  color: #00BCD4;
  transform: translatex(10px);
}

#menu-toggler {
  visibility: hidden;
  display: none;
}

@media (max-width: 660px) {
  nav > ul {
    visibility: hidden;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2b354b;
  }

  nav > ul > li {
    margin-right: 0;
    display: flex;
    width: 100%;
  }

  nav > ul > li > a {
    flex: 1;
    text-align: center;
    padding: 16px;
    color: white;
  }

  #menu-toggler {
    display: flex;
    visibility: visible;
    padding: 10px 12px;
    background-color: white;
    border: 1px solid #efefef;
  }

  #menu-toggler.active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.2);
    outline: none;
  }
}
</style>
