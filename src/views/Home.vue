<template>
  <div class="home">
    <div>{{ obj.name }}</div>
    <div>{{user}}</div>
    <button @click="update">点击一下</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { reactive, ref } from "vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  setup() {
    console.log("初始化前");
    const obj = reactive({
      name: "frist vue demo"
    });
    const user = ref(1);

    const update = () => {
      user.value = user.value + 1;
    };

    // setInterval(() => {
    //   update();
    // }, 1000);
    return {
      user: user,
      update
    };
  },
  beforeMount() {
    console.log("dom挂在前");
  },
  mounted() {
    console.log("dom挂在后");
  }
};
</script>
