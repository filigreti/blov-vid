<template>
  <div>
    <div class="alldata d-flex">
      <div class="w-50 h-100 justify-content-center d-flex align-items-center flex-column first">
        <h3 class="pt-2">Id: {{$store.state.allData.newData.id}}</h3>
        <h3 class="pt-2">Message: {{$store.state.allData.newData.message}}</h3>
        <button
          v-if="updatedValues.status !== 'done' && updatedValues.status !== 'failed'"
          @click="update()"
          class="button"
        >update</button>
        <button @click="finish" v-else class="button">Finish</button>
      </div>
      <div class="w-50 h-100 justify-content-center d-flex align-items-center flex-column second">
        <div
          class="w-50 h-100 justify-content-center d-flex align-items-center flex-column"
          v-if="updatedValues.status == 'failed'"
        >
          <h2 class="text-danger text-center pt-4">Something went wrong!! Try Again</h2>
          <p>{{updatedValues.error}}</p>
        </div>
        <div
          class="w-50 h-100 justify-content-center d-flex align-items-center flex-column"
          v-else-if="updatedValues.status == 'rendering'"
        >
          <h2
            class="text-light text-center pt-4"
          >Video still loading at the back, click button in 30 sec</h2>
        </div>
        <div
          class="w-50 h-100 justify-content-center d-flex align-items-center flex-column"
          v-else-if="updatedValues.status == 'done'"
        >
          <h2 class="text-white text-center pt-4">Video Completed</h2>
          <h3 class="text-white">{{updatedValues.url}}</h3>
          <video width="400" controls>
            <source :src="updatedValues.url" type="video/mp4" />
          </video>
          <social-sharing :url="updatedValues.url" inline-template>
            <div class="d-flex mt-3 flex-column">
              <network network="facebook">
                <i class="fa fa-facebook button"></i>
              </network>
              <network network="twitter">
                <i class="fa fa-fw fa-twitter button mt-3"></i>
              </network>
            </div>
          </social-sharing>
        </div>

        <div v-else>
          <img src="@/assets/pacman.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      updatedValues: {}
    };
  },
  methods: {
    async update() {
      let axiosConfig = {
        headers: {
          "x-api-key": "QJ8y3yiUde62tbrIB8dg05O1Xrqamx5d9u4mXlhl",
          "Content-Type": "application/json;charset=UTF-8"
        }
      };

      let res = await axios.get(
        `https://api.shotstack.io/v1/render/${this.$store.state.allData.newData.id}`,
        axiosConfig
      );
      if ((res.data.success = true)) {
        this.updatedValues = res.data.response;
        console.log(res);
        console.log(this.updatedValues);
      }
    },
    finish() {
      this.$store.commit("setEmoji", "");
      this.$store.commit("updateMessage", "");
      this.$store.commit("updateImage", "");
      this.$store.commit("updateComment", "");
      this.$store.commit("updateName", "");
      this.$store.commit("updateData", "");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.alldata {
  padding-top: 10vh;
  width: 100%;
  height: 100vh;
}
.second {
  background: #455a64;
  color: rgba(0, 0, 0, 0.774);
}
.facebook {
  font-size: 40px !important;
}
.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}
</style>