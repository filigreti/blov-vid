<template>
  <div class="textTitle d-flex flex-column justify-content-center">
    <div class="textarea pt-2">Enter your name</div>
    <h4 class="textarea-two pt-3">Let the world know who you are</h4>
    <div class="input-area">
      <input
        maxlength="40"
        autofocus
        placeholder="Your Name"
        class="input"
        type="text"
        v-model="message"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    message: {
      get() {
        return this.$store.state.allData.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/review") {
      if (this.$store.state.allData.name == "") {
        to.meta.checkText = true;
        this.$toastr.error("Require name to continue", "", {
          timeOut: 2000,
          extendedTimeOut: 2000
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
};
</script>

<style scoped>
.textTitle {
  padding-top: 10vh;
  height: 80vh;
}
.textTitle .textarea {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 100;
  text-align: center;
  color: #212b36;
}
.textTitle .textarea-two {
  color: #8b8f94;
  font-size: 1.85714rem;
  line-height: 2rem;
  font-weight: 400;
  text-align: center;
}
.input-area {
  width: 50vw;
  margin: 6vh auto 0;
}
.input {
  outline: none;
  height: 50px;
  padding: 40px 0px 40px 30px;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
}
</style>
<style>
#toast-container {
  position: fixed;
  background: black;
  opacity: 0.7;
  top: 15vh !important;
}
.toast-error {
  background: black;
  color: white;
  opacity: 0.7;
}
.toast-message {
  background: black;
  color: white;
}
#toast-container > .toast-error {
  background-image: none !important;
}
#toast-container > div {
  margin: 0;
}
.toast-bottom-left {
  top: 15vh !important;
}
</style>