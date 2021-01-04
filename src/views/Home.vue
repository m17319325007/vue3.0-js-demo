<template>
  <div class="home">
    <div>{{ obj.name }}</div>
    <div>{{ user }}</div>
    <input v-focus="user" type="text" value="" />
    <button @click="update">点击一下</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { reactive, ref } from "vue";
// import { useRouter } from 'vue-router';

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  setup() {
    console.log("初始化前");
    // const router = useRouter();
    const obj = reactive({
      name: "frist vue demo",
    });
    const user = ref(1);

    const update = () => {
      user.value = user.value + 1;
      // router.push('/about');
    };

    // setInterval(() => {
    //   update();
    // }, 1000);
    return {
      obj,
      user: user,
      update,
    };
  },
  beforeMount() {
    console.log("dom挂在前");
  },
  mounted() {
    console.log("dom挂在后");
  },
};
</script>
