<template>
  <div class="emoji">
    <div class="pt-4 textarea">Express Your Emotions</div>
    <h4 class="textarea-two pt-2">How do you feel ?</h4>
    <div class="grid-area">
      <div v-for="emoji in allEmoji" :key="emoji.imageId">
        <div
          @click="select(emoji)"
          class="d-flex flex-column align-items-center"
          :class="{selected:(selectedVal.imageId === emoji.imageId)||$store.state.allData.emoji.imageId === emoji.imageId}"
        >
          <div class="image-area d-flex flex-column align-items-center justify-content-center">
            <img class="img-fluid img-size" :src="emoji.imageSample" alt />
          </div>
          <div class="text-container">{{emoji.imagetext}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allEmoji: null,
      selectedVal: ""
    };
  },
  methods: {
    select(x) {
      this.selectedVal = x;
      this.$store.commit("setEmoji", x);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/text-one") {
      if (this.$store.state.allData.emoji == "") {
        to.meta.checkText = true;
        this.$toastr.error("Require emoji to continue", "", {
          timeOut: 2000,
          extendedTimeOut: 2000
        });
      } else {
        next();
      }
    } else {
      next();
    }
  },
  mounted() {
    let allEmoji = [
      {
        imageId: 1,
        imageSample:
          "http://www.pngall.com/wp-content/uploads/2016/06/Fearful-Emoji-PNG.png",
        imagetext: "Fearful"
      },
      {
        imageId: 2,
        imageSample:
          "http://www.pngall.com/wp-content/uploads/2016/06/Face-with-Tears-of-Joy-Emoji-PNG.png",
        imagetext: "Laughing"
      },
      {
        imageId: 3,
        imageSample:
          "http://www.pngmart.com/files/8/Crying-Emoji-PNG-Transparent.png",
        imagetext: "Crying"
      },
      {
        imageId: 4,
        imageSample:
          "https://www.pngsee.com/uploadpng/full/244-2443390_eye-roll-emoji-png-unamused-emoji-transparent-png.png",
        imagetext: "Unamused"
      },
      {
        imageId: 5,
        imageSample: "http://www.pngmart.com/files/1/Angry-Emoji-PNG-Photo.png",
        imagetext: "Angry"
      },
      {
        imageId: 6,
        imageSample:
          "https://clipart.info/images/ccovers/1496184263Neutral-Emoji-Png-transparent-background.png",
        imagetext: "Neutral"
      },
      {
        imageId: 7,
        imageSample:
          "http://www.pngall.com/wp-content/uploads/2016/06/Love-Hearts-Eyes-Emoji-PNG.png",
        imagetext: "Joyous"
      },
      {
        imageId: 8,
        imageSample:
          "http://www.pngall.com/wp-content/uploads/2016/06/Smiling-Face-with-Sunglasses-Cool-Emoji-PNG.png",
        imagetext: "Happy"
      },
      {
        imageId: 9,
        imageSample:
          "http://www.pngall.com/wp-content/uploads/2016/06/Wink-Emoji-PNG.png",
        imagetext: "Winking"
      }
    ];
    this.allEmoji = allEmoji;
  },
  updated() {
    console.log(this.$store.state.allData.emoji);
  }
};
</script>

<style scoped>
.emoji {
  padding-top: 10vh;
}
.emoji .textarea {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 100;
  text-align: center;
  color: #212b36;
}
.emoji .textarea-two {
  color: #8b8f94;
  font-size: 1.85714rem;
  line-height: 2rem;
  font-weight: 400;
  text-align: center;
}
.grid-area {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  justify-content: center;
  margin: 8vh 0 16vh;
}
.img-size {
  width: 100px;
  height: 100px;
}
.image-area {
  width: 220px;
  height: 200px;
  padding: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-left: 1px solid #dfe4e8;
  border-right: 1px solid #dfe4e8;
  border-top: 1px solid #dfe4e8;
  background: #f3f4fa;
}
.text-container {
  border-left: 1px solid #dfe4e8;
  border-right: 1px solid #dfe4e8;
  border-bottom: 1px solid #dfe4e8;
  text-align: center;
  padding: 15px;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.selected {
  border: 1px solid #5c6ac4;
  border-radius: 8px;
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