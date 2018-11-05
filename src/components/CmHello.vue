<template>
  <div class="cm-hello">
    <text class="message">超盟金服</text>
    <text class="message" @click="handleClick">点击我切换第二页</text>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    handleClick() {
      this.$emit('cmClick')
    }
  }
}
</script>

<style lang="scss">
@import '../common/scss/base.scss';
.message {
  size: $title-size;
}
.cm-hello {
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>

