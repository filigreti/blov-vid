<template>
  <div class="home">
    <div
      class="shadow bg-light d-flex align-items-center justify-content-center mr-3 flex-column area"
    >
      <h1 class="text-dark pt-5 pl-2">
        Create Text,
        <br />Image,
        <br />and Video gifs
        <br />in seconds
      </h1>
      <router-link to="/emoji" class="button mt-3">Get Started</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.home {
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1df0481482213.5d01c8334a270.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
}
.area {
  height: 50vh;
  padding: 0 20px;
}
.home h1 {
  font-size: 40px;
  font-weight: bolder;
}
.button {
  box-sizing: border-box;
  margin-bottom: 2px;
  padding: 16px 32px;
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
}
</style>
