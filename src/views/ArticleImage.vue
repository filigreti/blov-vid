<template>
  <div class="article-image d-flex flex-column justify-content-center">
    <div class="textarea pt-2">Enter an Image of the article</div>
    <h4 class="textarea-two pt-3">Paste a link of the image</h4>
    <div class="input-area">
      <input
        autofocus
        placeholder="Paste Link - Image will show below if link is valid"
        class="input"
        type="text"
        name
        id
        v-model="image"
      />
    </div>
    <div class="image-container">
      <img :src="image" class="img-fluid image-area" alt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    image: {
      get() {
        return this.$store.state.allData.articleImage;
      },
      set(value) {
        this.$store.commit("updateImage", value);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/comment") {
      if (this.$store.state.allData.articleImage == "") {
        to.meta.checkText = true;
        this.$toastr.error("Require image link to continue", "", {
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
.article-image {
  padding-top: 10vh;
  height: 80vh;
}
.article-image .textarea {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 100;
  text-align: center;
  color: #212b36;
}
.article-image .textarea-two {
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
.image-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.image-area {
  height: 200px;
  width: 200px;
  filter: brightness(80%);
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