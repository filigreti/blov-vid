<template>
  <div class="textTitle d-flex flex-column justify-content-center">
    <div class="textarea pt-2">Enter your comment</div>
    <h4 class="textarea-two pt-3">Lets hear your say in the matter (max: 40 characters)</h4>
    <div class="input-area">
      <textarea v-model="message" name id class="input pt-2" maxlength="250"></textarea>
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
        return this.$store.state.allData.comment;
      },
      set(value) {
        this.$store.commit("updateComment", value);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/name") {
      if (this.$store.state.allData.comment == "") {
        to.meta.checkText = true;
        this.$toastr.error("Enter comment to continue", "", {
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
  height: 100px;
  padding: 0px 0px 0px 30px;
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