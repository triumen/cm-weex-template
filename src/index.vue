<template>
  <div class="index page">
    <cm-hello @cmClick="jump2Second"></cm-hello>
  </div>
</template>

<script>
import CmHello from "./components/CmHello";
export default {
  async created() {
    this.$toast('这是首页')
  },
  components: {
    CmHello
  },
  data() {
    return {};
  },
  methods: {
    jump2Second() {
      this.$router.push('/second')
    }
  }
};
</script>

<style scoped>
@import './common/scss/base.scss';
.index {
  align-items: center;
  justify-content: center;
}
</style>