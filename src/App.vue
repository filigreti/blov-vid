<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="$route.path == '/'" to="/">
        <h2 class="logo pl-3 pt-2">
          Bloverse
          <span>[a.i]</span>
        </h2>
      </router-link>
      <div class="other" v-if="$route.path !== '/'">
        <div class="arrow d-flex align-items-center" @click="$router.go(-1)">
          <i class="fas fa-arrow-circle-left fa-2x"></i>
          <span class="increase">Back</span>
        </div>

        <img
          @click="$router.push({path:'/'})"
          src="https://demz-web.herokuapp.com/img/logo-icon.1e9e9e29.svg"
          alt
        />
        <div></div>
      </div>

      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>-->
    </div>
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <router-view />
    </transition>

    <div
      v-if="$route.path !== '/' && $route.path !== '/review' && $route.path !== '/final'"
      class="footer bg-light"
    >
      <router-link :to="nextRoute" class="button">Next</router-link>
    </div>
  </div>
</template>
<script>
import logo from "./components/LogoArea";
export default {
  data() {
    return {
      nextRoute: null
    };
  },
  components: {
    logo
  },
  watch: {
    $route(x) {
      if (this.$route.path == "/emoji") {
        this.nextRoute = "/text-one";
      } else if (this.$route.path == "/text-one") {
        this.nextRoute = "/article-image";
      } else if (this.$route.path == "/article-image") {
        this.nextRoute = "/comment";
      } else if (this.$route.path == "/comment") {
        this.nextRoute = "/name";
      } else if (this.$route.path == "/name") {
        this.nextRoute = "/review";
      }
    }
  }

  // computed: {
  //   route() {
  //     return;
  //   }
  // },
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
  font-family: "Rajdhani", sans-serif;
}
#nav {
  width: 100%;
  height: 10vh;
  position: fixed;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a:hover {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  color: #333333;
  font-weight: bold;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12vh;
  border-top: 2px solid #dfe4e8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.other {
  background: white;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 3px solid #dfe4e8;
}
.arrow {
  position: relative;
  left: 20px;
}
.increase {
  font-size: 20px;
  position: relative;
  left: 3px;
}
.button {
  box-sizing: border-box;
  height: 50px;
  width: 160px;
  border: none;
  border-radius: 4px;
  background-color: #5c6ac4;
  color: #fff;
  cursor: pointer;
  font-size: 1.14286rem;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:hover {
  text-decoration: none;
  background-color: #42b983;
  color: #dfe4e8;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
  background-color: grey;
}
button,
a,
i {
  outline: none !important;
}
</style>
