<template>
  <div class="index">
    <text class="text--normal">这是首页</text>
  </div>
</template>
 
<script>
export default {
  async created() {
    this.$toast('这是首页')
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import './common/scss/base.scss';
.index {
  align-items: center;
  justify-content: center;
}

</style>