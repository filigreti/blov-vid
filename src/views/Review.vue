<template>
  <div class="review">
    <h2 class="text-center pt-3">Review</h2>
    <div class="grid mt-5 mx-3">
      <div class="card shadow p-3">
        <h2 class="text-center">Reactions</h2>
        <div class="d-flex justify-content-center align-items-center w-100 h-100 flex-column">
          <img :src="newStore.emoji.imageSample" class="img-fluid pt-2" alt />
          <h3 class="text-center pt-3">{{newStore.emoji.imagetext}}</h3>
        </div>
      </div>
      <div class="card shadow p-3">
        <h2 class="text-center">Title</h2>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
          <h3 class="text-center pt-4">{{newStore.textOne}}</h3>
        </div>
      </div>
      <div class="card shadow p-3">
        <h2 class="text-center">Article Image</h2>
        <div class="d-flex justify-content-center align-items-center w-100 h-100 flex-column">
          <img :src="newStore.articleImage" class="img-fluid pt-2" alt />
        </div>
      </div>
      <div class="card shadow p-3">
        <h2 class="text-center">Comment</h2>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
          <h3 class="text-center pt-4">{{newStore.comment}}</h3>
        </div>
      </div>
      <div class="card shadow p-3">
        <h2 class="text-center">Name</h2>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
          <h3 class="text-center pt-4">{{newStore.name}}</h3>
        </div>
      </div>
    </div>
    <div class="bottom">
      <button @click="sendInfo()" class="button">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newStore: null,
      sendData: null
    };
  },
  methods: {
    async sendInfo() {
      let breakText = function(str) {
        return str
          .split(/((?:\w+ ){7})/g)
          .filter(Boolean)
          .join("\n");
      };
      let all = this.sendData;
      all.timeline.tracks[0].clips.forEach((key, index) => {
        let k = key.asset.text;
        if (k.length > 30) {
          all.timeline.tracks[0].clips[index].asset.text = breakText(k);
        }
      });
      let axiosConfig = {
        headers: {
          "x-api-key": "QJ8y3yiUde62tbrIB8dg05O1Xrqamx5d9u4mXlhl",
          "Content-Type": "application/json"
        }
      };

      let res = await axios.post(
        "https://api.shotstack.io/v1/render",
        all,
        axiosConfig
      );
      if ((res.data.status = 201)) {
        this.$store.commit("updateData", res.data.response);
        this.$router.push({ name: "final" });
      }
    }
  },
  mounted() {
    this.newStore = this.$store.state.allData;
    console.log(this.newStore);
    let allData = {
      timeline: {
        soundtrack: {
          src:
            "https://songsa.s3-us-west-1.amazonaws.com/Ikson+-+Paradise+(Travel+Vlog+Background+Music)+(Free+To+Use+Music).mp3",
          effect: "fadeInFadeOut"
        },
        background: "#000000",
        tracks: [
          {
            clips: [
              {
                asset: {
                  type: "title",
                  text: `${this.newStore.name} is ${this.newStore.emoji.imagetext} about something`,
                  style: "chunk",
                  position: "top",
                  size: "x-large"
                },
                start: 2,
                length: 3,
                transition: {
                  in: "fade",
                  out: "fade"
                },
                effect: "zoomIn"
              },
              {
                asset: {
                  type: "title",
                  text: `${this.newStore.textOne}`,
                  style: "chunkLight",
                  position: "center",
                  size: "x-large"
                },
                start: 7,
                length: 3,
                transition: {
                  in: "fade",
                  out: "fade"
                }
              },
              {
                asset: {
                  type: "title",
                  text: `${this.newStore.name} Says`,
                  style: "subtitle",
                  position: "chunk",
                  size: "x-large"
                },
                start: 11,
                length: 2,
                transition: {
                  in: "fade",
                  out: "fade"
                },
                effect: "zoomIn"
              },
              {
                asset: {
                  type: "title",
                  text: `"${this.newStore.comment}"`,
                  style: "subtitle",
                  position: "center",
                  size: "x-large"
                },
                start: 13,
                length: 4
              },
              {
                asset: {
                  type: "title",
                  text: "What do you think ?",
                  style: "chunk",
                  position: "topLeft",
                  size: "xx-large",
                  offset: {
                    x: -0.68
                  }
                },
                start: 18,
                length: 3
              }
            ]
          },
          {
            clips: [
              {
                asset: {
                  type: "image",
                  src: `${this.newStore.emoji.imageSample}`
                },
                start: 0,
                length: 6,
                scale: 0.3,
                position: "bottom"
              }
            ]
          },
          {
            clips: [
              {
                asset: {
                  type: "image",
                  src: `${this.newStore.articleImage}`
                },
                start: 6,
                length: 4,
                filter: "darken",
                position: "top"
              }
            ]
          },
          {
            clips: [
              {
                asset: {
                  type: "image",
                  src:
                    "https://songsa.s3-us-west-1.amazonaws.com/what+do+you+think_.png"
                },
                start: 18,
                length: 3,
                scale: 0.6,
                position: "bottomRight"
              }
            ]
          },
          {
            clips: [
              {
                asset: {
                  type: "image",
                  src:
                    "https://songsa.s3-us-west-1.amazonaws.com/join_the_conversation.jpg"
                },
                start: 21,
                length: 3,
                scale: 0.7,
                position: "center"
              }
            ]
          }
        ]
      },
      output: {
        format: "mp4",
        resolution: "hd"
      }
    };
    this.sendData = allData;
  }
};
</script>

<style scoped>
.review {
  padding-top: 10vh;
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
.grid h2 {
  text-decoration: underline;
}
.bottom {
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 5px;
  margin: auto;
  width: 100%;
}
</style>